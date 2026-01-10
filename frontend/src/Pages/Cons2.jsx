import React, { useState, useEffect } from 'react';
import { Calendar, LogOut, Search, User, Phone, Mail, MapPin } from 'lucide-react';

const SalidasHoy = () => {
  const [salidas, setSalidas] = useState([]);
  const [filtro, setFiltro] = useState('');
  const [loading, setLoading] = useState(false);

  // Obtener fecha actual
  const fechaHoy = new Date().toLocaleDateString('es-MX', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  useEffect(() => {
    cargarSalidas();
  }, []);

  const cargarSalidas = async () => {
    setLoading(true);
    try {
      // Llamada a la API para obtener las salidas
      const response = await fetch('http://localhost:8000/v2/reportes/mascotas-salen-hoy/'); // Asegúrate de que esta URL es la correcta
      const data = await response.json();

      // Formatear los datos que recibes de la API
      const salidasFormateadas = data.results.map(salida => ({
        id: salida.id, // Si la API devuelve un campo id, sino, usar algún identificador
        mascota: {
          nombre: salida.mascota,
          especie: "Desconocida", // La especie no está en la API, puedes agregarla si es necesario
        },
        habitacion: {
          numero: salida.habitacion,
          tipo: "Desconocido", // La información sobre tipo de habitación no está en la API
          estado: "Desconocido", // No hay estado de la habitación en la API
        },
        dueno: {
          nombre: salida.nombre_dueño,
          telefono: salida.telefono_dueño,
          email: "Desconocido", // Este dato no está en la API, deberías agregarlo si se puede
        },
        fechaEntrada: "Desconocido", // Al igual que los demás campos, se deberían agregar si puedes obtenerlos
        fechaSalida: fechaHoy, // Este es el día de salida, ya que la API devuelve solo las que salen hoy
        horaSalida: "Desconocida", // Similar a los otros campos
        nom_subtipo: salida.nom_subtipo, // El nombre del subtipo que trae la API
      }));

      setSalidas(salidasFormateadas);
      setLoading(false);
    } catch (error) {
      console.error('Error al cargar salidas:', error);
      setLoading(false);
    }
  };

  const calcularDiasEstancia = (fechaEntrada, fechaSalida) => {
    const entrada = new Date(fechaEntrada);
    const salida = new Date(fechaSalida);
    const diferencia = salida - entrada;
    return Math.ceil(diferencia / (1000 * 60 * 60 * 24));
  };

  const salidasFiltradas = salidas.filter(salida =>
    salida.mascota.nombre.toLowerCase().includes(filtro.toLowerCase()) ||
    salida.mascota.especie.toLowerCase().includes(filtro.toLowerCase()) ||
    salida.habitacion.numero.toLowerCase().includes(filtro.toLowerCase()) ||
    salida.dueno.nombre.toLowerCase().includes(filtro.toLowerCase())
  );

  // Ordenar por hora de salida
  const salidasOrdenadas = [...salidasFiltradas].sort((a, b) => {
    return a.horaSalida.localeCompare(b.horaSalida);
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-3">
                <LogOut className="text-orange-500" size={32} />
                Salidas de Hoy
              </h1>
              <p className="text-gray-600 mt-2 capitalize">{fechaHoy}</p>
            </div>
            <div className="text-right">
              <p className="text-4xl font-bold text-orange-500">{salidas.length}</p>
              <p className="text-sm text-gray-600">Salidas programadas</p>
            </div>
          </div>
        </div>

        {/* Barra de búsqueda */}
        <div className="mb-6 relative">
          <Search className="absolute left-3 top-3 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Buscar por mascota, especie, habitación o dueño..."
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white"
            value={filtro}
            onChange={(e) => setFiltro(e.target.value)}
          />
        </div>

        {/* Lista de salidas */}
        {loading ? (
          <div className="text-center py-12 bg-white rounded-lg shadow-md">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
            <p className="mt-4 text-gray-600">Cargando salidas...</p>
          </div>
        ) : salidasOrdenadas.length === 0 ? (
          <div className="bg-white rounded-lg shadow-md p-12 text-center">
            <Calendar className="mx-auto text-gray-400 mb-4" size={64} />
            <p className="text-gray-500 text-lg">
              {filtro ? 'No se encontraron salidas con ese criterio' : 'No hay salidas programadas para hoy'}
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {salidasOrdenadas.map((salida) => (
              <div
                key={salida.id}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="md:flex">
                  {/* Sección izquierda - Hora */}
                  <div className="bg-orange-500 text-white p-6 md:w-32 flex flex-col items-center justify-center">
                    <Calendar size={32} className="mb-2" />
                    <p className="text-2xl font-bold">{salida.horaSalida}</p>
                    <p className="text-xs opacity-90">Hora salida</p>
                  </div>

                  {/* Contenido principal */}
                  <div className="flex-1 p-6">
                    <div className="grid md:grid-cols-3 gap-6">
                      {/* Datos de la Mascota */}
                      <div className="space-y-3">
                        <h3 className="text-lg font-bold text-orange-600 flex items-center gap-2 border-b pb-2">
                          <span>🐾</span> Mascota
                        </h3>
                        <div className="space-y-2">
                          <div>
                            <p className="text-2xl font-bold text-gray-800">{salida.mascota.nombre}</p>
                          </div>
                          <div className="space-y-1 text-sm">
                            <p className="text-gray-600">
                              <span className="font-semibold">Especie:</span> {salida.mascota.especie}
                            </p>
                            <p className="text-gray-600">
                              <span className="font-semibold">Subtipo:</span> {salida.nom_subtipo}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Datos de la Habitación */}
                      <div className="space-y-3">
                        <h3 className="text-lg font-bold text-blue-600 flex items-center gap-2 border-b pb-2">
                          <MapPin size={20} /> Habitación
                        </h3>
                        <div className="space-y-2">
                          <div className="bg-blue-50 p-4 rounded-lg">
                            <p className="text-3xl font-bold text-blue-600">#{salida.habitacion}</p>
                            <p className="text-sm text-gray-600 mt-1">Tipo de Habitación</p>
                          </div>
                          <div className="space-y-1 text-sm">
                            <p className="text-gray-600">
                              <span className="font-semibold">Estado:</span> {salida.habitacion.estado || 'Desconocido'}
                            </p>
                            <p className="text-gray-600">
                              <span className="font-semibold">Estancia:</span> {calcularDiasEstancia(salida.fechaEntrada, salida.fechaSalida)} días
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Datos del Dueño */}
                      <div className="space-y-3">
                        <h3 className="text-lg font-bold text-purple-600 flex items-center gap-2 border-b pb-2">
                          <User size={20} /> Dueño
                        </h3>
                        <div className="space-y-2">
                          <p className="font-semibold text-gray-800">{salida.dueno.nombre}</p>
                          <div className="space-y-2">
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                              <Phone size={16} className="text-purple-500" />
                              <a href={`tel:${salida.dueno.telefono}`} className="hover:text-purple-600">
                                {salida.dueno.telefono}
                              </a>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                              <Mail size={16} className="text-purple-500" />
                              <a href={`mailto:${salida.dueno.email}`} className="hover:text-purple-600 break-all">
                                {salida.dueno.email}
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SalidasHoy;
