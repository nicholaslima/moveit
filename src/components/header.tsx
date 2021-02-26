

import React from 'react';
import styles from '../styles/components/ProgressBar.module.css';

const Header: React.FC = () => {
    return(
        <div className={ styles.content }>
            <span>0 xp</span>
                <div className={ styles.barProgress }>
                    <div className={ styles.barSuccess } style={{ width: "60%"}}>
                        <p className = { styles.level }>400 px</p>
                    </div>
                </div>
            <span>600 xp</span>
        </div>
    )
}

export default Header;