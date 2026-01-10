import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Css/Reservacion.css';  // Asegúrate de tener el archivo CSS correctamente vinculado

const MascotasVacunasVigentes = () => {
  const [mascotas, setMascotas] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Función para cargar los datos de la API usando axios
  const cargarMascotasVacunas = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get('http://localhost:8000/api/mascotas_vacunas_vigentes'); // Reemplaza con la URL de tu API
      setMascotas(response.data.results); // Suponiendo que la respuesta está en la propiedad "results"
    } catch (err) {
      setError(err.message || 'Error desconocido');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    cargarMascotasVacunas();
  }, []);

  return (
    <div className="reservacion-container">
      <div className="reservacion-ttl">
        <p className="reservacion-titulo">Mascotas con Vacunas Vigentes</p>
        <p className="reservacion-desc">Consulta las mascotas que tienen vacunas vigentes.</p>
      </div>

      {loading && <p className="text-gray-600">Cargando...</p>}

      {error && <p className="text-red-500">{error}</p>}

      {mascotas.length > 0 ? (
        <ul className="mascotas-grid">
          {mascotas.map((mascota, index) => (
            <li key={index} className="mascota-item">
              <label className="mascota-label">
                <div className="mascota-info">
                  <span className="mascota-nombre">{mascota.nombre}</span>
                </div>
              </label>
            </li>
          ))}
        </ul>
      ) : (
        !loading && <p className="text-gray-500">No hay mascotas con vacunas vigentes.</p>
      )}
    </div>
  );
};

export default MascotasVacunasVigentes;
