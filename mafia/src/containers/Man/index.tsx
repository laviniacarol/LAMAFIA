import firstman from "../../assets/imagens/joni.jpg"
import secondman from "../../assets/imagens/chico.jpg"
import styles from './index.module.scss';

function Man () {
    return (
        <div className={styles.container}>
            
            <img className={styles.firstman} src={firstman} alt="Primeiro Homem" />
            <img className={styles.secondman} src={secondman} alt="Segundo Homem" />
            
            <div className={styles.text}>
                <p>LABELLA<br/>MAFIA</p>
                <h3>HOMEM</h3>
                <p>Estamos lançando nossa <span>Nova</span> linha para eles</p>
                <button>Vem conferir!</button>
            </div>
        </div>
    );
}

export default Man;