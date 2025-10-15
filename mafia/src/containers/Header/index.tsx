import styles from "./Header.module.scss";
import logo from "../../assets/imagens/logobella.jpg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className={styles.container}>
      <img className={styles.logo} src={logo} alt="Logo Bella" />

      <nav className={styles.nav}>
        <a href="#">NOVIDADES</a>
        <a href="#">SALE</a>
        <a href="#">TÊNIS</a>
        <a href="#">COLLAB</a>
      </nav>

      <div className={styles.icon}>
        <a href="#">
          <i className="bx bx-search-alt-2"></i>
        </a>
        <Link to="/User">
          <i className="bx bx-user"></i>
        </Link>
        <a href="#">
          <i className="bx bx-shopping-bag"></i>
        </a>
        <div id="menu-icon" className="bx bx-menu-alt-right"></div>
      </div>
    </div>
  );
}

export default Header;
