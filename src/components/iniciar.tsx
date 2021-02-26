

import React from 'react';
import styles from '../styles/components/Iniciar.module.css';

const Iniciar: React.FC = () => {
    return(
        <div className={ styles.content }>
            <p className={ styles.title }>Inicie um ciclo para receber desafios</p>
            <img src="icons/level-up.svg" alt="icone"/>
            <p className={ styles.description }>Avance de level completando desafios</p>
        </div>
    )
}

export default Iniciar;