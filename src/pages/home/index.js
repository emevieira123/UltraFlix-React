import React from 'react';
// import capa from "../../assets/capa.jpeg";
import './style.css';

export default function Home() {
    return (
        <>
            <header>
                <div className="container">
                    <h2 className="logo">NETFLIX</h2>
                    <nav>
                        <a href="http://localhost:3000/">Início</a>
                        <a href="http://localhost:3000/">Séries</a>
                        <a href="http://localhost:3000/">Filmes</a >
                        <a href="http://localhost:3000/">Bombando</a>
                    </nav>
                </div>
            </header>
        </>
    );
}