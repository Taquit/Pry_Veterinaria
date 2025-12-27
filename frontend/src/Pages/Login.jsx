import React, { useState } from "react";
import './Css/Login.css'
import { Link } from "react-router-dom";

const LoginForm = ({ setLoggedIn }) => {
  const [formData, setFormData] = useState({
    user: "",
    password: "",
  });

  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.user && formData.password) {
      setLoggedIn(true); 
    } else {
      alert("Ingresa usuario y contraseña");
    }
  };

  return (

  <div className="login-container">
    <div className="login-ttl">
        <p className="login-title">Bienvenido de nuevo</p>
        <p className="logindesc">Ingrese los siguientes datos para volver a inciar de nuevo con nostros .D</p>
      </div>
      <form onSubmit={handleSubmit} className="login-form">
        <p className="login-correo">Correo Electronico</p>
        <input
          type="email"
          placeholder="Correo Electrónico"
          value={formData.user}
          onChange={(e) => setFormData({ ...formData, user: e.target.value })}
        />
        <p className="login-correo">Contraseña</p>
        <input
          type="password"
          placeholder="Contraseña"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        />
        <button type="submit">Entrar</button>
      </form>
      <Link to = '/registro'>Registrarse</Link>
    </div>
  );
};

export default LoginForm;
