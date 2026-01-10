import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Css/Reservacion.css';  // Asegúrate de que el archivo CSS esté correctamente vinculado

const ReporteServiciosPorRubro = () => {
  const [gastos, setGastos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [mascotaId, setMascotaId] = useState(1);  // ID por defecto para la mascota

  // Función para cargar los datos de la API usando axios
  const cargarGastosPorRubro = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post('http://localhost:8000/v2/reportes/gastos-por-mascota/', {
        mascota_id: mascotaId // Pasando el id de la mascota en el cuerpo de la solicitud
      });
      setGastos(response.data.results); // Suponiendo que la respuesta está en la propiedad "results"
    } catch (err) {
      setError(err.message || 'Error desconocido');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    cargarGastosPorRubro();
  }, [mascotaId]);

  return (
    <div className="reservacion-container">
      <div className="reservacion-ttl">
        <p className="reservacion-titulo">Reporte de Servicios por Rubro</p>
        <p className="reservacion-desc">Consulta los gastos por rubro de la mascota seleccionada.</p>
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

      {gastos.length > 0 ? (
        <div className="report-table">
          <table className="table-gastos">
            <thead>
              <tr>
                <th>Rubro</th>
                <th>Cantidad Servicios</th>
                <th>Costo Unidad</th>
                <th>Total por Rubro</th>
              </tr>
            </thead>
            <tbody>
              {gastos.map((gasto, index) => (
                <tr key={index}>
                  <td>{gasto.rubro}</td>
                  <td>{gasto.cantidad_servicios}</td>
                  <td>${gasto.monto_unidad}</td>
                  <td>${gasto.total_por_rubro}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        !loading && <p className="text-gray-500">No hay datos disponibles para esta mascota.</p>
      )}
    </div>
  );
};

export default ReporteServiciosPorRubro;
