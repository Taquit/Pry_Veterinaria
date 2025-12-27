
import React from "react";
import { Link } from "react-router-dom";
import "./Css/HomePage.css";
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';



function HomePage(){
    return (
            <div className="homepage-container">
            <Carousel>
                <Carousel.Item>
                    <img src="src/assets/indeximage.png" class="d-block w-100" alt="..."></img>
                  </Carousel.Item>
                <Carousel.Item>
                    <img src="src/assets/image1.png" class="d-block w-100" alt="..."></img>
                 </Carousel.Item>
                <Carousel.Item>
                    <img src="src/assets/image2.png" class="d-block w-100" alt="..."></img>
                 </Carousel.Item>
            </Carousel>
                <div className="homepage-desccontainer">
                    <div className="homepage-services">
                        <p className="homepage-subtitle" id="subtserv">Servicios</p>
                        <div className="homepage-imagesservices">
                            <div className="homepage-containerservices">
                                <svg xmlns="http://www.w3.org/2000/svg" width="7vw" height="auto" fill="currentColor" class="bi bi-building-fill  icon" viewBox="0 0 16 16">
                                <path d="M3 0a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h3v-3.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V16h3a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1zm1 2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3.5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5M4 5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zM7.5 5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5m2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zM4.5 8h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5m2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3.5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5"/>
                                </svg>
                            <p className="homepage-subtitle" id="subtitleservices">Hospedaje</p> 
                            </div>
                            <div className="homepage-containerservices">
                                 <img src="src/assets/spa.png" alt="" class="homepage-imgservices"></img>
                                <p className="homepage-subtitle" id="subtitleservices">Spa</p> 
                            </div>
                            <div className="homepage-containerservices">
                                <img src="src/assets/pasear.png" alt="" class="homepage-imgservices"></img>
                                <p className="homepage-subtitle" id="subtitleservices">Paseo</p> 
                            </div>
                            <div className="homepage-containerservices">
                                <svg xmlns="http://www.w3.org/2000/svg" width="7vw" height="auto" fill="currentColor" class="bi bi-bandaid-fill icon" viewBox="0 0 16 16">
                                <path d="m2.68 7.676 6.49-6.504a4 4 0 0 1 5.66 5.653l-1.477 1.529-5.006 5.006-1.523 1.472a4 4 0 0 1-5.653-5.66l.001-.002 1.505-1.492.001-.002Zm5.71-2.858a.5.5 0 1 0-.708.707.5.5 0 0 0 .707-.707ZM6.974 6.939a.5.5 0 1 0-.707-.707.5.5 0 0 0 .707.707M5.56 8.354a.5.5 0 1 0-.707-.708.5.5 0 0 0 .707.708m2.828 2.828a.5.5 0 1 0-.707-.707.5.5 0 0 0 .707.707m1.414-2.121a.5.5 0 1 0-.707.707.5.5 0 0 0 .707-.707m1.414-.707a.5.5 0 1 0-.706-.708.5.5 0 0 0 .707.708Zm-4.242.707a.5.5 0 1 0-.707.707.5.5 0 0 0 .707-.707m1.414-.707a.5.5 0 1 0-.707-.708.5.5 0 0 0 .707.708m1.414-2.122a.5.5 0 1 0-.707.707.5.5 0 0 0 .707-.707M8.646 3.354l4 4 .708-.708-4-4zm-1.292 9.292-4-4-.708.708 4 4z"/>
                                 </svg>
                                 <p className="homepage-subtitle" id="subtitleservices">Veterinaria</p>
                            </div>
                            <div className="homepage-containerservices">
                                <svg xmlns="http://www.w3.org/2000/svg" width="7vw" height="auto" fill="currentColor" class="bi bi-camera2 icon" viewBox="0 0 16 16">
                                <path d="M5 8c0-1.657 2.343-3 4-3V4a4 4 0 0 0-4 4"/>
                                <path d="M12.318 3h2.015C15.253 3 16 3.746 16 4.667v6.666c0 .92-.746 1.667-1.667 1.667h-2.015A5.97 5.97 0 0 1 9 14a5.97 5.97 0 0 1-3.318-1H1.667C.747 13 0 12.254 0 11.333V4.667C0 3.747.746 3 1.667 3H2a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1h.682A5.97 5.97 0 0 1 9 2c1.227 0 2.367.368 3.318 1M2 4.5a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0M14 8A5 5 0 1 0 4 8a5 5 0 0 0 10 0"/>
                                </svg>
                                <p className="homepage-subtitle" id="subtitleserv">Registro Fotográfico</p>
                            </div>
                            <div className="homepage-containerservices">
                                <svg xmlns="http://www.w3.org/2000/svg" width="7vw" height="auto" fill="currentColor" class="bi bi-chat-text-fill icon" viewBox="0 0 16 16">
                                <path d="M16 8c0 3.866-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7M4.5 5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1zm0 2.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1zm0 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1z"/>
                                </svg>
                                <p className="homepage-subtitle">Contacto</p>
                            </div>
                        </div>
                    </div>
                    <div className="homepage-description">
                        <div className="homepage-descriptiontext">
                            <p className="homepage-subtitle">Misión</p>
                            <p className="homepage-textdesc">Brindar un servicio de hotelería de alta calidad para mascotas, asegurando un ambiente libre de estrés y lleno de amor, diversión y seguridad. Nos dedicamos a cuidar a cada animal como si fuera nuestro, ofreciendo una experiencia inigualable que garantice su felicidad y la tranquilidad de sus familias</p>
                        </div>
                        <div className="homepage-imagedescription">

                        </div>
                    </div>
                    <div className="homepage-description">
                        <div className="homepage-descriptiontext">
                            <p className="homepage-subtitle">Visión</p>
                            <p className="homepage-textdesc">Ser el hotel para mascotas líder en el país, reconocido por nuestra excelencia en el cuidado, nuestras instalaciones de vanguardia y nuestro compromiso con el bienestar animal. Aspiramos ser el lugar de confianza al que las familias acudan para el cuidado de sus mascotas.</p>
                        </div>
                        <div className="homepage-imagedescription">

                        </div>
                    </div>
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

export default HomePage;
