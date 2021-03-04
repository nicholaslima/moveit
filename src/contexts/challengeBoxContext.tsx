

import React, { useContext,
    createContext,
    useCallback,
    useState,
    ReactNode } from 'react';




interface ChallengeBoxContextType{
    startNewChallenge(): void;
    levelUp(): void;
    level: number;
    currentChallenge: ChallengeType;
    currentExperiences: number;
    challengesCompleted: number;
    resetChallenge():void;
    experienceToNextLevel: number;
    experiencePercentUser: number;
}


interface ChallengeBoxProviderProps{
    children: ReactNode;
}

interface ChallengeType {
    type: string;
    description: string;
    amount: number;
}

import dados from '../../challenges.json';

const ChallengeBoxContext = createContext<ChallengeBoxContextType>({} as ChallengeBoxContextType);

const ChallengeBoxProvider: React.FC = ({ children }:ChallengeBoxProviderProps) => {
    const [ level,setLevel ] = useState(1);
    const [ currentChallenge,setCurrentChallenge ] = useState(null);
    const [ currentExperiences,setCurrentExperiences ] = useState(0);
    const [ challengesCompleted,setChallengesCompleted ] = useState(0);
    const experienceToNextLevel = Math.pow((level + 1) * 4,2);
    const experiencePercentUser = Math.round(currentExperiences * 100) / experienceToNextLevel;

    const levelUp = useCallback(() => {
        setLevel(level + 1);
    },[]);

    const startNewChallenge = useCallback( () => {
        const idChallenge =  Math.floor(Math.random() * dados.length);
        const challenge = dados[idChallenge];
        setCurrentChallenge(challenge);
    },[]);


    const resetChallenge = useCallback(() => {
        setCurrentChallenge(null);
    },[])

    return(
        <ChallengeBoxContext.Provider value={{ 
            startNewChallenge,
            levelUp,
            challengesCompleted,
            currentExperiences,
            currentChallenge,
            level,
            resetChallenge,
            experienceToNextLevel,
            experiencePercentUser
        }}>
            { children }
        </ChallengeBoxContext.Provider>
    );
};

function useChallengeBox(){
    const context = useContext(ChallengeBoxContext);

    if(!context){
        throw new Error('this function must be used within a provider')
    }

    return context;
}


export { ChallengeBoxProvider,ChallengeBoxContext,useChallengeBox };