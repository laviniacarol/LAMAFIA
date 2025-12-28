import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./User.module.scss";
import { useAuth } from "../../contexts/AuthContext";

type AuthMode = "login" | "register";

interface UserData {
  name?: string;
  email: string;
  password: string;
}

const User: React.FC = () => {
  const navigate = useNavigate();
  const { signIn, signOut } = useAuth();

  const [mode, setMode] = useState<AuthMode>("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [loggedUser, setLoggedUser] = useState<UserData | null>(null);

  const getUsers = (): UserData[] => {
    const stored = localStorage.getItem("users");
    return stored ? JSON.parse(stored) : [];
  };

  const saveUsers = (users: UserData[]) => {
    localStorage.setItem("users", JSON.stringify(users));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const users = getUsers();

    if (mode === "login") {
      const user = users.find(
        (u) => u.email === email && u.password === password
      );

      if (!user) return alert("Email ou senha incorretos");

      setLoggedUser(user);
      signIn({ name: user.name, email: user.email });
    } else {
      if (users.some((u) => u.email === email)) {
        return alert("Email já cadastrado");
      }

      saveUsers([...users, { name, email, password }]);
      setMode("login");
    }

    setEmail("");
    setPassword("");
    setName("");
  };

  if (loggedUser) {
    return (
      <div className={styles.wrapper}>
        <div className={styles.box}>
          <button
            className={styles.back}
            onClick={() => navigate("/")}
            aria-label="Voltar para home"
          >
            ←
          </button>

          <h1>Olá, {loggedUser.name || "usuário"}</h1>

          <button
            onClick={() => {
              setLoggedUser(null);
              signOut();
            }}
          >
            Sair
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.box}>
        <h1>{mode === "login" ? "Entrar" : "Criar conta"}</h1>

        <form onSubmit={handleSubmit}>
          {mode === "register" && (
            <input
              type="text"
              placeholder="Nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          )}

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">
            {mode === "login" ? "Entrar" : "Registrar"}
          </button>
        </form>

        <span className={styles.switch}>
          {mode === "login" ? (
            <>
              Não tem uma conta?{" "}
              <strong onClick={() => setMode("register")}>
                Cadastre-se
              </strong>
            </>
          ) : (
            <>
              Já tem uma conta?{" "}
              <strong onClick={() => setMode("login")}>
                Entrar
              </strong>
            </>
          )}
        </span>

        <button
          className={styles.back}
          onClick={() => navigate("/")}
          aria-label="Voltar para home"
        >
          ←
        </button>
      </div>
    </div>
  );
};

export default User;
