

import { GetServerSideProps } from 'next';
import Progressbar from '../components/header';
import UserProfile from '../components/userProfile';
import Challenges from '../components/challengesCompletes';
import Timer from '../components/timer';
import Iniciar from '../components/challengeBox';
import styles from '../styles/Home.module.css';
import { TimerProvider } from '../contexts/timerContext';
import { ChallengeBoxProvider  } from '../contexts/challengeBoxContext';


interface HomeType{
  level: number,
  currentExperiences: number,
  challengesCompleted: number
}

export default function Home({ level,currentExperiences,challengesCompleted }: HomeType){

  return (
    <ChallengeBoxProvider 
      level = { level } 
      currentExperiences = {  currentExperiences }
      challengesCompleted = { challengesCompleted }>
        <div className={ styles.container }>
          <Progressbar />

          <main>
            <TimerProvider>
              <section>
                <UserProfile />
                <Challenges />
                <Timer />
              </section>
            
              <section>
                <Iniciar />
              </section>
            </TimerProvider>
          </main>
        </div>
    </ChallengeBoxProvider>
  )
}


export const getServerSideProps: GetServerSideProps = async (ctx) => {

  const { level,currentExperiences,challengesCompleted } = ctx.req.cookies;
  return {
      props: {
        level: Number(level),
        currentExperiences: Number(currentExperiences),
        challengesCompleted: Number(challengesCompleted),
      }
  }
}
