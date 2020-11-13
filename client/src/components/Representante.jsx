import React from 'react'
import { Link } from 'react-router-dom'

import '../css/main.css'
import '../css/animations.css'
import '../css/sidebar.css'
import '../css/map.css'
import '../css/buttons.css'
import '../css/page-representante.css'

import logo from '../images/logo-alumbra-menor.png'
import arrowBack from '../images/arrow-back.svg'
import clock from '../images/clock.svg'
import info from '../images/info.svg'
import whatsapp from '../images/whatsapp.svg'

export default (props) => {
    console.log(props)
    return (
        <div id="page-representante">
            <aside className="animate-right sidebar">
                <img src={logo} alt="Logo Alumbra"/>
                <footer>
                    <button>
                        <Link to="/Representantes">
                            <img src={arrowBack} alt=""/>
                        </Link>
                    </button>
                </footer>
            </aside>
            <main className="animate-appear with-sidebar"> 
                <div className="representante-details">
                    <img src="./public/images/home.jpg" alt="" />
                    <div className="images">
                        <button onclick="selectImage(event)" className="active" type="button">
                        <img src="https://source.unsplash.com/random?id=1" alt="" />
                        </button>
                        <button onclick="selectImage(event)" type="button">
                        <img src="https://source.unsplash.com/random?id=25" alt="" />
                        </button>
                        <button onclick="selectImage(event)" type="button">
                        <img src="https://source.unsplash.com/random?id=35" alt="" />
                        </button>
                        <button onclick="selectImage(event)" type="button">
                        <img src="https://source.unsplash.com/random?id=45" alt="" />
                        </button>
                        <button onclick="selectImage(event)" type="button">
                        <img src="https://source.unsplash.com/random?id=55" alt="" />
                        </button>
                        <button onclick="selectImage(event)" type="button">
                        <img src="https://source.unsplash.com/random?id=65" alt="" />
                        </button>
                    </div>
                    <div className="representante-details-content">
                        <h1>Representante x</h1>
                        <p>teste</p>
                        <div className="map-container">
                            <div id="mapid"></div>
                            <footer>
                                <a href="#">Ver fotos no Google Maps</a>
                            </footer>
                        </div>

                        <hr />

                        <h2>Instruções</h2>
                        <p>teste</p>
                        <div className="open-details">
                            <div className="hours">
                                <img src={clock} alt="Horario de abertura" />
                                Horario de abertura
                            </div>
                            <div className="open-on-weekends">
                                <img src={info} alt="Horarios de finais de semana" />
                                atendemos
                            </div>
                        </div>

                        <button className="primary-button" type="button">
                            <img src={whatsapp} alt="" />
                            Entrar em contato
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
};