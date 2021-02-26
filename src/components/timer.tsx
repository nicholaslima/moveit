


import React from 'react';
import styles from '../styles/components/timer.module.css';

const Timer: React.FC = () => {
    return(
        <div className={ styles.content }>
            <div className={ styles.counter }>
                <p className={ styles.digito }>2</p>
                <p className={ styles.digito }>5</p>
                <p className={ styles.separador }>:</p>
                <p className={ styles.digito }>0</p>
                <p className={ styles.digito }>0</p>
            </div>
            <button>iniciar um ciclo</button>
        </div>
    )
}

export default Timer;