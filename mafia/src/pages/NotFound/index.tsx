import { Link } from 'react-router-dom';
import styles from './NotFound.module.scss';

const NotFound = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.errorCode}>404</h1>
        <h2 className={styles.title}>Página não encontrada</h2>
        <p className={styles.description}>
          Ops! A página que você está procurando não existe ou foi movida.
        </p>
        <Link to="/" className={styles.homeButton}>
          Voltar para a página inicial
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
