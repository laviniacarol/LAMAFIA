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
    </div>
  );
}

export default Hero;
