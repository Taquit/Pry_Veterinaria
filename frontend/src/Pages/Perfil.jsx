import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { Modal, Button } from 'react-bootstrap';
import "./Css/Perfil.css";
import axios from "axios";
import Registro_Contacto from "./Registro_Contacto";
import Registro_Dom from "./RegistroDom";
import ReMascotCard from "./Cards/ReMascotCard";

function Perfil(){

    const [dueno,setDueno]=useState({});
    const [domicilio,setDomicilio]=useState({});
    const [mascota,setMascota]=useState([]);
    const [emergencia,setEmergencia]=useState({})
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState("");
    const [showContacto, setShowContacto] = useState(false);
    const [showDomicilio, setShowDomicilio] = useState(false);
    const [showMascota,setShowMascota]=useState(false)
     
        const fetchAll = async () => {
    const id = Number(localStorage.getItem("id_dueño") || "0");

    console.log("ID Dueño desde localStorage:", id);

    if (!id) {
        setError("No hay id_dueño en localstorage. Inicia sesión");
        setLoading(false);
        return;
    }

    setLoading(true);
    setError("");
    
    try {
        // Primero, obtén los datos del dueño
        const duenoRes = await axios.post(`http://localhost:8000/v2/get-user/`, { id_dueno: id });
        console.log("duenoRes.data:", duenoRes.data);  
        setDueno(duenoRes.data);


        // Luego, con el id_domicilio, obtén la información del domicilio
        const domeRes = await axios.post(`http://localhost:8000/v2/get-full-address/`,{id_domicilio: duenoRes.data.id_domicilio });
        console.log("domeRes.data:", domeRes.data);
        setDomicilio(domeRes.data);
        

        // Luego, obtén las mascotas del dueño
        const mascRes = await axios.post(`http://localhost:8000/v2/get-mascotas-by-dueno/`, { id_dueno: id });
        console.log("mascRes.data:", mascRes.data);
        if (mascRes.data && mascRes.data.mascotas) {
            setMascota(mascRes.data.mascotas);
        } else {
            setMascota([]);
        }

        // Finalmente, obtén la información del contacto de emergencia
        const contactRes = await axios.post(`http://localhost:8000/v2/contactoemergencia/`, { id_contacto: duenoRes.data.id_dueno });
        console.log("contactRes.data:", contactRes.data);
        if (contactRes.data?.ok) {
            setEmergencia(contactRes.data);
        } else {
            setEmergencia(null);
        }
    } catch (err) {
        setError(err.response?.data?.detail || "No se pudo cargar información");
        
        setMascota([]);
    } finally {
        setLoading(false);
    }
};

    

    useEffect(()=>{
        fetchAll()
    },[]);  
    useEffect(() => {
  console.log("Emergencia:", emergencia);
}, [emergencia]);

useEffect(() => {
  console.log("Domicilio:", domicilio);
}, [domicilio]);  

    async function deletMascota(id_mascota) {
        await axios.delete(`http://localhost:8000/api/mascotas/${id_mascota}/`)
        await fetchAll();
    }

    async function deletDomicilio(id_domicilio) {
        const id_dueño = Number(localStorage.getItem("id_dueño")|| "0")
        if(!id_dueño || !id_domicilio) return;
        
        await axios.patch(`http://localhost:8000/api/due%C3%B1os/${id_dueño}/`, {id_domicilio:null})
        await axios.delete(`http://localhost:8000/api/domicilios/${id_domicilio}/`)
        await fetchAll();
    }

    async function deletContacto(id_contacto) {
        const id_dueño = Number(localStorage.getItem("id_dueño")|| "0")
        if(!id_dueño || !id_contacto) return;
        
        await axios.patch(`http://localhost:8000/api/due%C3%B1os/${id_dueño}/`, {id_contacto:null})
        await axios.delete(`http://localhost:8000/api/contactos_emergencia/${id_contacto}/`)
        await fetchAll();
    }

    



    return(
        <div className="perfil-container">
            <div className="perfil-ttl">
                <p className="perfil-nombre">Bienvenido:  {dueno.nombre} {dueno.apellido_pat} {dueno.apellido_mat} </p>
            </div>   
            <div className="perfil-informacion">
                <h3 className="perfil-sbttl">Datos de Contacto</h3>
                <div className="perfil-contacto" >
                    <h4>Contacto Dueño:</h4>
                    <p className="perfil-dato">Numero telefónico: <span className="perfil-numero">{dueno.telefono}</span></p>
                    <p className="perfil-dato">Correo electronico: <span className="perfil-correo">{dueno.correo}</span></p>
                    
                    

                    
                </div>
                <div className="perfil-contacto" id="perfil-direc">
                    <p className="perfil-dato">Dirección :</p> 
                    <span className="perfil-numero">
                        { domicilio  && domicilio.calle? (
                            <>
                            {domicilio.calle} #{domicilio.no_ext}, CP{domicilio.codigo_postal} {domicilio.nombre_asenta} ,{domicilio.nom_municipio}, {domicilio.nom_estado}
                            </>
                        ):(
                            " No hay domicilio registrado"
                        )} 
                    </span>
                </div>
                <div className="perfil-contacto">
                    <h4>Contacto Emergencia:</h4>
                        { emergencia  && emergencia.nombre? (
                            <>
                            <p className="perfil-dato">Nombre: {emergencia.nombre} {emergencia.apellido_p}</p>
                            <p className="perfil-dato">Correo: {emergencia.correo}</p>
                            <p className="perfil-dato">Telefono:{emergencia.telefono_contacto}</p>  
                            </>
                        ):(
                            " No hay contacto de emergencia... "
                        )} 
                        
                </div>
                        
                <div className="perfil-botones-modal">
                    <button className="btn btn-primary" onClick={() => setShowContacto(true)}>
                        Agregar Contacto de Emergencia
                    </button>
                    <button className="btn perfil-eliminar" onClick={() => deletContacto(emergencia.id_contacto)}>
                        Eliminar Contacto de Emergencia
                    </button>
                    <button className="btn btn-primary" onClick={() => setShowDomicilio(true)}>
                        Agregar Nuevo Domicilio
                    </button>
                    <button className="btn perfil-eliminar" onClick={() => deletDomicilio(domicilio.id_domicilio)}>
                        Eliminar Domiclio
                    </button>
                </div>
                
            </div>

           

            <Modal show={showContacto} onHide={() => setShowContacto(false)} centered>
                <Modal.Header closeButton>
                <Modal.Title>Agregar Contacto de Emergencia</Modal.Title>
                </Modal.Header>
                <Modal.Body><Registro_Contacto onSaved={async(contactoCreado)=>{
                    
                    const ownerId = Number(localStorage.getItem("id_dueño")||"0")
                    if(!ownerId)return;
                    
                    await axios.patch(`http://localhost:8000/api/due%C3%B1os/${ownerId}/`, {id_contacto:contactoCreado.id_contacto})
                    setShowContacto(false)
                }         
                    }/>

                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={() => setShowContacto(false)}>
                    Cancelar
                </Button>
                <Button variant="primary" form ="form-contacto" type="submit">Guardar Contacto</Button>
                </Modal.Footer>
            </Modal>

            <Modal show={showDomicilio} onHide={() => setShowDomicilio(false)} centered>
            <Modal.Header closeButton>
                <Modal.Title>Agregar Nuevo Domicilio</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Registro_Dom
                onSaved={async (domCreado) => {
                    try {
                        const ownerId = Number(localStorage.getItem("id_dueño") || "0");
                        if (!ownerId) return;

                        const nuevoIdDom = domCreado.id_domicilio || domCreado.id
                        if(!nuevoIdDom){
                            console.error("No se encontro Id en la respuesta")
                        }
                        
                        await axios.patch(`http://localhost:8000/api/due%C3%B1os/${ownerId}/`, {id_domicilio:nuevoIdDom})
                        setShowDomicilio(false)
                        const response = await axios.get(`http://localhost:8000/api/due%C3%B1os/${ownerId}`);
                        setDueño(response.data); 

                        setShowDomicilio(false);
                        
                    } catch (err) {
                    console.log(
                        "Error relacionando domicilio con dueño:",
                        err.response?.data || err.message
                    );
                    }
                }}
                />
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={() => setShowDomicilio(false)}>
                Cancelar
                </Button>

                <Button variant="primary" form="form-dom" type="submit">
                Guardar Domicilio
                </Button>
            </Modal.Footer>
            </Modal>
            

            <div className="perfil-animales-container">
                <p className="perfil-sbttl">Tus mascotas</p>
                <div className="perfiles-animales">
                    
                        {mascota.length >0 ? (mascota.map((pet)=>(
                            <div key={pet.id_mascota} className="perfil-datos-animal">
                                <img
                                    className="perfil-foto-mascota"
                                    src={pet.foto_url ? pet.foto_url: "http://localhost:8000/media/mascotas/default.jpg"}
                                    alt={pet.nombre_mascota}
                                    onError={(e) => { (e)=>{
                                        e.currentTarget.onerror=null;
                                        e.currentTarget.src="/default.jpg";
                                    } }}
                                />
                                <p className="perfil-nombre-animal">
                                    Nombre: <span id="animal-nombre">{pet.nombre_mascota}</span>
                                </p>
                                <p className="perfil-tipo-animal">Mascota: <span id="animal-tipo">{pet.tipo}</span></p>
                                <p className="perfil-tipo-animal">Especie: <span id="animal-tipo">{pet.nom_subtipo}</span></p>
                                <button className="perfil-eliminar" onClick={()=> deletMascota(pet.id_mascota)}> <svg xmlns="http://www.w3.org/2000/svg" width="auto" height="4vh" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                                <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                            </svg></button>
                            </div>
                        ))
                        ) :(
                            <p>No tienes mascotas agregadas... </p>
                        )}
                        
                </div>
                <button className="perfil-button" onClick={()=>setShowMascota(true)}>Agregar mascota nuevo</button>
                <Modal show={showMascota} onHide={() => setShowMascota(false)} centered>
                    <Modal.Header closeButton>
                        <Modal.Title>Agregar Mascota</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <ReMascotCard onSucces={()=>setShowMascota(false)}/>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => setShowMascota(false)}>
                            Cancelar
                        </Button>
                    </Modal.Footer>
                </Modal>
                <div className="perfil-historial">
    <p className="perfil-sbttl">Tus reservaciones</p>
    <div className="tabla-reservaciones">
        <table className="tabla-historial">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Mascotas</th>
                    <th>Check In</th>
                    <th>Check Out</th>
                    <th>Estatus</th>
                    <th>Cancelación</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>001</td>
                    <td>Paquito, Luna</td>
                    <td>15/01/2026</td>
                    <td>20/01/2026</td>
                    <td><span className="estatus confirmada">Confirmada</span></td>
                    <td><button className="btn-cancelar">Cancelar</button></td>
                </tr>
                <tr>
                    <td>002</td>
                    <td>Max</td>
                    <td>25/01/2026</td>
                    <td>28/01/2026</td>
                    <td><span className="estatus pendiente">Pendiente</span></td>
                    <td><button className="btn-cancelar">Cancelar</button></td>
                </tr>
                <tr>
                    <td>003</td>
                    <td>Paquito</td>
                    <td>10/12/2025</td>
                    <td>15/12/2025</td>
                    <td><span className="estatus completada">Completada</span></td>
                    <td><button className="btn-cancelar" disabled>-</button></td>
                </tr>
                <tr>
                    <td>004</td>
                    <td>Luna, Rocky</td>
                    <td>05/02/2026</td>
                    <td>10/02/2026</td>
                    <td><span className="estatus confirmada">Confirmada</span></td>
                    <td><button className="btn-cancelar">Cancelar</button></td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
            </div>
        </div>
    )
}
export default Perfil;