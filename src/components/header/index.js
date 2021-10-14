import React from 'react';
import './style.css';

const LogoMenu = () => {
    return (
        <header>
            <div className="container">
                <h2 className="logo">ULTRAFIX</h2>
                <nav>
                    <a href="http://localhost:3000/">Início</a>
                    <a href="http://localhost:3000/">Séries</a>
                    <a href="http://localhost:3000/">Filmes</a >
                    <a href="http://localhost:3000/">Bombando</a>
                    <a href="http://localhost:3000/">Minha Lista</a>
                </nav>
            </div>
        </header>
    );
}

export default LogoMenu;