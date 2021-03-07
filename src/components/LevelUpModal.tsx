
import styles from '../styles/components/ModalLevelUp.module.css';
import { useChallengeBox  } from '../contexts/challengeBoxContext';

function LevelUpModal(){

    const { closeLevelModal,level } = useChallengeBox();
    return(
        <div className={ styles.overlay }>
            <div className={ styles.container }>
                <div className={ styles.fundo }>
                    <h1 className="level">{ level }</h1>
                </div>
               
                <section>
                    <h3 className={ styles.title }>Parabéns</h3>
                    <p className={ styles.description }>Você alcançou um novo level</p>
                    <p className={ styles.btnTwitter }>Compartilhar no twitter</p>
                </section>

                <button className={ styles.btnClose } onClick={ closeLevelModal }>
                    <img src="/icons/close.svg"  alt="icon close"/>
                </button>
            </div>
            
        </div>
    )
}

export default  LevelUpModal;