

import React from 'react';
import styles from '../styles/components/challengeBox.module.css';
import {  useChallengeBox } from '../contexts/challengeBoxContext';

const challengeBox: React.FC = () => {
    const { currentChallenge,resetChallenge } = useChallengeBox();


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
                        onClick={ resetChallenge }
                        >Falhei
                        </button>
                        <button className={ styles.btnGreen }>Completei</button>
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