import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Css/Reservacion.css';  // Asegúrate de que el archivo CSS esté correctamente vinculado

const ServiciosPorMascota = () => {
  const [servicios, setServicios] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [mascotaId, setMascotaId] = useState(1);  // ID por defecto para la mascota

  // Función para cargar los servicios por mascota usando POST
  const cargarServiciosPorMascota = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post('http://localhost:8000/v2/reportes/servicios-por-mascota/', {
        mascota_id: mascotaId  // Pasando el id de la mascota como parámetro de la URL
      });
      setServicios(response.data.results); // Suponiendo que la respuesta está en la propiedad "results"
    } catch (err) {
      setError(err.message || 'Error desconocido');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    cargarServiciosPorMascota();
  }, [mascotaId]);

  return (
    <div className="reservacion-container">
      <div className="reservacion-ttl">
        <p className="reservacion-titulo">Servicios por Mascota</p>
        <p className="reservacion-desc">Consulta los servicios realizados a la mascota seleccionada.</p>
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

      {servicios.length > 0 ? (
        <div className="report-table">
          <table className="table-gastos">
            <thead>
              <tr>
                <th>Fecha</th>
                <th>Hora</th>
                <th>Empleado</th>
                <th>Tipo Servicio</th>
                <th>Servicio</th>
              </tr>
            </thead>
            <tbody>
              {servicios.map((servicio, index) => (
                <tr key={index}>
                  <td>{new Date(servicio.fecha).toLocaleDateString('es-MX')}</td>
                  <td>{servicio.hora}</td>
                  <td>{servicio.nombre_empleado}</td>
                  <td>{servicio.tipo_servicio}</td>
                  <td>{servicio.nombre_servicio}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        !loading && <p className="text-gray-500">No hay servicios registrados para esta mascota.</p>
      )}
    </div>
  );
};

export default ServiciosPorMascota;
