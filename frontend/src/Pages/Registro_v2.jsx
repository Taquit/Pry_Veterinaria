import React, { useState } from "react";
import axios from "axios";
import addIcon from "../Assets/addDiamond.svg"
import './Css/Registro.css';
import "./Css/CardsCss/ReDueñoCard.css"

function Registro_2(){

    const[owner,setOwner]= useState({
        "nombre": "",
        "apellido_p": "",
        "apellido_m": "",
        "telefono": "",
        "email": "",
        "contraseña": "",
        "id_domicilio": null,
        "id_contacto": null
    });
    
    const handleInput = (e)=>{
        const {name,value}= e.target;
        setOwner((prev)=>({...prev,[name]:value}));
    }

    async function handleSubmit (e){
        e.preventDefault()
        const res = await axios.post('http://localhost:8000/api/due%C3%B1os/', owner)
        console.log(res.data)
        
    };

    
    return(
        <>
        <div className="registro-container">
            <p className="registro-tittle">Empecemos!</p>
            <p className="registro-texto">Para poder proseguir con su registro y realizar reservaciones, ingrese los siguientes datos que se le solicitan</p>
            <form className='registro-form' onSubmit={handleSubmit}>
                <section className="owner-container">
                    <div className="ownerCard-section">
                        <h2>Datos del Dueño</h2>
                        <label className="label-owner"> Nombre y Apellidos:</label>
                        <div className="name-row">
                            <input type="text" name="nombre" placeholder="Escribe tu nombre" value={owner.nombre || ""} onChange={handleInput}/>
                            <input type="text" name="apellido_p" placeholder="Escribe tu apellido paterno" value={owner.apellido_p || ""} onChange={handleInput}/>
                            <input type="text" name="apellido_m" placeholder="Escribe tu apellido paterno" value={owner.apellido_m || ""} onChange={handleInput}/>
                        </div>
                        <label className="lable-owner">Telefono</label>
                        <input type="text" name="telefono" placeholder="+52 xx- xxx-xxx" value ={owner.telefono || ""} onChange={handleInput}/>
                        <label className="label-owner">Correo:</label>
                        <input type="email" name="email"  placeholder="ejemplo@gmail.com" value={owner.email || ""} onChange={handleInput}/>
                        <label className="label-owner">Contraseña:</label>
                        <input type="password" name="contraseña"  value={owner.contraseña || ""} onChange={handleInput}/>
                    </div>
                </section> 
                <button type="submit" >Registrar</button>  
            </form>
            
        </div>
        </>
    );
}

export default Registro_2;