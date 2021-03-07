

import React,{ createContext,useContext,useEffect,useState } from 'react';
import { useChallengeBox  } from './challengeBoxContext';

interface TimerContextType{
    minutes: number;
    seconds: number;
    iniciarCiclo(): void;
    hasFinished: Boolean;
    isCounting: Boolean;
    pararCiclo(): void;
}

const TimerContext = createContext<TimerContextType>({} as TimerContextType);

let idTimeOut : NodeJS.Timeout;

const TimerProvider:React.FC = ({ children }) => {

    const [ isCounting,setIsCounting ] = useState(false);
    const [ time ,setTime ] = useState(25 * 60);
    const [ hasFinished,setHasFinshed ] = useState(false);
 
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;


    const { startNewChallenge  } = useChallengeBox();

    function iniciarCiclo(){
        setIsCounting(true);
    }

    function pararCiclo() {
        clearTimeout(idTimeOut);
        setIsCounting(false);
        setTime( 25 * 60 );
        setHasFinshed(false);
    }

   useEffect(() => {
        if(isCounting && time > 0 ){
            idTimeOut = setTimeout(() => {
                setTime( time - 1 );
            },1000);
        }else if(isCounting && time === 0){
            setHasFinshed(true);
            setIsCounting(false);
            startNewChallenge();
        }
   },[time,isCounting]);

    return(
        <TimerContext.Provider value={{
            iniciarCiclo,
            minutes,
            seconds,
            hasFinished,
            isCounting,
            pararCiclo
        }}>
            { children }
        </TimerContext.Provider>
    )
}


function useTimerContext(){
    const context = useContext(TimerContext);

    if(!context){
        throw new Error('this function must be used within a provider');
    }


    return context;
}

export { TimerProvider,useTimerContext };