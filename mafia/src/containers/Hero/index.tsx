import styles from "./Hero.module.scss";
import BackgroundVideo from "../../assets/video/background.mp4";

function Hero() {
  return (
    <div className={styles.container}>
      <video
        className={styles.videoBackground}
        src={BackgroundVideo}
        autoPlay
        loop
        muted
      />

      <div className={styles.content}>
        <h1>
          FIGHT
          <br />
          LIKE A GIRL
        </h1>
        <h2>NEW COLLECTION</h2>
        <button>COMPRAR AGORA</button>
      </div>
    </div>
  );
}

export default Hero;
