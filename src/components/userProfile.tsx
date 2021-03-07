
import React from 'react';
import styles from '../styles/components/userProfile.module.css';
import { useChallengeBox } from '../contexts/challengeBoxContext';


const UserProfile: React.FC = () => {

    const { level  } = useChallengeBox();
    return(
        <div className={ styles.content }>
            <img src="https://avatars.githubusercontent.com/u/25212253?v=4"
                className={ styles.avatar } 
                alt="avatar user"
            />
            <div className={ styles.details } >
                <p className={ styles.name }>nicholas caetano</p>
                <div>
                    <img className={ styles.icon } src="icons/level.svg" alt="icone"/>
                    <p className={ styles.level }>level { level }</p>
                </div>
            </div>
           

        </div>
    )
}

export default UserProfile;