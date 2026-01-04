import React, { useState } from "react";
import './Css/Reservacion.css'

function Estetica_2() {
  const [mesActual, setMesActual] = useState(new Date());
  const [diasSeleccionados, setDiasSeleccionados] = useState([]);
  const [habitacionSeleccionada, setHabitacionSeleccionada] = useState(null);
  const [mascotasSeleccionadas, setMascotasSeleccionadas] = useState([]);
  const [serviciosSeleccionados, setServiciosSeleccionados] = useState([]);

  const meses = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];

  const diasSemana = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];

  const mascotas = [
    { id: 1, nombre: 'Paquito', tipo: 'Perro' },
    { id: 2, nombre: 'Guagua', tipo: 'Gato' },
    { id: 3, nombre: 'Rocky', tipo: 'Perro' },
    { id: 4, nombre: 'Luna', tipo: 'Gato' }
  ];

  const servicios = ['Paseo', 'SPA', 'Estética'];

  // Generar array de 30 habitaciones (todas disponibles)
  const habitaciones = Array.from({ length: 30 }, (_, i) => ({
    numero: i + 1
  }));

  const generarDiasCalendario = () => {
    const año = mesActual.getFullYear();
    const mes = mesActual.getMonth();
    
    const primerDia = new Date(año, mes, 1);
    const ultimoDia = new Date(año, mes + 1, 0);
    
    const diasAnteriores = primerDia.getDay();
    const diasEnMes = ultimoDia.getDate();
    
    const dias = [];
    
    // Días del mes anterior (vacíos)
    for (let i = 0; i < diasAnteriores; i++) {
      dias.push(null);
    }
    
    // Días del mes actual
    for (let dia = 1; dia <= diasEnMes; dia++) {
      const fecha = new Date(año, mes, dia);
      dias.push({
        numero: dia,
        fecha: fecha,
        fechaCompleta: fecha.toISOString().split('T')[0],
        esHoy: fecha.toDateString() === new Date().toDateString(),
        esPasado: fecha < new Date().setHours(0, 0, 0, 0)
      });
    }
    
    return dias;
  };

  const toggleDia = (fechaCompleta) => {
    if (diasSeleccionados.includes(fechaCompleta)) {
      setDiasSeleccionados(diasSeleccionados.filter(d => d !== fechaCompleta));
    } else {
      setDiasSeleccionados([...diasSeleccionados, fechaCompleta]);
    }
  };

  const toggleMascota = (mascotaId) => {
    if (mascotasSeleccionadas.includes(mascotaId)) {
      setMascotasSeleccionadas(mascotasSeleccionadas.filter(id => id !== mascotaId));
    } else {
      setMascotasSeleccionadas([...mascotasSeleccionadas, mascotaId]);
    }
  };

  const toggleServicio = (servicio) => {
    if (serviciosSeleccionados.includes(servicio)) {
      setServiciosSeleccionados(serviciosSeleccionados.filter(s => s !== servicio));
    } else {
      setServiciosSeleccionados([...serviciosSeleccionados, servicio]);
    }
  };

  const seleccionarHabitacion = (numero) => {
    setHabitacionSeleccionada(numero);
  };

  const mesAnterior = () => {
    setMesActual(new Date(mesActual.getFullYear(), mesActual.getMonth() - 1));
  };

  const mesSiguiente = () => {
    setMesActual(new Date(mesActual.getFullYear(), mesActual.getMonth() + 1));
  };

  return (
    <div className="reservacion-container">
      <div className="reservacion-ttl">
        <p className="reservacion-titulo">Reservación</p>
        <p className="reservacion-desc">
          Aquí podrás elegir las fechas, los animales y servicios de tu reservación con nosotros!
        </p>
      </div>

      <div className="reservacion-mascotas">
        <p className="reservacion-sbttl">Selecciona tus mascotas:</p>
        <div className="mascotas-grid">
          {mascotas.map((mascota) => (
            <div key={mascota.id} className="mascota-item">
              <input 
                type="checkbox" 
                id={`mascota-${mascota.id}`} 
                className="mascota-checkbox"
                checked={mascotasSeleccionadas.includes(mascota.id)}
                onChange={() => toggleMascota(mascota.id)}
              />
              <label className="mascota-label" htmlFor={`mascota-${mascota.id}`}>
                <div className="mascota-info">
                  <span className="mascota-nombre">{mascota.nombre}</span>
                  <span className="mascota-tipo">{mascota.tipo}</span>
                </div>
              </label>
            </div>
          ))}
        </div>

        {mascotasSeleccionadas.length > 0 && (
          <div className="resumen-mascotas">
            <p className="resumen-titulo">
              Has seleccionado {mascotasSeleccionadas.length} mascota(s):
            </p>
            <p className="resumen-nombres-mascotas">
              {mascotasSeleccionadas
                .map(id => mascotas.find(m => m.id === id)?.nombre)
                .join(', ')}
            </p>
          </div>
        )}
      </div>

      <div className="reservaciones">
        <div className="reservacion-selec-fecha">
          <p className="reservacion-sbttl">Selecciona las fechas de tu reservación</p>
          <p className="reservacion-desc">
            Puedes seleccionar múltiples días. Haz clic en los días que desees reservar.
          </p>
          
          {/* Controles del calendario */}
          <div className="calendario-controles">
            <button className="btn-mes" onClick={mesAnterior}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
              </svg>
            </button>
            <h3 className="calendario-mes-año">
              {meses[mesActual.getMonth()]} {mesActual.getFullYear()}
            </h3>
            <button className="btn-mes" onClick={mesSiguiente}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
              </svg>
            </button>
          </div>

          {/* Días de la semana */}
          <div className="calendario-dias-semana">
            {diasSemana.map((dia, index) => (
              <div key={index} className="dia-semana-header">
                {dia}
              </div>
            ))}
          </div>

          
          <div className="calendario-grid-mensual">
            {generarDiasCalendario().map((dia, index) => {
              if (!dia) {
                return <div key={index} className="dia-vacio"></div>;
              }
              
              const seleccionado = diasSeleccionados.includes(dia.fechaCompleta);
              
              return (
                <div
                  key={index}
                  className={`dia-calendario ${seleccionado ? 'dia-seleccionado' : ''} ${dia.esHoy ? 'dia-hoy' : ''} ${dia.esPasado ? 'dia-pasado' : ''}`}
                  onClick={() => !dia.esPasado && toggleDia(dia.fechaCompleta)}
                >
                  <span className="dia-numero">{dia.numero}</span>
                </div>
              );
            })}
          </div>

          {diasSeleccionados.length > 0 && (
            <div className="resumen-seleccion">
              <p className="resumen-titulo">
                Has seleccionado {diasSeleccionados.length} día(s)
              </p>
              <p className="resumen-fechas">
                {diasSeleccionados.sort().join(', ')}
              </p>
            </div>
          )}
        </div>
        <div className="reservaciones2">
          <div className="reservacion-habitaciones">
            <p className="reservacion-sbttl">Selecciona una habitación</p>
            <p className="reservacion-desc">
              Elige la habitación donde se hospedará tu mascota
            </p>
            
            <div className="habitaciones-grid">
              {habitaciones.map((hab) => (
                <div
                  key={hab.numero}
                  className={`habitacion-item ${
                    habitacionSeleccionada === hab.numero ? 'habitacion-seleccionada' : ''
                  }`}
                  onClick={() => seleccionarHabitacion(hab.numero)}
                >
                  <span className="habitacion-numero">{hab.numero}</span>
                </div>
              ))}
            </div>

            {habitacionSeleccionada && (
              <div className="resumen-habitacion">
                <p className="resumen-titulo">
                  Habitación seleccionada: #{habitacionSeleccionada}
                </p>
              </div>
            )}
          </div>

          <div className="reservacion-selec-servicios">
            <p className="reservacion-sbttl">Selecciona los servicios que requieres para tus mascotas</p>
            {servicios.map((servicio) => (
              <div key={servicio} className="reservacion-servicio">
                <p className="reservacion-nombre-servicio">{servicio}</p>
                <input 
                  type="checkbox" 
                  className="reservacion-nombre"
                  checked={serviciosSeleccionados.includes(servicio)}
                  onChange={() => toggleServicio(servicio)}
                />
              </div>
            ))}

            {serviciosSeleccionados.length > 0 && (
              <div className="resumen-servicios">
                <p className="resumen-titulo">
                  Servicios seleccionados: {serviciosSeleccionados.join(', ')}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      <button className="reservacion-button">Aceptar</button>
    </div>
  );
}

export default Estetica_2;