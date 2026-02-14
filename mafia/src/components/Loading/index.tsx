import styles from './Loading.module.scss';

const Loading = () => {
  return (
    <div className={styles.container}>
      <div className={styles.spinner}></div>
      <p className={styles.text}>Carregando...</p>
    </div>
  );
};

export default Loading;
