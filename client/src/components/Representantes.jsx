import React from 'react'
import { Link } from 'react-router-dom';

import Map from './Map'

import '../css/main.css'
import '../css/animations.css'
import '../css/page-representantes.css'

import logo from '../images/logo-alumbra-menor.png';
import plus from '../images/plus.svg'

export default () => {
  
  return(
    <div id="page-representantes">
        <aside className="animate-right">
          <header>
            <button>
              <Link to="/">
                <img src={logo} alt="Logo Alumbra" />
              </Link>
            </button>
          </header>         
            <h2>Escolha a região</h2>
            <p></p>
          <footer>
            <strong>São Bernardo</strong>
            <p>São Paulo</p>
          </footer>
        </aside>
        <Map className="map-container animate-appear" id="mapid" pageId="1"/>
        <Link className="create-representante" to="/Create-representante">
          <img src={plus} alt="Criar Representante" />
        </Link>
      </div>
  );
};
