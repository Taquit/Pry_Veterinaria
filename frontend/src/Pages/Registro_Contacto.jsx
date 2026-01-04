import React, { useEffect, useState } from "react";
import './Css/Registro.css';
import "./Css/CardsCss/ReDueñoCard.css"

import axios from "axios";

function Registro_Contacto ({onSaved}){
    const [contacto,setContacto]=useState({
        "nombre": "",
        "apellido_p": "",
        "apellido_m": "",
        "telefono_contacto": "",
        "correo": ""
    })

    const handleInput = (e)=>{
        const {name,value}=e.target;
        setContacto((prev)=>({...prev,[name]:value}))
    }

    async function handleSubmit(e){
        e.preventDefault()
        const res= await axios.post("http://localhost:8000/api/contactos_emergencia/",contacto);
        console.log(res.data);
        onSaved?.(res.data);
    }
    
    return (
    <div className="Emergency-container">
        
        <div className="Emergency-sectecion">
            <form id="form-contacto" onSubmit={handleSubmit}> 
            <label>Nombre:</label>
                <input 
                type="text" 
                name="nombre" 
                value={contacto.nombre || ""}
                onChange={handleInput} 
                />
            <label>Apellido Paterno:</label>
                <input 
                type="text" 
                name="apellido_p"
                value={contacto.apellido_p || ""}
                onChange={handleInput}
                />
            <label >Apellido Materno:</label>
                <input 
                type="text" 
                name="apellido_m"
                value={contacto.apellido_m ||""}
                onChange={handleInput}
                />
            <label >Telefono:</label>
                <input 
                type="text" 
                name="telefono_contacto"
                value={contacto.telefono_contacto ||""}
                onChange={handleInput}
                />
            <label >Correo:</label>
                <input 
                type="text" 
                name="correo"
                value={contacto.correo || ""}
                onChange={handleInput}
                />
            
            </form>
            
        </div>
    </div>
    );
}

export default Registro_Contacto;