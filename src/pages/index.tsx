

import Progressbar from '../components/header';
import UserProfile from '../components/userProfile';
import Challenges from '../components/challengesCompletes';
import Timer from '../components/timer';
import Iniciar from '../components/challengeBox';
import styles from '../styles/Home.module.css';
import Provider from '../contexts';

export default function Home() {
  return (
    <Provider>
    <div className={ styles.container }>
      <Progressbar />

      <main>
        <section>
          <UserProfile />
          <Challenges />
          <Timer />
        </section>
        <section>
          <Iniciar />
        </section>
      </main>
    </div>
    </Provider>
  )
}
