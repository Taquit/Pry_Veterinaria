import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Css/Reservacion.css';  // Asegúrate de que el archivo CSS esté correctamente vinculado

const MascotasConTodosServicios = () => {
  const [mascotas, setMascotas] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Función para cargar las mascotas que visitaron todos los servicios
  const cargarMascotasConTodosServicios = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get('http://localhost:8000/v2/reportes/mascotas-todas-areas/');
      setMascotas(response.data.results); // Suponiendo que la respuesta está en la propiedad "results"
    } catch (err) {
      setError(err.message || 'Error desconocido');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    cargarMascotasConTodosServicios();
  }, []);

  return (
    <div className="reservacion-container">
      <div className="reservacion-ttl">
        <p className="reservacion-titulo">Mascotas que Visitaron Todos los Servicios</p>
        <p className="reservacion-desc">Consulta las mascotas que han visitado todos los servicios disponibles: SPA, Estética y Veterinario.</p>
      </div>

      {loading && <p className="text-gray-600">Cargando...</p>}

      {error && <p className="text-red-500">{error}</p>}

      {mascotas.length > 0 ? (
        <div className="report-table">
          <table className="table-gastos">
            <thead>
              <tr>
                <th>Nombre de la Mascota</th>
              </tr>
            </thead>
            <tbody>
              {mascotas.map((mascota, index) => (
                <tr key={index}>
                  <td>{mascota.nombre}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        !loading && <p className="text-gray-500">No se encontraron mascotas que hayan visitado todos los servicios.</p>
      )}
    </div>
  );
};

export default MascotasConTodosServicios;
