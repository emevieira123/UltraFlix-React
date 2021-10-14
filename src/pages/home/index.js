import React from 'react';
import BtnPrincipal from '../../components/buttons'
import Carrosel from '../../components/carrosel';
import LogoMenu from '../../components/header';
import './style.css';


export default function Home() {
    return (
        <>
            <main>
                <div className="filme-principal">
                    <div className="container">
                        <LogoMenu />
                        <h3 className="titulo"> </h3>
                        <p className="descricao">
                            O jornalista Eddie Brock desenvolve
                            força e poder sobre-humanos quando seu
                            corpo se funde com o alienígena Venom.
                            Dominado pela raiva, Venom tenta controlar
                            as novas e perigosas habilidades de Eddie
                        </p>

                        <BtnPrincipal />

                    </div>
                </div>
                <div>
                    <Carrosel />
                </div>
            </main>
        </>
    );
}