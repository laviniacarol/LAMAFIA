
import styles from "./Colab.module.scss";
import gigi1 from "../../assets/imagens/models-photos/gigi1.png";
import gigi2 from "../../assets/imagens/models-photos/gigi2.png";

function Colab () {
    return (
        <>
       <div className={styles.colabContainer}>
    <div className={styles.textContainer}>
      <h1 className={styles.first}>EM COLAB COM A BELLA SPORTS</h1>
      <h2 className={styles.gigi}>
        Gigi <span className={styles.hadid}>Haddid</span>
      </h2>
      <h2 className={styles.fightLike}>
        FIGHT LIKE <span className={styles.aGirl}>A GIRL</span>
      </h2>

      <p className={styles.description}>
        Fique ligado em nossas redes sociais <br />
        para não perder os lançamentos e acompanhe essa jornada. <br />
        Juntos, vamos trazer pra você uma coleção exclusiva <br />
        que une estilo e autenticidade.
      </p>

      <div className={styles.icons}>
        <i className="bx bxl-instagram"></i>
        <i className="bx bxl-facebook-circle"></i>
        <i className="bx bxl-twitter"></i>
        <i className="bx bxl-youtube"></i>
        <i className="bx bxl-tiktok"></i>
      </div>
  </div>

  <div className={styles.girlImage}>
    <img src={gigi2} alt="Gigi Hadid" />
    <img src={gigi1} alt="Gigi Hadid" />
  </div>

</div>
        </>
    );
}

export default Colab;
