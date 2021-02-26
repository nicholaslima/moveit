
import React from 'react';
import styles from '../styles/components/ChallengeCompletes.module.css';

const ChallengeCompletes: React.FC = () => {
    return(
        <div className={ styles.content  }>
            <p>desafios completos</p>
            <span>00</span>
        </div>
    )
}

export default ChallengeCompletes;