import { useState } from "react";
import styles from "./Header.module.scss";
import logo from "../../assets/imagens/logobella.jpg";
import { Link } from "react-router-dom";
import { FaChevronDown, FaShoppingCart, FaBars } from "react-icons/fa";

function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [cartCount] = useState(0); 

  const toggleMenu = () => setOpenMenu(!openMenu);

  const toggleDropdown = (menu: string) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  return (
    <>
      <header className={styles.container}>
        <img className={styles.logo} src={logo} alt="Logo Bella" />

        <nav className={styles.nav}>
          <div
            className={styles.navItem}
            onClick={() => toggleDropdown("suporte")}
          >
            Suporte <FaChevronDown size={10} />
            {activeDropdown === "suporte" && (
              <div className={styles.dropdown}>
                <a>Pagamentos</a>
                <a>Atendimento</a>
                <a>Trocas e Devoluções</a>
                <a>Sobre o envio</a>
              </div>
            )}
          </div>

          <div
            className={styles.navItem}
            onClick={() => toggleDropdown("sale")}
          >
            Sale <FaChevronDown size={10} />
            {activeDropdown === "sale" && (
              <div className={styles.dropdown}>
                <a>Feminino</a>
                <a>Masculino</a>
                <a>Tudo</a>
              </div>
            )}
          </div>

          <div
            className={styles.navItem}
            onClick={() => toggleDropdown("feminino")}
          >
            Feminino <FaChevronDown size={10} />
            {activeDropdown === "feminino" && (
              <div className={styles.dropdown}>
                <a>Vestidos</a>
                <a>Tênis</a>
                <a>Sandálias / Saltos</a>
                <a>Calças</a>
                <a>Camisetas</a>
                <a>Acessórios</a>
              </div>
            )}
          </div>

          <div
            className={styles.navItem}
            onClick={() => toggleDropdown("masculino")}
          >
            Masculino <FaChevronDown size={10} />
            {activeDropdown === "masculino" && (
              <div className={styles.dropdown}>
                <a>Camisetas</a>
                <a>Tênis</a>
                <a>Camisas</a>
                <a>Bonés</a>
                <a>Calças</a>
              </div>
            )}
          </div>
        </nav>

        <div className={styles.iconGroup}>
          <Link to="/User">
            <i className="bx bx-user"></i>
          </Link>

          <div className={styles.cartBox}>
            <FaShoppingCart size={20} />
            {cartCount > 0 && (
              <span className={styles.cartCount}>{cartCount}</span>
            )}
          </div>

          <FaBars
            className={styles.menuIcon}
            onClick={toggleMenu}
            size={22}
          />
        </div>
      </header>

      {openMenu && <div className={styles.overlay} onClick={toggleMenu}></div>}

      <div
        className={`${styles.navMobile} ${
          openMenu ? styles.open : ""
        }`}
      >
        <div className={styles.menuItem}>
          <Link to="/User" onClick={toggleMenu}>
            Login / Registro
          </Link>
          <hr />
        </div>

        <div className={styles.menuItem}>
          <a onClick={toggleMenu}>Rastreio</a>
          <hr />
        </div>

        <div className={styles.menuItem}>
          <a onClick={toggleMenu}>Suporte</a>
          <hr />
        </div>

        <div className={styles.menuItem}>
          <a onClick={toggleMenu}>Enviados</a>
          <hr />
        </div>

        <div className={styles.menuItem}>
          <a onClick={toggleMenu}>Ajuda</a>
          <hr />
        </div>
      </div>
    </>
  );
}

export default Header;
