

import React from 'react';
import styles from '../styles/components/ProgressBar.module.css';
import { useChallengeBox  } from '../contexts/challengeBoxContext';

const Header: React.FC = () => {

    const {  currentExperiences,experienceToNextLevel,experiencePercentUser } = useChallengeBox();
    return(
        <div className={ styles.content }>
            <span>0 xp</span>
                <div className={ styles.barProgress }>
                    <div className={ styles.barSuccess } style={{ width: `${experiencePercentUser}%`}}>
                        <p className = { styles.level }>{ currentExperiences }</p>
                    </div>
                </div>
            <span>{experienceToNextLevel} xp</span>
        </div>
    )
}

export default Header;