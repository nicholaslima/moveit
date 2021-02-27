


import React,{ useState,useCallback,useEffect } from 'react';
import styles from '../styles/components/timer.module.css';


let idTimeOut : NodeJS.Timeout;

const Timer: React.FC = () => {
    const [ isCounting,setIsCounting ] = useState(false);
    const [ time ,setTime ] = useState(0.1 * 60);
    const [ hasFinished,setHasFinshed ] = useState(false);
 
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const [ minuteLeft,minuteRight ] = String(minutes).padStart(2,'0').split('');
    const [ secondLeft,secondRight ] = String(seconds).padStart(2,'0').split('');

    const iniciarCiclo = useCallback(() => {
        setIsCounting(true);
    },[setIsCounting]);

    const pararCiclo = useCallback(() => {
        clearTimeout(idTimeOut);
        setIsCounting(false);
        setTime( 25 * 60 );
    },[setIsCounting]);

   useEffect(() => {
        if(isCounting && time > 0 ){
            idTimeOut = setTimeout(() => {
                setTime( time - 1 );
            },1000);
        }else if(isCounting && time === 0){
            setHasFinshed(true);
            setIsCounting(false);
        }
   },[time,isCounting]);


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