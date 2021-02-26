
import React from 'react';
import styles from '../styles/components/userProfile.module.css';

const UserProfile: React.FC = () => {
    return(
        <div className={ styles.content }>
            <img src="https://avatars.githubusercontent.com/u/25212253?v=4"
                className={ styles.avatar } 
                alt="avatar user"
            />
            <div className={ styles.details } >
                <p className={ styles.name }>nicholas caetano</p>
                <div>
                    <img className={ styles.icon } src="icons/level-up.svg" alt="icone"/>
                    <p className={ styles.level }>level 1</p>
                </div>
            </div>
           

        </div>
    )
}

export default UserProfile;