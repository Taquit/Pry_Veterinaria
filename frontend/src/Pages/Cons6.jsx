import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Css/Reservacion.css';  // Asegúrate de tener el archivo CSS correctamente vinculado

const MascotasAcheckin = () => {
  const [mascotas, setMascotas] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Función para cargar las mascotas que debían llegar hoy pero no han llegado
  const cargarMascotasAcheckin = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get('http://localhost:8000/v2/reportes/mascotas-sin-checkin/'); // Reemplaza con la URL de tu API
      setMascotas(response.data.results); // Suponiendo que la respuesta está en la propiedad "results"
    } catch (err) {
      setError(err.message || 'Error desconocido');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    cargarMascotasAcheckin();
  }, []);

  return (
    <div className="reservacion-container">
      <div className="reservacion-ttl">
        <p className="reservacion-titulo">Mascotas A Check-in</p>
        <p className="reservacion-desc">Consulta las mascotas que debían llegar hoy pero no han llegado.</p>
      </div>

      {loading && <p className="text-gray-600">Cargando...</p>}

      {error && <p className="text-red-500">{error}</p>}

      {mascotas.length > 0 ? (
        <div className="report-table">
          <table className="table-gastos">
            <thead>
              <tr>
                <th>Nombre Mascota</th>
                <th>Fecha de Check-in Prevista</th>
              </tr>
            </thead>
            <tbody>
              {mascotas.map((mascota, index) => (
                <tr key={index}>
                  <td>{mascota.nombre}</td>
                  <td>{new Date(mascota.fecha_checkin_prevista).toLocaleDateString('es-MX')}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        !loading && <p className="text-gray-500">No hay mascotas pendientes de check-in.</p>
      )}
    </div>
  );
};

export default MascotasAcheckin;
