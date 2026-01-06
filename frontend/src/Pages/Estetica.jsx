import React, { useEffect, useState } from "react";
import './Css/Reservacion.css'
import axios from "axios";

function Estetica() {
  const [error, setError] = useState(null);
  const [mesActual, setMesActual] = useState(new Date());
  const [diasSeleccionados, setDiasSeleccionados] = useState([]);
  const [habitacionSeleccionada, setHabitacionSeleccionada] = useState(null);
  const [mascotasSeleccionadas, setMascotasSeleccionadas] = useState([]);
  const [serviciosSeleccionados, setServiciosSeleccionados] = useState([]);
  const [mascota,setMascota]=useState([]);
  const [habitacion,setHabitacion]=useState([]);

  

  const fetchAll=async()=>{
    const id_dueño=Number(localStorage.getItem("id_dueño") || "0")
    if (!id_dueño){
      setError("No hay id_dueño en localstorage. Inicia sesion");
      console.log("No hay id_dueño en localstorage. Inicia sesion");
      return;
    }
    try{
      const [mascRes,habitRes]=await Promise.all([
        axios.post(`http://localhost:8000/api/get-mas-by-id/`,{id_dueño:id_dueño}),
        axios.get('http://localhost:8000/api/habitaciones/')
      ])
      console.log(mascRes.data)
      console.log(habitRes.data)
      setHabitacion(habitRes.data);
      if (mascRes.data  &&  mascRes.data.mascotas){
        setMascota(mascRes.data.mascotas);
                    
      }else{
        console.log("Error al obtener mascotas")
        setMascota([])
                    
      }  
    }catch{
      console.log("Algo salio mal")
    }

  }

  useEffect(()=>{
    fetchAll();
  },[])

  const meses = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];

  const diasSemana = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];


  const servicios = {3:'Paseo', 5:'SPA', 4:'Estética'};
  const serviciosArr = Object.entries(servicios).map(([id, nombre]) => ({
    id: Number(id),
    nombre,
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

  const crearReservacion = async () =>{
    setError(null);
    
    const id_dueño=Number(localStorage.getItem("id_dueño")||"0")
    if(!id_dueño) return setError("No has iniciado sesion")
    if(mascotasSeleccionadas.length===0) return setError("Selecciona alguna mascota")
    if(diasSeleccionados.length===0) return setError("Selecciona al menos un dia")
    if(!habitacionSeleccionada) return setError("Selecciona una habitacion")
    if(serviciosSeleccionados.length===0) return setError("Selecciona al menos un servicio")

    const fechasOrdenadas = [...diasSeleccionados].sort()
    const fecha_inicio=fechasOrdenadas[0]
    const fecha_fin=fechasOrdenadas[fechasOrdenadas.length-1]

  //   const payload={
  //     id_dueño:id_dueño,
  //     id_mascotas:mascotasSeleccionadas,
  //     fechas:
  //   }
  // }

  const toDateObj = (yyyy_mm_dd)=>{
    const [y,m,d]=yyyy_mm_dd.split("-").map(Number);
    return new Date(y,m-1,d);
  }

  const toggleDia = (fechaCompleta) => {
    if (diasSeleccionados.includes(fechaCompleta)) {
      setDiasSeleccionados(diasSeleccionados.filter(d => d !== fechaCompleta));
    } else {
      setDiasSeleccionados([...diasSeleccionados, fechaCompleta]);
    }
  };

  const toggleMascota = (mascotaId) => {
    if (mascotasSeleccionadas.includes(mascotaId)) {
      setMascotasSeleccionadas(mascotasSeleccionadas.filter(id_mascota => id_mascota !== mascotaId));
    } else {
      setMascotasSeleccionadas([...mascotasSeleccionadas, mascotaId]);
    }
  };

  const toggleServicio = (id) => {
    setServiciosSeleccionados((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
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
          {mascota.length > 0 ? mascota.map((pet)=>(
            <div className="mascota-item" key={pet.id_mascota}>
              <input 
                type="checkbox" 
                id={`mascota-${pet.id_mascota}`} 
                className="mascota-checkbox"
                checked={mascotasSeleccionadas.includes(pet.id_mascota)}
                onChange={() => toggleMascota(pet.id_mascota)}
              />
              <label className="mascota-label" htmlFor={`mascota-${pet.id_mascota}`}>
                <div className="mascota-info">
                  <span className="mascota-nombre">{pet.nombre_mascota}</span>
                  <span className="mascota-tipo">{pet.tipo}</span>
                </div>
              </label>
            </div>
          ))
          :(
            <p>No tienes mascotas agregadas...</p>
          )}

        </div>

        {mascotasSeleccionadas.length > 0 && (
          <div className="resumen-mascotas">
            <p className="resumen-titulo">
              Has seleccionado {mascotasSeleccionadas.length} mascota(s):
            </p>
            <p className="resumen-nombres-mascotas">
              {mascotasSeleccionadas
                .map(id_mascota => mascota.find(m => m.id_mascota === id_mascota)?.nombre)
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
            
            {/* AQUIIII HABITACIONESSS */}
            <div className="habitaciones-grid">
              {/* {habitacion.map((hab) => (
                <div
                  key={hab.no_habit}
                  className={`habitacion-item ${
                    habitacionSeleccionada === hab.no_habit ? 'habitacion-seleccionada' : ''
                  }`}
                  onClick={() => seleccionarHabitacion(hab.no_habit)}
                >
                  if (hab.status ==='Disponible') {
                    <span className="habitacion-numero">{hab.no_habit}</span>  
                  }if (hab.status === 'Ocupada') {
                    <span className="habitacion-numero"> !{hab.no_habit}</span>
                  } else {
                    <span className="habitacion-numero">{hab.no_habit}</span>
                  }
                  
                </div>
              ))} */}
              {habitacion.map((hab) => {
                const estatus = hab.estatus
                const disponible = estatus === 'Disponible'
                const seleccionado = habitacionSeleccionada ===hab.no_habit

                return(
                  <div
                    key={hab.no_habit}
                    className={[
                      "habitacion-item",
                      `habitacion-${estatus?.toLowerCase()}`, // habitacion-disponible / ocupada / mantenimiento
                      seleccionado ? "habitacion-seleccionada" : "",
                      !disponible ? "habitacion-bloqueada" : "",
                    ].join(" ")}
                    onClick={() => {
                      if (disponible) seleccionarHabitacion(hab.no_habit);
                    }}
                    role="button"
                    aria-disabled={!disponible}
                    title={!disponible ? `No disponible (${estatus})` : "Disponible"}
                  >
                    <span className="habitacion-numero">{hab.no_habit}</span>

                  </div>
                )

              })}
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
            {serviciosArr.map((servicio) => (
              <div key={servicio.id} className="reservacion-servicio">
                <p className="reservacion-nombre-servicio">{servicio.nombre}</p>
                <input 
                  type="checkbox" 
                  className="reservacion-nombre"
                  checked={serviciosSeleccionados.includes(servicio.id)}
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
}}

export default Estetica;