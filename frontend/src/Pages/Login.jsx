import React, { use, useState } from "react";
import './Css/Login.css'
import { Link } from "react-router-dom";
import {useNavigate} from 'react-router-dom';
import axios from "axios";
import ReMascotCard from "./Cards/ReMascotCard";



const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    contraseña: "",
  });
  const [error,setError] = useState("");
  const navigate = useNavigate();
  
  const handleSubmit = async (e) =>{
    e.preventDefault();
    setError("");

    if(!formData.email.trim() || !formData.contraseña){
        setError("Ingresa correo y contraseña");
        return;
    }

    try{
      const res= await axios.post("http://localhost:8000/api/login/",{
        email:formData.email.trim(),
        contraseña:formData.contraseña,
      });
      localStorage.setItem("logged_in",String(res.data.id_dueño));
      localStorage.setItem("id_dueño",String(res.data.id_dueño));
      localStorage.setItem("nombre_dueño",res.data.nombre || "");
      
      console.log("Login OK:", res.data);
      
      navigate("/perfil");

    }catch(err){
      setError(err.response?.data?.detail || "credenciales invalidas");
    }
  };

  return (

  <div className="login-container">
    <img src="src/assets/animales.png" className="img-login"/>
    <div className="form-container">
      <div className="login-ttl">
          <p className="login-title">Bienvenido de nuevo</p>
          <p className="logindesc">Ingrese los siguientes datos para volver a inciar de nuevo con nostros :D</p>
        </div>
        <form onSubmit={handleSubmit} className="login-form">
          <p className="login-correo">Correo Electronico</p>
          <input
            type="email"
            placeholder="correo@dominio.com"
            value={formData.email ||""}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          <p className="login-correo">Contraseña</p>
          <input
            type="password"
            placeholder="******"
            value={formData.contraseña || ""}
            onChange={(e) => setFormData({ ...formData, contraseña: e.target.value })}
          />
          <button type="submit" className="login-button">Entrar</button>
        </form>
        <Link to = '/registro'>¿No tienes cuenta? Registrate!</Link>
        
      </div>
      
      </div>
      
  );
};

export default LoginForm;
