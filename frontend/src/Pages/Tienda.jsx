import React, { useState } from "react";

function Tienda() {
  const [servicioActivo, setServicioActivo] = useState(null);
  const [diaSeleccionado, setDiaSeleccionado] = useState(null);
  const [horaSeleccionada, setHoraSeleccionada] = useState("");

  const toggleCalendario = (servicio) => {
    if (servicioActivo === servicio) {
      setServicioActivo(null);
      setDiaSeleccionado(null);
      setHoraSeleccionada("");
    } else {
      setServicioActivo(servicio);
      setDiaSeleccionado(null);
      setHoraSeleccionada("");
    }
  };

  const generarDias = () => {
    const dias = [];
    const hoy = new Date();
    
    for (let i = 0; i < 30; i++) {
      const fecha = new Date(hoy);
      fecha.setDate(hoy.getDate() + i);
      dias.push({
        numero: fecha.getDate(),
        mes: fecha.toLocaleDateString('es-ES', { month: 'short' }),
        diaSemana: fecha.toLocaleDateString('es-ES', { weekday: 'short' }),
        fechaCompleta: fecha.toISOString().split('T')[0]
      });
    }
    return dias;
  };

  const horasDisponibles = [
    "09:00", "10:00", "11:00", "12:00", 
    "13:00", "14:00", "15:00", "16:00", 
    "17:00", "18:00"
  ];

  const servicios = [
    {
      id: "paseo",
      img: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=400",
      titulo: "Paseo",
      descripcion: "Paseos personalizados para tu mascota con guías expertos. Ejercicio, diversión y socialización garantizados en espacios seguros."
    },
    {
      id: "spa",
      img: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400",
      titulo: "SPA",
      descripcion: "Tratamientos de spa completos: baño premium, masajes relajantes, aromaterapia y cuidado especial para el bienestar de tu compañero."
    },
    {
      id: "estetica",
      img: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=400",
      titulo: "Estética",
      descripcion: "Corte de pelo profesional, limpieza de uñas, cuidado dental y embellecimiento completo con productos de primera calidad."
    }
  ];

  const styles = {
    serviciosContainer: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '110vh',
      alignItems: 'center',
      fontFamily: "'Poppins', sans-serif"
    },
    ttl: {
      display: 'flex',
      flexDirection: 'column',
      height: '20vh',
      marginTop: '15vh',
      width: '100%',
      textAlign: 'center'
    },
    serviciosTtl: {
      fontSize: '3vw',
      fontWeight: 700,
      color: '#114050',
      margin: 0
    },
    serviciosDesc: {
      fontSize: '1.3vw',
      color: '#114050',
      margin: '1vh 0'
    },
    serviciosSelec: {
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
      minHeight: '90vh',
      paddingTop: '5vh',
      justifyContent: 'center',
      gap: '5vw',
      flexWrap: 'wrap'
    },
    serviciosImgSelec: {
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#ffe4cc',
      minHeight: '60vh',
      width: '25%',
      minWidth: '280px',
      gap: '5vh',
      paddingTop: '5vh',
      alignItems: 'center',
      borderRadius: '1vw',
      transition: 'all 0.3s ease',
      position: 'relative'
    },
    servicioImg: {
      width: '60%',
      borderRadius: '1vw'
    },
    serviciosText: {
      fontSize: '1.5vw',
      fontWeight: 700,
      color: '#114050',
      margin: 0
    },
    serviciosDescripcion: {
      maxHeight: 0,
      opacity: 0,
      overflow: 'hidden',
      transition: 'all 0.3s ease',
      padding: '0 2vw',
      textAlign: 'center',
      color: '#114050',
      fontWeight: 500,
      fontSize: '1vw'
    },
    servicioButton: {
      backgroundColor: '#ffffff',
      border: '2px solid #114050',
      color: '#114050',
      fontSize: '1.3vw',
      fontWeight: 600,
      borderRadius: '1vw',
      padding: '1vh 2vw',
      cursor: 'pointer',
      transition: 'all 0.3s ease'
    },
    calendarioContainer: {
      width: '90%',
      padding: '2vh 1vw',
      backgroundColor: '#ffffff',
      borderRadius: '1vw',
      marginTop: '2vh',
      maxHeight: '60vh',
      overflowY: 'auto'
    },
    calendarioTitulo: {
      fontSize: '1.2vw',
      fontWeight: 600,
      color: '#114050',
      marginBottom: '1vh',
      textAlign: 'center'
    },
    calendarioGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(5, 1fr)',
      gap: '0.5vw',
      padding: '1vh'
    },
    diaItem: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '1vh 0.5vw',
      backgroundColor: '#f5f5f5',
      borderRadius: '0.5vw',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      border: '2px solid transparent'
    },
    diaSeleccionado: {
      backgroundColor: '#114050',
      color: 'white',
      border: '2px solid #0a2a35'
    },
    diaSemana: {
      fontSize: '0.7vw',
      textTransform: 'uppercase',
      fontWeight: 500
    },
    diaNumero: {
      fontSize: '1.3vw',
      fontWeight: 700,
      margin: '0.3vh 0'
    },
    diaMes: {
      fontSize: '0.7vw',
      textTransform: 'capitalize'
    },
    horasContainer: {
      marginTop: '2vh',
      padding: '1vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '1vh'
    },
    horasTitulo: {
      fontSize: '1.2vw',
      fontWeight: 600,
      color: '#114050'
    },
    horasSelect: {
      width: '80%',
      padding: '1vh 1vw',
      fontSize: '1vw',
      color: '#114050',
      backgroundColor: '#f5f5f5',
      border: '2px solid #ffe4cc',
      borderRadius: '0.5vw',
      cursor: 'pointer',
      fontWeight: 500
    },
    confirmarButton: {
      backgroundColor: '#114050',
      color: 'white',
      border: 'none',
      padding: '1vh 2vw',
      fontSize: '1vw',
      fontWeight: 600,
      borderRadius: '0.5vw',
      cursor: 'pointer',
      marginTop: '1vh',
      transition: 'all 0.3s ease'
    }
  };

  return (
    <div style={styles.serviciosContainer}>
      <div style={styles.ttl}>
        <p style={styles.serviciosTtl}>Servicios</p>
        <p style={styles.serviciosDesc}>A continuación se muestran los servicios que Paw Resort ofrece</p>
      </div>
      <div style={styles.serviciosSelec}>
        {servicios.map((servicio) => (
          <div 
            key={servicio.id} 
            style={{
              ...styles.serviciosImgSelec,
              height: servicioActivo === servicio.id ? 'auto' : '60vh'
            }}
            onMouseEnter={(e) => {
              const desc = e.currentTarget.querySelector('.descripcion');
              if (desc) {
                desc.style.maxHeight = '300px';
                desc.style.opacity = '1';
              }
              if (servicioActivo !== servicio.id) {
                e.currentTarget.style.height = '75vh';
              }
            }}
            onMouseLeave={(e) => {
              const desc = e.currentTarget.querySelector('.descripcion');
              if (desc) {
                desc.style.maxHeight = '0';
                desc.style.opacity = '0';
              }
              if (servicioActivo !== servicio.id) {
                e.currentTarget.style.height = '60vh';
              }
            }}
          >
            <img src={servicio.img} style={styles.servicioImg} alt={servicio.titulo} />
            <p style={styles.serviciosText}>{servicio.titulo}</p>
            <p className="descripcion" style={styles.serviciosDescripcion}>{servicio.descripcion}</p>
            <div>
              <button 
                style={styles.servicioButton}
                onClick={() => toggleCalendario(servicio.id)}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#114050';
                  e.target.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#ffffff';
                  e.target.style.color = '#114050';
                }}
              >
                {servicioActivo === servicio.id ? "Cerrar" : "Reserva ahora!"}
              </button>
            </div>

            {servicioActivo === servicio.id && (
              <div style={styles.calendarioContainer}>
                <p style={styles.calendarioTitulo}>Selecciona una fecha:</p>
                <div style={styles.calendarioGrid}>
                  {generarDias().map((dia, index) => (
                    <div
                      key={index}
                      style={{
                        ...styles.diaItem,
                        ...(diaSeleccionado === dia.fechaCompleta ? styles.diaSeleccionado : {})
                      }}
                      onClick={() => setDiaSeleccionado(dia.fechaCompleta)}
                      onMouseEnter={(e) => {
                        if (diaSeleccionado !== dia.fechaCompleta) {
                          e.currentTarget.style.backgroundColor = '#ffd4a3';
                          e.currentTarget.style.transform = 'scale(1.05)';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (diaSeleccionado !== dia.fechaCompleta) {
                          e.currentTarget.style.backgroundColor = '#f5f5f5';
                          e.currentTarget.style.transform = 'scale(1)';
                        }
                      }}
                    >
                      <span style={styles.diaSemana}>{dia.diaSemana}</span>
                      <span style={styles.diaNumero}>{dia.numero}</span>
                      <span style={styles.diaMes}>{dia.mes}</span>
                    </div>
                  ))}
                </div>

                {diaSeleccionado && (
                  <div style={styles.horasContainer}>
                    <p style={styles.horasTitulo}>Selecciona una hora:</p>
                    <select 
                      style={styles.horasSelect}
                      value={horaSeleccionada}
                      onChange={(e) => setHoraSeleccionada(e.target.value)}
                    >
                      <option value="">-- Elige una hora --</option>
                      {horasDisponibles.map((hora, index) => (
                        <option key={index} value={hora}>{hora}</option>
                      ))}
                    </select>
                    
                    {horaSeleccionada && (
                      <button 
                        style={styles.confirmarButton}
                        onMouseEnter={(e) => {
                          e.target.style.backgroundColor = '#0a2a35';
                          e.target.style.transform = 'scale(1.05)';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.backgroundColor = '#114050';
                          e.target.style.transform = 'scale(1)';
                        }}
                        onClick={() => {
                          alert(`Reserva confirmada para ${servicio.titulo}\nFecha: ${diaSeleccionado}\nHora: ${horaSeleccionada}`);
                        }}
                      >
                        Confirmar Reserva
                      </button>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tienda;