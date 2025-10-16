import firstman from "../../assets/imagens/joni.jpg"
import secondman from "../../assets/imagens/chico.jpg"
import styles from './Man.module.scss';

function Man () {
    return (
        <div className={styles.container}>
            
            <img className={styles.firstman} src={firstman} alt="Primeiro Homem" />
            <img className={styles.secondman} src={secondman} alt="Segundo Homem" />
            
            <div className={styles.text}>
                <p className={styles.p}>LABELLA<br/>MAFIA</p><hr className={styles.hr}/>
                <h3 className={styles.h3}>HOMEM</h3>
                <p className={styles.p2}>estamos lançando nossa <span className={styles.span}>NOVA</span> <br/> linha para eles.</p>
                <button className={styles.button}>vem conferir!</button>
            </div>
        </div>
    );
}

export default Man;