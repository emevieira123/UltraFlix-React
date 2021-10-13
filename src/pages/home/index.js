import React from 'react';
// import capa from "../../assets/capa.jpeg";
import './style.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faInfoCircle } from '@fortawesome/free-solid-svg-icons'

export default function Home() {
    return (
        <>
            <header>
                <div className="container">
                    <h2 className="logo">ULTRAFIX</h2>
                    <nav>
                        <a href="http://localhost:3000/">Início</a>
                        <a href="http://localhost:3000/">Séries</a>
                        <a href="http://localhost:3000/">Filmes</a >
                        <a href="http://localhost:3000/">Bombando</a>
                    </nav>
                </div>
            </header>

            <main>
                <div className="filme-principal">
                    <div className="container">
                        <h3 className="titulo">VENOM</h3>
                        <p className="descricao">
                            O jornalista Eddie Brock desenvolve
                            força e poder sobre-humanos quando seu
                            corpo se funde com o alienígena Venom.
                            Dominado pela raiva, Venom tenta controlar
                            as novas e perigosas habilidades de Eddie
                        </p>

                        <div className="botoes">
                            <button className="btn">
                                <FontAwesomeIcon className="btnIcon" icon={faPlay} />
                                ASSISTIR AGORA
                            </button>
                            <button className="btn">
                                <FontAwesomeIcon className="btnIcon" icon={faInfoCircle} />
                                MAIS INFORMAÇÕES
                            </button>
                        </div>

                    </div>
                </div>
            </main>
        </>
    );
}