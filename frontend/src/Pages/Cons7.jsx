import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Css/Reservacion.css';  // Asegúrate de que el archivo CSS esté correctamente vinculado

const PaseosPorMascota = () => {
  const [paseos, setPaseos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [mascotaId, setMascotaId] = useState(1);  // ID por defecto para la mascota

  // Función para cargar los paseos de la mascota usando POST
  const cargarPaseosPorMascota = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post('http://localhost:8000/v2/reportes/paseos-por-mascota/', {
        mascota_id: mascotaId  // Pasando el id de la mascota en el cuerpo de la solicitud
      });
      setPaseos(response.data.results); // Suponiendo que la respuesta está en la propiedad "results"
    } catch (err) {
      setError(err.message || 'Error desconocido');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    cargarPaseosPorMascota();
  }, [mascotaId]);

  return (
    <div className="reservacion-container">
      <div className="reservacion-ttl">
        <p className="reservacion-titulo">Bitácora de Paseos de la Mascota</p>
        <p className="reservacion-desc">Consulta los paseos realizados por la mascota seleccionada.</p>
      </div>

      <div className="reservacion-mascotas">
        <p className="reservacion-sbttl">Selecciona la mascota:</p>
        <input
          type="number"
          value={mascotaId}
          onChange={(e) => setMascotaId(Number(e.target.value))}
          className="input-mascota"
          min="1"
          placeholder="ID de la mascota"
        />
      </div>

      {loading && <p className="text-gray-600">Cargando...</p>}

      {error && <p className="text-red-500">{error}</p>}

      {paseos.length > 0 ? (
        <div className="report-table">
          <table className="table-gastos">
            <thead>
              <tr>
                <th>Paseador</th>
                <th>Fecha</th>
                <th>Hora de Inicio</th>
                <th>Hora de Fin</th>
                <th>Descripción</th>
                <th>Duración Total</th>
              </tr>
            </thead>
            <tbody>
              {paseos.map((paseo, index) => (
                <tr key={index}>
                  <td>{paseo.paseador}</td>
                  <td>{new Date(paseo.fecha).toLocaleDateString('es-MX')}</td>
                  <td>{paseo.hora_inicio}</td>
                  <td>{paseo.hora_fin}</td>
                  <td>{paseo.descripcion}</td>
                  <td>{paseo.duracion_total} minutos</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        !loading && <p className="text-gray-500">No hay paseos registrados para esta mascota.</p>
      )}
    </div>
  );
};

export default PaseosPorMascota;
