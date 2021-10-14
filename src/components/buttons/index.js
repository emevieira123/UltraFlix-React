import React from 'react';
import './style.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faInfoCircle } from '@fortawesome/free-solid-svg-icons'

const BtnPrincipal = () => {
    return (
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
    );
}

export default BtnPrincipal;