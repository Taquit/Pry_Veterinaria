import React, { useState, useEffect } from 'react';
import { Search, Bed, User, Phone, Mail, PawPrint } from 'lucide-react';
import axios from 'axios';

const ConsultaHabitaciones = () => {
  const [habitaciones, setHabitaciones] = useState([]);
  const [filtro, setFiltro] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Configuración base de axios (ajusta la URL según tu backend)
  const API_BASE_URL = 'http://localhost:8000/v2'; // Cambia esta URL por la de tu backend

  useEffect(() => {
    cargarHabitaciones();
  }, []);

  const cargarHabitaciones = async () => {
    setLoading(true);
    setError(null);
    try {
      // Llamada a tu API Django
      const response = await axios.get(`${API_BASE_URL}/reportes/habitaciones-ocupadas/`);
      
      // Transformar los datos de la API al formato que espera tu componente
      const datosTransformados = response.data.results.map((hab, index) => ({
        id: index + 1,
        numero: hab.no_habit,
        tipo: hab.especie || 'No especificado',
        estado: hab.estado_habitacion,
        ocupada: true, // Todas están ocupadas según tu consulta
        mascota: {
          nombre: hab.nombre_mascota,
          especie: hab.especie,
          tamano: hab.tamano || 'No especificado'
        },
        dueno: {
          nombre: hab.nombre_dueño,
          // Agrega campos adicionales si los necesitas
          telefono: 'No disponible', // Añade este campo en tu API si lo necesitas
          email: 'No disponible'     // Añade este campo en tu API si lo necesitas
        }
      }));

      setHabitaciones(datosTransformados);
      setLoading(false);
    } catch (error) {
      console.error('Error al cargar habitaciones:', error);
      setError('Error al cargar las habitaciones. Por favor, intente nuevamente.');
      setLoading(false);
      
      // Si hay error, puedes cargar datos de ejemplo como fallback
      const datosEjemplo = [
        {
          id: 1,
          numero: "101",
          tipo: "Individual",
          estado: "Disponible",
          ocupada: false,
          mascota: null,
          dueno: null
        },
        {
          id: 2,
          numero: "102",
          tipo: "Perro - Grande",
          estado: "Ocupada",
          ocupada: true,
          mascota: {
            nombre: "Max",
            especie: "Perro",
            tamano: "Grande"
          },
          dueno: {
            nombre: "Juan Pérez López",
            telefono: "+52 555 1234 5678",
            email: "juan.perez@email.com"
          }
        },
        {
          id: 3,
          numero: "103",
          tipo: "Gato - Pequeño",
          estado: "Ocupada",
          ocupada: true,
          mascota: {
            nombre: "Luna",
            especie: "Gato",
            tamano: "Pequeño"
          },
          dueno: {
            nombre: "María González",
            telefono: "+52 555 8765 4321",
            email: "maria.gonzalez@email.com"
          }
        },
        {
          id: 4,
          numero: "201",
          tipo: "Hámster",
          estado: "Ocupada",
          ocupada: true,
          mascota: {
            nombre: "Bola",
            especie: "Hámster",
            tamano: "Pequeño"
          },
          dueno: {
            nombre: "Carlos Rodríguez",
            telefono: "+52 555 4567 8901",
            email: "carlos@email.com"
          }
        }
      ];
      setHabitaciones(datosEjemplo);
    }
  };

  const habitacionesFiltradas = habitaciones.filter(hab => 
    hab.numero.toLowerCase().includes(filtro.toLowerCase()) ||
    hab.tipo.toLowerCase().includes(filtro.toLowerCase()) ||
    (hab.mascota && hab.mascota.nombre.toLowerCase().includes(filtro.toLowerCase())) ||
    (hab.dueno && hab.dueno.nombre.toLowerCase().includes(filtro.toLowerCase()))
  );

  // Función para obtener el color según el estado
  const getEstadoColor = (estado) => {
    const estados = {
      'ocupada': 'bg-red-500',
      'disponible': 'bg-green-500',
      'mantenimiento': 'bg-yellow-500',
      'reservada': 'bg-blue-500',
      'limpia': 'bg-green-300'
    };
    return estados[estado.toLowerCase()] || 'bg-gray-500';
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Consulta de Habitaciones Ocupadas
          <span className="text-sm font-normal text-gray-600 ml-2">
            (Actualizado en tiempo real)
          </span>
        </h1>
        
        {/* Barra de búsqueda */}
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Buscar por número de habitación, nombre de mascota o dueño..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={filtro}
              onChange={(e) => setFiltro(e.target.value)}
            />
          </div>
          <div className="mt-2 text-sm text-gray-500">
            Mostrando {habitacionesFiltradas.length} de {habitaciones.length} habitaciones ocupadas
          </div>
        </div>

        {/* Mensaje de error */}
        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-700">{error}</p>
            <p className="text-sm text-red-600 mt-1">
              Se están mostrando datos de ejemplo. Verifique la conexión con el servidor.
            </p>
          </div>
        )}

        {/* Botón de recargar */}
        <div className="mb-6 flex justify-end">
          <button
            onClick={cargarHabitaciones}
            disabled={loading}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 flex items-center space-x-2"
          >
            {loading ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                <span>Cargando...</span>
              </>
            ) : (
              <span>Actualizar lista</span>
            )}
          </button>
        </div>

        {/* Grid de habitaciones */}
        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
            <p className="mt-4 text-gray-600">Cargando habitaciones ocupadas...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {habitacionesFiltradas.map((habitacion) => (
              <div
                key={habitacion.id}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-200"
              >
                {/* Header de la tarjeta */}
                <div className={`p-4 ${getEstadoColor(habitacion.estado)}`}>
                  <div className="flex items-center justify-between text-white">
                    <div className="flex items-center space-x-2">
                      <Bed size={24} />
                      <span className="text-xl font-bold">Hab. {habitacion.numero}</span>
                    </div>
                    <span className="text-sm font-semibold px-3 py-1 bg-white bg-opacity-30 rounded-full">
                      {habitacion.ocupada ? 'OCUPADA' : 'DISPONIBLE'}
                    </span>
                  </div>
                </div>

                {/* Cuerpo de la tarjeta */}
                <div className="p-4">
                  <div className="space-y-3">
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <p className="text-sm text-gray-500">Tipo/Especie</p>
                        <p className="font-semibold text-gray-800">{habitacion.tipo}</p>
                      </div>
                      
                      <div>
                        <p className="text-sm text-gray-500">Estado</p>
                        <p className="font-semibold text-gray-800">{habitacion.estado}</p>
                      </div>
                    </div>

                    {habitacion.ocupada && habitacion.mascota && (
                      <>
                        <div className="border-t pt-3 mt-3">
                          <div className="flex items-center space-x-2 mb-2">
                            <PawPrint size={16} className="text-blue-600" />
                            <p className="text-sm font-semibold text-blue-600">Mascota Hospedada</p>
                          </div>
                          <div className="bg-blue-50 p-3 rounded-lg space-y-1">
                            <p className="font-semibold text-gray-800 text-lg">{habitacion.mascota.nombre}</p>
                            <div className="grid grid-cols-2 gap-2 text-sm">
                              <p className="text-gray-600">
                                <span className="font-medium">Especie:</span> {habitacion.mascota.especie}
                              </p>
                              <p className="text-gray-600">
                                <span className="font-medium">Tamaño:</span> {habitacion.mascota.tamano}
                              </p>
                            </div>
                          </div>
                        </div>

                        {habitacion.dueno && (
                          <div className="border-t pt-3 mt-3">
                            <div className="flex items-center space-x-2 mb-2">
                              <User size={16} className="text-purple-600" />
                              <p className="text-sm font-semibold text-purple-600">Datos del Dueño</p>
                            </div>
                            <div className="bg-purple-50 p-3 rounded-lg space-y-2">
                              <div className="flex items-center space-x-2">
                                <User size={16} className="text-purple-600" />
                                <p className="text-sm text-gray-800 font-medium">{habitacion.dueno.nombre}</p>
                              </div>
                              {habitacion.dueno.telefono !== 'No disponible' && (
                                <div className="flex items-center space-x-2">
                                  <Phone size={16} className="text-purple-600" />
                                  <p className="text-sm text-gray-600">{habitacion.dueno.telefono}</p>
                                </div>
                              )}
                              {habitacion.dueno.email !== 'No disponible' && (
                                <div className="flex items-center space-x-2">
                                  <Mail size={16} className="text-purple-600" />
                                  <p className="text-sm text-gray-600 truncate">{habitacion.dueno.email}</p>
                                </div>
                              )}
                            </div>
                          </div>
                        )}
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {habitacionesFiltradas.length === 0 && !loading && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No se encontraron habitaciones con ese criterio</p>
          </div>
        )}

        {/* Resumen */}
        <div className="mt-8 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Resumen de Ocupación</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <p className="text-3xl font-bold text-blue-600">{habitaciones.length}</p>
              <p className="text-sm text-gray-600">Total Habitaciones</p>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <p className="text-3xl font-bold text-green-600">
                {habitaciones.filter(h => !h.ocupada).length}
              </p>
              <p className="text-sm text-gray-600">Disponibles</p>
            </div>
            <div className="text-center p-4 bg-red-50 rounded-lg">
              <p className="text-3xl font-bold text-red-600">
                {habitaciones.filter(h => h.ocupada).length}
              </p>
              <p className="text-sm text-gray-600">Ocupadas</p>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <p className="text-3xl font-bold text-purple-600">
                {habitaciones.length > 0 
                  ? Math.round((habitaciones.filter(h => h.ocupada).length / habitaciones.length) * 100) 
                  : 0}%
              </p>
              <p className="text-sm text-gray-600">Porcentaje Ocupación</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultaHabitaciones;