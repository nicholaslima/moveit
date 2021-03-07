

import React, { useContext,
    createContext,
    useCallback,
    useState,
    ReactNode,
    useEffect } from 'react';

import Cookies from 'js-cookie';
import LevelUpModal from '../components/LevelUpModal';

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
    completeChallenge():void;
    closeLevelModal(): void;
}


interface ChallengeBoxProviderProps{
    children: ReactNode;
    level: number,
    currentExperiences: number,
    challengesCompleted: number
}

interface ChallengeType {
    type: string;
    description: string;
    amount: number;
}

import dados from '../../challenges.json';

const ChallengeBoxContext = createContext<ChallengeBoxContextType>({} as ChallengeBoxContextType);

function ChallengeBoxProvider({ 
    children, 
    ...rest
}:ChallengeBoxProviderProps){
    
    const [ level,setLevel ] = useState(rest.level ?? 1);
    const [ currentChallenge,setCurrentChallenge ] = useState(null);
    const [ currentExperiences,setCurrentExperiences ] = useState(rest.currentExperiences ?? 0);
    const [ challengesCompleted,setChallengesCompleted ] = useState(rest.challengesCompleted ?? 0);
    const [ isLevelUpModalOpen, setIsLevelUpModalOpen ] = useState(false);
    const experienceToNextLevel = Math.pow((level + 1) * 4,2);
    const experiencePercentUser = Math.round(currentExperiences * 100) / experienceToNextLevel;


    useEffect(() => {
       Notification.requestPermission();     
    },[]);

    useEffect(() => {
        Cookies.set('level', String(level));
        Cookies.set('currentExperiences', String(currentExperiences));
        Cookies.set('challengesCompleted', String(challengesCompleted));
    },[challengesCompleted,level,currentExperiences]);

    const levelUp = useCallback(() => {
        setLevel(level + 1);
        setIsLevelUpModalOpen(true);
    },[]);

    const startNewChallenge = useCallback( () => {
        const idChallenge =  Math.floor(Math.random() * dados.length);
        const challenge = dados[idChallenge];
        setCurrentChallenge(challenge);

        new Audio('/notification.mp3').play();

        if(Notification.permission === 'granted'){
            new Notification('novo desafio',{
                body: `valendo ${challenge.amount } xp`
            });
        }
    },[]);

    function closeLevelModal(){
        setIsLevelUpModalOpen(false);
    }


    const resetChallenge = useCallback(() => {
        setCurrentChallenge(null);
    },[]);

    function completeChallenge(){

        if(!currentChallenge){
            return;
        }

        let finalExperience = currentExperiences + currentChallenge.amount;
       
        if(finalExperience > experienceToNextLevel){
            finalExperience = finalExperience - experienceToNextLevel;
            levelUp();
        }

        setCurrentExperiences(finalExperience);
        setCurrentChallenge(null);
        setChallengesCompleted(challengesCompleted + 1);

    }


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
            experiencePercentUser,
            completeChallenge,
            closeLevelModal
        }}>
            { children }

            { isLevelUpModalOpen  && <LevelUpModal /> }
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


