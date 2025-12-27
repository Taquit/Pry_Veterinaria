import React from "react";
import "./Css/Reservacion.css";

function Reservacion() {
  return (
    <div className="reservacion-container">
      <h1>Formulario de Reservación</h1>
      <form>
        <div className="form-grid">
          <div className="form-section">
            <h2>Datos del dueño</h2>
            <label>
              Nombre:
              <input type="text" />
            </label>
            <label>
              Correo electrónico:
              <input type="email" />
            </label>
            <label>
              Teléfono:
              <input type="tel" />
            </label>
            <label>
              Dirección:
              <input type="text" />
            </label>
          </div>

          <div className="form-section">
            <h2>Datos de la mascota</h2>
            <label>
              Servicio
              <input type="text" />
            </label>
            <label>
              Nombre:
              <input type="text" />
            </label>
            <label>
              Peso:
              <input type="number" />
            </label>
            <label>
              Sexo:
              <select>
                <option value="">Seleccione</option>
                <option value="Macho">Macho</option>
                <option value="Hembra">Hembra</option>
              </select>
            </label>
            <label>
              Raza:
              <input type="text" />
            </label>
            <label>
              Vacunas:
              <input type="text" />
            </label>
            <label>
              Color:
              <input type="text" />
            </label>
            <label>
              Edad:
              <input type="number" />
            </label>
            <label>
              Información adicional:
              <textarea></textarea>
            </label>
          </div>
        </div>

        <button type="button">Enviar información</button>
        <p>Pronto nos pondremos en contacto contigo</p>
      </form>
    </div>
  );
}

export default Reservacion;
