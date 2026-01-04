    import React, { useState } from "react";
    import { Link } from "react-router-dom";
    import {useNavigate} from 'react-router-dom';
    import './Pages/Css/NavBar.css'

    
    const NavBar=()=>{
        const navigate = useNavigate();
        
        const [logIn,setLogIn]=useState(false);
        const handleClick=(e)=>{
            e.preventDefault()
            const id = Number(localStorage.getItem("id_dueño")|| "")
            if (id){
                setLogIn(true)
                navigate('/perfil')
            }else{
                setLogIn(false)
                navigate('/login')
                
            }

        }
        return<>
        
            <nav className="navbar">
                <div className="n">
                    <p className="texto">Paw Resort</p>
                </div>
                <div className="links">
                    <Link to= '/' className="link">Inicio</Link>
                    <Link to= '/hotel'className="link">Hotel</Link>
                    <Link to ='/tienda' className="link">Servicios</Link>
                    <Link to ='/estetica'className="link">Reservacion</Link>
                    <Link to = '/perfil' className="link" onClick={handleClick}>Perfil</Link>
                    <Link to = '/login' className="link">Inicio de Sesion</Link>
                    
                </div>
            </nav>
        </>
    }
  
    export default NavBar