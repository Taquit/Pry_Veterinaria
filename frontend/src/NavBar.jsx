    import React from "react";
    import { Link } from "react-router-dom";
    import './Pages/Css/NavBar.css'

    
    const NavBar=()=>{
        return<>
        
            <nav className="navbar">
                
                <div className="n">
                    <p className="texto">Tellus Animalium</p>
                </div>
                <div className="links">
                    <Link to= '/' className="link">Inicio</Link>
                    <Link to= '/hotel'className="link">Hotel</Link>
                    <Link to ='/tienda' className="link">Tienda</Link>
                    <Link to ='/estetica'className="link">Estetica</Link>
                    <Link to = '/login' className="link">Inicio de Sesion</Link>
                </div>
            </nav>
        </>
    }
  
    export default NavBar