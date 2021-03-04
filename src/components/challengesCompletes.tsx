
import React from 'react';
import styles from '../styles/components/ChallengeCompletes.module.css';
import { useChallengeBox  } from '../contexts/challengeBoxContext';


const ChallengeCompletes: React.FC = () => {

    const { challengesCompleted } = useChallengeBox();
    return(
        <div className={ styles.content  }>
            <p>desafios completos</p>
            <span>{ challengesCompleted }</span>
        </div>
    )
}

export default ChallengeCompletes;