import React from 'react'
import { Link } from 'react-router-dom';

// Import das estilizações
import '../css/page-landing.css'
import '../css/animations.css'
import '../css/main.css'

import arrowGo from '../images/arrow-white.svg'
import logo from '../images/logo-alumbra.png'

export default () => {

    return (
        <div id="page-landing">
            <div id="container">
                <header>
                    <img
                        className="animate-up"
                        src={logo} 
                        alt="Logo marca Alumbra"
                    />
                    <div className="location animate-up">
                        <strong>São Bernardo do Campo</strong>
                        <p>São Paulo</p>
                    </div>
                </header>
                <main>
                    <h1 className="animate-up">Encontre representantes por todo Brasil</h1>
                    <section className="visit">
                        <p>
                            SAC: 0800-193130
                        </p>
                        <Link to="/Representantes">
                            <img src={arrowGo} alt="Pagina dos Representantes"/>
                        </Link>
                    </section>
                </main>
            </div>
        </div>
    );
};
