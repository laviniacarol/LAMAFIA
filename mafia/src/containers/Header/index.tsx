import { useState } from "react";
import styles from "./Header.module.scss";
import logo from "../../assets/imagens/logobella.jpg";
import { useNavigate } from "react-router-dom";
import {
  FaChevronDown,
  FaShoppingCart,
  FaBars,
} from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { useCart } from "../../contexts/CartContext";
import { useAuth } from "../../contexts/AuthContext";
import Cart from "../Cart";

function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [cartOpen, setCartOpen] = useState(false);

  const { cart } = useCart();
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const toggleMenu = () => setOpenMenu(!openMenu);

  const toggleDropdown = (menu: string) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  function handleUserClick() {
    navigate("/user"); // ✅ SEM /login
  }

  function handleLogout() {
    signOut();
    navigate("/");
  }

  return (
    <>
      <header className={styles.container}>
        <img
          className={styles.logo}
          src={logo}
          alt="Logo Bella"
          onClick={() => navigate("/")}
        />

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
          {/* USER */}
          <button
            className={styles.userIcon}
            onClick={handleUserClick}
            aria-label="Usuário"
            type="button"
          >
            <FiUser size={20} />
          </button>

          {/* CART */}
          <div
            className={styles.cartBox}
            onClick={() => setCartOpen(true)}
          >
            <FaShoppingCart size={20} />
            {cart.length > 0 && (
              <span className={styles.cartCount}>{cart.length}</span>
            )}
          </div>

          {/* MOBILE */}
          <FaBars
            className={styles.menuIcon}
            onClick={toggleMenu}
            size={22}
          />
        </div>
      </header>

      {openMenu && (
        <div
          className={styles.overlay}
          onClick={toggleMenu}
        />
      )}

      <div
        className={`${styles.navMobile} ${
          openMenu ? styles.open : ""
        }`}
      >
        <div className={styles.menuItem}>
          <button
            onClick={() => {
              handleUserClick();
              toggleMenu();
            }}
          >
            {user ? "Minha conta" : "Login / Registro"}
          </button>
          <hr />
        </div>

        {user && (
          <div className={styles.menuItem}>
            <button
              onClick={() => {
                handleLogout();
                toggleMenu();
              }}
            >
              Sair
            </button>
            <hr />
          </div>
        )}

        <div className={styles.menuItem}>
          <a onClick={toggleMenu}>Rastreio</a>
          <hr />
        </div>

        <div className={styles.menuItem}>
          <a onClick={toggleMenu}>Suporte</a>
          <hr />
        </div>
      </div>

      <Cart isOpen={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
}

export default Header;
