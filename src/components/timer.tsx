


import React from 'react';
import styles from '../styles/components/timer.module.css';
import { useTimerContext } from '../contexts/timerContext';



const Timer: React.FC = () => {
    const { 
        minutes,
        seconds,
        iniciarCiclo,
        hasFinished,
        isCounting,
        pararCiclo 
    } = useTimerContext();
 
    const [ minuteLeft,minuteRight ] = String(minutes).padStart(2,'0').split('');
    const [ secondLeft,secondRight ] = String(seconds).padStart(2,'0').split('');

    return(
        <div className={ styles.content }>
            <div className={ styles.counter }>
                <div>
                    <p className={ styles.digito }>{minuteLeft}</p>
                    <p className={ styles.digito }>{minuteRight}</p>
                </div>
                
                <p className={ styles.separador }>:</p>

                <div>
                    <p className={ styles.digito }>{secondLeft}</p>
                    <p className={ styles.digito } >{secondRight}</p>
                </div>
            </div>

            {
                hasFinished ? (
                    <button 
                    disabled
                    className={ styles.btnFinalizado} >
                        Ciclo encerrado
                    </button>
                ) :(  
                        <>
                        {
                            isCounting ? (
                                <button className={ styles.btnAbandonar } onClick={ pararCiclo }>Abandonar ciclo</button>
                            ): (
                                <button className={ styles.btnIniciar } onClick={ iniciarCiclo }>iniciar um ciclo</button>
                            )
                        }
                        </>
                    )
            }
        </div>
    )
}

export default Timer;