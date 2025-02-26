import React, { useState } from "react";
import "./LoginScreen.css";
import logo from "./logo.png";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="app-name">RhythmRadar</h1>
        <img className="logo" src={logo} />
        <h2 className="login-title">Login</h2>
        <input
          type="email"
          placeholder="Email ou usuário"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="login-input"
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="login-input"
        />
        <button onClick={handleLogin} className="login-button">
          Entrar
        </button>

        <a href="" className="mudar-senha">
          Esqueceu a senha?
        </a>

        <a href="" className="criar-conta">
          Ainda não tem conta?
        </a>
      </div>
    </div>
  );
};

export default LoginScreen;
