

import Progressbar from '../components/header';
import UserProfile from '../components/userProfile';
import Challenges from '../components/challengesCompletes';
import Timer from '../components/timer';
import Iniciar from '../components/iniciar';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
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
  )
}
