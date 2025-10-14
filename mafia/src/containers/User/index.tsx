import React, { useState } from "react";
import styles from "./User.module.scss";

type AuthMode = "login" | "register";

const User: React.FC = () => {
  const [mode, setMode] = useState<AuthMode>("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (mode === "login") {
      console.log("Fazendo login com:", { email, password });
    } else {
      console.log("Registrando:", { name, email, password });
    }
  };

  return (
    <div className={styles.container}>
      <div className={`${styles.side} ${styles.left}`}>
        <h1>Bem-vindo!</h1>
        <h2> Escolha a opção utilizando o botão abaixo</h2>
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
