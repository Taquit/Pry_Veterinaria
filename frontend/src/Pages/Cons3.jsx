import React, { useState, useEffect } from 'react';
import { Search, Calendar, Clock, User, Filter, Download } from 'lucide-react';
import axios from 'axios';

const ConsultaPaseos = () => {
  const [paseos, setPaseos] = useState([]);
  const [cuidadores, setCuidadores] = useState([]);
  const [cuidadorSeleccionado, setCuidadorSeleccionado] = useState('');
  const [fechaInicio, setFechaInicio] = useState('');
  const [fechaFin, setFechaFin] = useState('');
  const [filtro, setFiltro] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [estadisticas, setEstadisticas] = useState({
    totalPaseos: 0,
    totalMinutos: 0,
    promedioMinutos: 0,
    diasTrabajados: 0
  });

  // Configurar axios con la URL base
  const api = axios.create({
    baseURL: 'http://localhost:8000',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  useEffect(() => {
    cargarCuidadores();
    
    // Establecer fechas por defecto (último mes)
    const hoy = new Date();
    const haceUnMes = new Date();
    haceUnMes.setMonth(hoy.getMonth() - 1);
    
    setFechaInicio(haceUnMes.toISOString().split('T')[0]);
    setFechaFin(hoy.toISOString().split('T')[0]);
  }, []);

  const cargarCuidadores = async () => {
    try {
      // Aquí deberías hacer una llamada a tu API para obtener la lista de cuidadores
      // Por ahora usamos datos de ejemplo
      const cuidadoresEjemplo = [
        { id_empleado: 1, nombre_cuidador: "Carlos Ramírez" },
        { id_empleado: 2, nombre_cuidador: "Ana Silva" },
        { id_empleado: 3, nombre_cuidador: "Pedro Martínez" },
        { id_empleado: 4, nombre_cuidador: "Laura García" }
      ];
      setCuidadores(cuidadoresEjemplo);
    } catch (error) {
      console.error('Error al cargar cuidadores:', error);
      setError('Error al cargar la lista de cuidadores');
    }
  };

  const consultarPaseos = async () => {
    if (!cuidadorSeleccionado || !fechaInicio || !fechaFin) {
      alert('Por favor completa todos los campos de búsqueda');
      return;
    }

    // Validar fechas
    if (new Date(fechaInicio) > new Date(fechaFin)) {
      alert('La fecha de inicio no puede ser posterior a la fecha de fin');
      return;
    }

    setLoading(true);
    setError(null);
    
    try {
      const requestData = {
        cuidador_id: parseInt(cuidadorSeleccionado),
        fecha_inicio: fechaInicio,
        fecha_fin: fechaFin
      };

      console.log('Enviando datos:', requestData);

      // AQUÍ ESTÁ LA LÍNEA IMPORTANTE CON LA URL CORRECTA
      const response = await api.post('/v2/reportes/paseos-por-cuidador/', requestData);
      
      if (response.data && response.data.results) {
        setPaseos(response.data.results);
        
        // Calcular estadísticas
        calcularYEstablecerEstadisticas(response.data.results);
      } else {
        setPaseos([]);
        setEstadisticas({
          totalPaseos: 0,
          totalMinutos: 0,
          promedioMinutos: 0,
          diasTrabajados: 0
        });
      }
      
    } catch (error) {
      console.error('Error al consultar paseos:', error);
      
      if (error.response) {
        if (error.response.data && error.response.data.error) {
          setError(`Error del servidor: ${error.response.data.error}`);
        } else if (error.response.data && error.response.data.detail) {
          setError(`Error: ${error.response.data.detail}`);
        } else {
          setError(`Error ${error.response.status}: ${error.response.statusText}`);
        }
      } else if (error.request) {
        setError('No se recibió respuesta del servidor. Verifica tu conexión.');
      } else {
        setError(`Error: ${error.message}`);
      }
      
      setPaseos([]);
    } finally {
      setLoading(false);
    }
  };

  const calcularYEstablecerEstadisticas = (paseosData) => {
    const totalPaseos = paseosData.length;
    const totalMinutos = paseosData.reduce((sum, p) => sum + (p.duracion || 0), 0);
    const promedioMinutos = totalPaseos > 0 ? Math.round(totalMinutos / totalPaseos) : 0;
    
    // Contar días únicos
    const diasUnicos = [...new Set(paseosData.map(p => p.fecha))];
    const diasTrabajados = diasUnicos.length;

    setEstadisticas({
      totalPaseos,
      totalMinutos,
      promedioMinutos,
      diasTrabajados
    });
  };

  // Función para convertir tamaño numérico a texto
  const getTamanoTexto = (tamano) => {
    if (!tamano) return 'No especificado';
    if (tamano <= 10) return 'Pequeño';
    if (tamano <= 25) return 'Mediano';
    return 'Grande';
  };

  // Función para formatear hora (quitar segundos)
  const formatearHora = (hora) => {
    if (!hora) return '';
    return hora.substring(0, 5); // "09:00:00" -> "09:00"
  };

  const paseosFiltrados = paseos.filter(paseo => 
    paseo.nombre_mascota?.toLowerCase().includes(filtro.toLowerCase()) ||
    paseo.ruta?.toLowerCase().includes(filtro.toLowerCase()) ||
    paseo.numero_habitacion?.toString().includes(filtro) ||
    paseo.nombre_dueno?.toLowerCase().includes(filtro.toLowerCase())
  );

  // Agrupar paseos por fecha
  const paseosAgrupados = paseosFiltrados.reduce((acc, paseo) => {
    const fecha = paseo.fecha;
    if (!fecha) return acc;
    
    if (!acc[fecha]) {
      acc[fecha] = [];
    }
    acc[fecha].push(paseo);
    return acc;
  }, {});

  const exportarDatos = () => {
    if (paseos.length === 0) {
      alert('No hay datos para exportar');
      return;
    }

    // Convertir a CSV
    const headers = ['Fecha', 'Hora Inicio', 'Hora Fin', 'Duración (min)', 'Mascota', 'Raza', 'Tamaño', 'Ruta', 'Dueño', 'Habitación', 'Observaciones'];
    
    const csvData = paseos.map(paseo => [
      paseo.fecha,
      formatearHora(paseo.hora_inicio),
      formatearHora(paseo.hora_fin),
      paseo.duracion,
      paseo.nombre_mascota,
      paseo.raza,
      getTamanoTexto(paseo.tamano),
      paseo.ruta,
      paseo.nombre_dueno,
      paseo.numero_habitacion,
      paseo.observaciones_paseo || ''
    ]);

    const csvContent = [
      headers.join(','),
      ...csvData.map(row => row.map(cell => `"${cell}"`).join(','))
    ].join('\n');

    // Crear y descargar archivo
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `paseos_cuidador_${cuidadorSeleccionado}_${fechaInicio}_${fechaFin}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const limpiarFiltros = () => {
    setCuidadorSeleccionado('');
    setFechaInicio('');
    setFechaFin('');
    setFiltro('');
    setPaseos([]);
    setError(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-3">
            <User className="text-green-500" size={32} />
            Consulta de Paseos por Cuidador
          </h1>
          <p className="text-gray-600 mt-2">Consulta el historial de paseos realizados por cuidador en un periodo específico</p>
        </div>

        {/* Formulario de búsqueda */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex items-center gap-2 mb-4">
            <Filter className="text-green-500" size={20} />
            <h2 className="text-xl font-bold text-gray-800">Filtros de Búsqueda</h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Cuidador *
              </label>
              <select
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                value={cuidadorSeleccionado}
                onChange={(e) => setCuidadorSeleccionado(e.target.value)}
              >
                <option value="">Seleccionar cuidador</option>
                {cuidadores.map(c => (
                  <option key={c.id_empleado} value={c.id_empleado}>
                    {c.nombre_cuidador}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Fecha Inicio *
              </label>
              <input
                type="date"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                value={fechaInicio}
                onChange={(e) => setFechaInicio(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Fecha Fin *
              </label>
              <input
                type="date"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                value={fechaFin}
                onChange={(e) => setFechaFin(e.target.value)}
              />
            </div>

            <div className="flex items-end gap-2">
              <button
                onClick={consultarPaseos}
                disabled={loading}
                className="flex-1 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Consultando...' : 'Consultar'}
              </button>
              <button
                onClick={limpiarFiltros}
                className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
              >
                Limpiar
              </button>
            </div>
          </div>
        </div>

        {/* Mensaje de error */}
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
            <div className="flex items-center">
              <div className="py-1">
                <svg className="h-6 w-6 text-red-500 mr-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"/>
                </svg>
              </div>
              <div>
                <p className="font-semibold">Error</p>
                <p className="text-sm">{error}</p>
              </div>
            </div>
          </div>
        )}

        {/* Barra de búsqueda adicional */}
        {paseos.length > 0 && (
          <div className="mb-6">
            <div className="flex gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-3 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Buscar por mascota, dueño, ruta o habitación..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white"
                  value={filtro}
                  onChange={(e) => setFiltro(e.target.value)}
                />
              </div>
              <button
                onClick={exportarDatos}
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg flex items-center gap-2 transition-colors duration-200"
              >
                <Download size={20} />
                Exportar CSV
              </button>
            </div>
          </div>
        )}

        {/* Estadísticas */}
        {paseos.length > 0 && (
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Estadísticas del Periodo</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <p className="text-3xl font-bold text-green-600">{estadisticas.totalPaseos}</p>
                <p className="text-sm text-gray-600">Total Paseos</p>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <p className="text-3xl font-bold text-blue-600">{estadisticas.diasTrabajados}</p>
                <p className="text-sm text-gray-600">Días Trabajados</p>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <p className="text-3xl font-bold text-purple-600">{estadisticas.totalMinutos}</p>
                <p className="text-sm text-gray-600">Minutos Totales</p>
              </div>
              <div className="text-center p-4 bg-orange-50 rounded-lg">
                <p className="text-3xl font-bold text-orange-600">{estadisticas.promedioMinutos}</p>
                <p className="text-sm text-gray-600">Promedio Min/Paseo</p>
              </div>
            </div>
          </div>
        )}

        {/* Contenido principal */}
        {loading ? (
          <div className="text-center py-12 bg-white rounded-lg shadow-md">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-green-500"></div>
            <p className="mt-4 text-gray-600">Consultando paseos...</p>
          </div>
        ) : paseos.length === 0 && cuidadorSeleccionado && !error ? (
          <div className="bg-white rounded-lg shadow-md p-12 text-center">
            <Calendar className="mx-auto text-gray-400 mb-4" size={64} />
            <p className="text-gray-500 text-lg">No se encontraron paseos para los criterios seleccionados</p>
          </div>
        ) : paseos.length === 0 ? (
          <div className="bg-white rounded-lg shadow-md p-12 text-center">
            <Search className="mx-auto text-gray-400 mb-4" size={64} />
            <p className="text-gray-500 text-lg">Selecciona un cuidador y un periodo para consultar los paseos</p>
          </div>
        ) : (
          <div className="space-y-6">
            {Object.keys(paseosAgrupados).sort().reverse().map(fecha => (
              <div key={fecha} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-green-500 text-white p-4">
                  <div className="flex items-center gap-2">
                    <Calendar size={24} />
                    <h3 className="text-xl font-bold">
                      {new Date(fecha + 'T00:00:00').toLocaleDateString('es-MX', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </h3>
                    <span className="ml-auto bg-white bg-opacity-30 px-3 py-1 rounded-full text-sm font-semibold">
                      {paseosAgrupados[fecha].length} paseos
                    </span>
                  </div>
                </div>

                <div className="divide-y">
                  {paseosAgrupados[fecha].map(paseo => (
                    <div key={paseo.id_paseo} className="p-6 hover:bg-gray-50 transition-colors duration-200">
                      <div className="flex flex-col md:flex-row gap-6">
                        {/* Horario */}
                        <div className="flex items-center gap-3 md:w-48">
                          <Clock className="text-green-500" size={24} />
                          <div>
                            <p className="text-lg font-bold text-gray-800">
                              {formatearHora(paseo.hora_inicio)} - {formatearHora(paseo.hora_fin)}
                            </p>
                            <p className="text-sm text-gray-600">{paseo.duracion} minutos</p>
                          </div>
                        </div>

                        {/* Información de la mascota */}
                        <div className="flex-1 border-l pl-6">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <p className="text-xl font-bold text-gray-800 flex items-center gap-2">
                                🐾 {paseo.nombre_mascota}
                              </p>
                              <p className="text-sm text-gray-600">
                                {paseo.raza} • {paseo.especie} • {getTamanoTexto(paseo.tamano)}
                              </p>
                            </div>
                            <div className="text-right">
                              <p className="text-sm text-gray-500">Habitación</p>
                              <p className="text-lg font-bold text-blue-600">#{paseo.numero_habitacion}</p>
                              <p className="text-xs text-gray-600">{paseo.tipo_habitacion}</p>
                            </div>
                          </div>

                          <div className="grid md:grid-cols-2 gap-4 mt-4">
                            <div>
                              <p className="text-sm font-semibold text-gray-700">Dueño</p>
                              <p className="text-gray-600">{paseo.nombre_dueno}</p>
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-gray-700">Ruta</p>
                              <p className="text-gray-600">{paseo.ruta}</p>
                            </div>
                          </div>

                          {paseo.observaciones_paseo && (
                            <div className="mt-4 bg-yellow-50 p-3 rounded-lg">
                              <p className="text-sm font-semibold text-gray-700 mb-1">Observaciones</p>
                              <p className="text-sm text-gray-600">{paseo.observaciones_paseo}</p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ConsultaPaseos;