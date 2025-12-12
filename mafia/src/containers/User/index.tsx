import React, { useState, useEffect } from "react";
import styles from "./User.module.scss";

type AuthMode = "login" | "register";

interface UserData {
  name?: string;
  email: string;
  password: string;
}

const User: React.FC = () => {
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
      if (user) {
        setLoggedUser(user);
        alert(`Bem-vindo(a) ${user.name || "usuário"}!`);
        setEmail("");
        setPassword("");
        setName("");
      } else {
        alert("Email ou senha incorretos");
      }
    } else {
      const exists = users.some((u) => u.email === email);
      if (exists) {
        alert("Email já cadastrado");
      } else {
        const newUser: UserData = { name, email, password };
        saveUsers([...users, newUser]);
        alert("Cadastro realizado com sucesso!");
        setMode("login");
        setEmail("");
        setPassword("");
        setName("");
      }
    }
  };

  const handleLogout = () => {
    setLoggedUser(null);
  };

  if (loggedUser) {
    return (
      <div className={styles.container}>
        <h1>Olá, {loggedUser.name || "usuário"}!</h1>
        <button onClick={handleLogout}>Sair</button>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={`${styles.side} ${styles.left}`}>
        <h1>Bem-vindo!</h1>
        <h2>Escolha a opção utilizando o botão abaixo</h2>
        <p>{mode === "login" ? "Entre na sua conta" : "Crie sua conta"}</p>
        <button onClick={() => setMode(mode === "login" ? "register" : "login")}>
          {mode === "login" ? "Registrar" : "Login"}
        </button>
      </div>

      <div className={`${styles.side} ${styles.right}`}>
        <h3>Preencha corretamente</h3>
        <form onSubmit={handleSubmit} className={styles.form}>
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
          <button type="submit">{mode === "login" ? "Login" : "Registrar"}</button>
        </form>
      </div>
    </div>
  );
};

export default User;
