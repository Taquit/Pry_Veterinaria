import React from "react";
import './Pages/Css/Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Resort Manager. Todos los derechos reservados.</p>
      <div className="footer-links">
        <a href="#">Política de Privacidad</a>
        <a href="#">Términos de Uso</a>
        <a href="#">Contacto</a>
      </div>
    </footer>
  );
}

