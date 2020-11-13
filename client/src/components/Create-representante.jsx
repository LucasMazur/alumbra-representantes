import React from 'react'
import { Link } from 'react-router-dom'

import Map from './Map'

import '../css/main.css'
import '../css/sidebar.css'
import '../css/animations.css'
import '../css/map.css'
import '../css/form.css'
import '../css/buttons.css'
import '../css/page-create-representante.css'

import logoMenor from '../images/logo-alumbra-menor.png'
import arrowBack from '../images/arrow-back.svg'
import addFiles from '../images/add-file.svg'
import removeFiles from '../images/remove-file.svg'

export default () => {
    return (
        <div className="page-create-representante" id="page-create-representante">
            <aside className="animate-right sidebar">
                <img src={logoMenor} alt="Logo Alumbra"/>
                <footer>
                    <button>
                        <Link to="/Representantes">
                            <img src={arrowBack} alt=""/>
                        </Link>
                    </button>
                </footer>
            </aside>
            <main className="animate-appear with-sidebar">
                <form action="save-representante" method="post">
                    <fieldset>
                        <legend>Dados</legend>
                        <div className="map-container">
                            <Map className="mapid" id="mapid" pageId="3"/>
                            <footer>
                                <a href="#" id="select-point">
                                    Clique no mapa para adicionar a localização
                                </a>
                            </footer>
                        </div>
                        <div className="input-block">
                            <label htmlFor="name">Nome</label>
                            <input id="name" name="name" required/>
                        </div>
                        <div className="input-block">
                            <label htmlFor="about"
                                >Sobre <span>Máximo de 300 caracteres</span></label
                            >
                            <textarea id="about" name="about" required></textarea>
                        </div>

                        <div className="input-block">
                            <label htmlFor="whatsapp">Número do WhatsApp</label>
                            <input id="whatsapp" name="whatsapp" required/>
                        </div>

                        <div className="input-block images1">
                            <label htmlFor="images">Foto</label>
                            <div className="images-upload" id="images">
                                <div className="new-upload">
                                    <input 
                                        name="images" 
                                        placeholder="Cole o link da foto aqui" 
                                        required
                                        type="url"
                                    />
                                    <span><img src={removeFiles} alt="Remover Foto"/></span>
                                </div>
                            </div>
                            <button type="button">
                                <img src={addFiles} alt="Nova Foto" />
                            </button>
                        </div>
                    </fieldset>

                    <fieldset>
                        <legend>visitação</legend>

                        <div className="input-block">
                            <label htmlFor="instructions">Instruções</label>
                            <textarea id="instructions" name="intructions" required></textarea>
                        </div>

                        <div className="input-block">
                            <label htmlFor="opening_hours">Horário das visitas</label>
                            <input id="opening_hours" name="opening_hours" required/>
                        </div>

                        <div className="input-block">
                            <label htmlFor="open_on_weekends">Atende nos finais de semana?</label>
                            <input
                                type="hidden"
                                id="open_on_weekends"
                                name="open_on_weekends"
                                value="1"
                                required
                            />

                            <div className="button-select">
                                <button type="button" className="active">Sim</button>
                                <button type="button">Não</button>
                            </div>

                            <button type="submit" className="primary-button">
                                Confirmar
                            </button>
                        </div>
                    </fieldset>
                </form>
            </main>
        </div>
    );
};