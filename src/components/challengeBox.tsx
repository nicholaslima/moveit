

import React from 'react';
import styles from '../styles/components/challengeBox.module.css';
import {  useChallengeBox } from '../contexts/challengeBoxContext';
import {  useTimerContext } from '../contexts/timerContext';

const challengeBox: React.FC = () => {
    const { currentChallenge,resetChallenge,completeChallenge } = useChallengeBox();
    const { pararCiclo } = useTimerContext();

    function finalChallenge(){
        completeChallenge();  
        pararCiclo();
    };

    function FailChallenge(){
        resetChallenge();
        pararCiclo();
    };


    return(
         <div className={ styles.content }>
            { currentChallenge ? (
                <>
                    <p className={ styles.scores }>Ganhe { currentChallenge.amount }xp</p>
                    
                    <img src={`icons/${ currentChallenge.type }.svg`} className={ styles.bodyImg } alt="icon"/>

                    <p className={ styles.TitleActive }>Exercite-se</p>
                    <p className={ styles.descriptionActive }>{ currentChallenge.description  }</p>

                    <div className={ styles.btns }>
                        <button 
                            className={ styles.btnRed }
                            onClick={ FailChallenge }
                        >Falhei
                        </button>

                        <button 
                            className={ styles.btnGreen }
                            onClick={ finalChallenge  }
                        >Completei</button>
                    </div>
                </>
            ):(
                <>
                    <p className={ styles.title }>Inicie um ciclo para receber desafios</p>
                    <img src="icons/level-up.svg" className={ styles.levelImg } alt="icone"/>
                    <p className={ styles.description }>Avance de level completando desafios</p>
                </>
            )}
          
        </div>
    )
}

export default challengeBox;