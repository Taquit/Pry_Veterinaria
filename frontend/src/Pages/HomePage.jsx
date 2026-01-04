
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
                                <img src="src/assets/esteticaazul.png" alt="" class="homepage-imgservices"></img>
                                <p className="homepage-subtitle">Estetica</p>
                            </div>
                            <div className="homepage-containerservices">
                                <svg xmlns="http://www.w3.org/2000/svg" width="7vw" height="auto" fill="currentColor" class="bi bi-chat-text-fill icon" viewBox="0 0 16 16">
                                <path d="M16 8c0 3.866-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7M4.5 5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1zm0 2.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1zm0 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1z"/>
                                </svg>
                                <p className="homepage-subtitle">Contacto</p>
                            </div>
                        </div>
                    </div>
                
                <Carousel className="carousel-desc">
                    <Carousel.Item>
                        <div className="homepage-descriptiontext">
                            <div className="desctext">
                                <p className="homepage-subtitle">Misión</p>
                                <p className="homepage-textdesc">Brindar un servicio de hotelería de alta calidad para mascotas, asegurando un ambiente libre de estrés y lleno de amor, diversión y seguridad. Nos dedicamos a cuidar a cada animal como si fuera nuestro, ofreciendo una experiencia inigualable que garantice su felicidad y la tranquilidad de sus familias</p>
                            </div>
                            <img src="src/assets/perritofeli.webp" class="img-carousel" alt="..."></img>
                        </div> 
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="homepage-descriptiontext">
                            <div className="desctext">
                                <p className="homepage-subtitle">Misión</p>
                                <p className="homepage-textdesc">Brindar un servicio de hotelería de alta calidad para mascotas, asegurando un ambiente libre de estrés y lleno de amor, diversión y seguridad. Nos dedicamos a cuidar a cada animal como si fuera nuestro, ofreciendo una experiencia inigualable que garantice su felicidad y la tranquilidad de sus familias</p>
                            </div>
                                 <img src="src/assets/cuartosencillo.jpg" class="img-carousel" alt="..."></img>
                        </div>
                    </Carousel.Item>
                </Carousel>
                    
                </div>
                <div className="homepage-location">
                    <p className="homepage-subtitle">¿Dónde nos encontramos?</p>
                    <div className="homepage-contlac">
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
