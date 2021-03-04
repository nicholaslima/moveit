

import React from 'react';
import { ChallengeBoxProvider  } from './challengeBoxContext';

const Index:React.FC = ({ children }) => {
    return(
        <>
            <ChallengeBoxProvider>
                { children }
            </ChallengeBoxProvider>
        </>
    )
}

export default Index;