import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Css/Reservacion.css';  // Asegúrate de que el archivo CSS esté correctamente vinculado

const ServiciosMensuales = () => {
  const [servicios, setServicios] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [anio, setAnio] = useState(2023);  // Año por defecto para los servicios mensuales

  // Función para cargar los servicios mensuales usando POST
  const cargarServiciosMensuales = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post('http://localhost:8000/v2/reportes/servicios-mensuales/', {
        anio: anio  // Pasando el año como parámetro en el cuerpo de la solicitud
      });
      setServicios(response.data.results); // Suponiendo que la respuesta está en la propiedad "results"
    } catch (err) {
      setError(err.message || 'Error desconocido');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    cargarServiciosMensuales();
  }, [anio]);

  return (
    <div className="reservacion-container">
      <div className="reservacion-ttl">
        <p className="reservacion-titulo">Servicios Mensuales</p>
        <p className="reservacion-desc">Consulta los servicios realizados mensualmente.</p>
      </div>

      <div className="reservacion-mascotas">
        <p className="reservacion-sbttl">Selecciona el año:</p>
        <input
          type="number"
          value={anio}
          onChange={(e) => setAnio(Number(e.target.value))}
          className="input-anio"
          min="2000"
          max="2100"
          placeholder="Año"
        />
      </div>

      {loading && <p className="text-gray-600">Cargando...</p>}

      {error && <p className="text-red-500">{error}</p>}

      {servicios.length > 0 ? (
        <div className="report-table">
          <table className="table-gastos">
            <thead>
              <tr>
                <th>Mes</th>
                <th>Total Paseos</th>
                <th>Total Médicos</th>
                <th>Total Masajes</th>
                <th>Total Estética</th>
              </tr>
            </thead>
            <tbody>
              {servicios.map((servicio, index) => (
                <tr key={index}>
                  <td>{servicio.mes}</td>
                  <td>{servicio.total_paseos}</td>
                  <td>{servicio.total_medicos}</td>
                  <td>{servicio.total_masajes}</td>
                  <td>{servicio.total_estetica}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        !loading && <p className="text-gray-500">No hay servicios para el año seleccionado.</p>
      )}
    </div>
  );
};

export default ServiciosMensuales;
