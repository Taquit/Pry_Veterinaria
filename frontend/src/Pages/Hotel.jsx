import React from "react";
import "./Css/Hotel.css";
import { Link } from "react-router-dom";


function Hotel(){
    return(
        <div className="hotel-container">
            <div className="hotel-description">
                <p className="hotel-subtitle">¿Que es un hotel para mascotas?</p>
                <p className="hotel-textdescription">Es un establecimiento especializado en brindar alojamiento temporal a animales domésticos (principalmente perros y gatos, aunque algunos también aceptan aves, conejos o reptiles) cuando sus dueños no pueden cuidarlos por un tiempo, por ejemplo durante un viaje o una ausencia prolongada.</p>
                <img src="src/assets/hotelimage.jpg" alt="" className="hotel-imgdescription"/>
            </div>
            <div className="hotel-rooms">
                <p className="hotel-subtitle">Habitaciones</p>
                <p className="hotel-textdescription">Tellus Animalium cuenta con el siguiente catálogo de habitaciones en las que su mascota puede hospedarse</p>
                <div className="hotel-containerrooms">
                    <div className="hotel-kndrooms">
                        <img src="src/assets/cuartosencillo.jpg" className="imgroom" alt="" />
                        <p className="hotel-roomsubtitle">Sencilla</p>
                        <p className="hotel-textdesc">Espacio básico, generalmente individual, con cama cómoda, agua fresca y ventilación adecuada. Es funcional y seguro, pensado solo para cubrir las necesidades esenciales de descanso y alimentación.</p>
                    </div>
                     <div className="hotel-kndrooms">
                        <img src="src/assets/cuartonormal.jpg" className="imgroom" alt="" />
                        <p className="hotel-roomsubtitle">Todo Incluido</p>
                        <p className="hotel-textdesc">Área un poco más amplia, con cama acolchonada, juguetes, bebedero automático y, en algunos casos, acceso a una zona común para juegos o paseos controlados. Ofrece mayor confort que la sencilla.</p>
                    </div>
                     <div className="hotel-kndrooms">
                        <img src="src/assets/cuartodoincluido.jpg" className="imgroom" alt="" />
                        <p className="hotel-roomsubtitle">VIP</p>
                        <p className="hotel-textdesc">Espacio de lujo, amplio y personalizado. Incluye cama tipo sofá, juguetes variados, aire acondicionado o calefacción, cámaras para que el dueño pueda ver a su mascota, servicio de entretenimiento</p>
                    </div>
                </div>
            </div>
            <div className="hotel-selection">
                <button className="hotel-button">Reserva ahora!</button>
            </div>
            <div className="homepage-location">
                    <div className="homepage-contlac">
                        <p className="homepage-subtitle">¿Dónde nos encontramos?</p>
                        <iframe
                            title="Ubicación Resort Manager"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.56721822767!2d-99.13320868509422!3d19.43260798688724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f92d5d9f1bfb%3A0x1234567890abcdef!2sCiudad%20de%20México!5e0!3m2!1ses-419!2smx!4v1700000000000!5m2!1ses-419!2smx"
                            width="100%"
                            height="300"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="homepage-map"
                        ></iframe>
                    </div>
                </div>
        </div>
    )
}

export default Hotel;
