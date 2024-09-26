import { NavLink, useLocation } from "react-router-dom";
import BoxArrowInRight from "assets/icons/boxArrowInRight.svg";
import styles from "./Header.module.scss";

const Header = () => {
  const location = useLocation();


  
  return (
    <div className={styles.header}>
      <h3 className={styles.header__logo}>Check</h3>
      <nav className={styles.header__nav}>
        <NavLink
          className={`${styles.header__nav__link} ${
            location.pathname === "/" ? styles.header__nav__linkActive : ""
          }`}
          to="/"
        >
          Главный
        </NavLink>
        <NavLink
          className={`${styles.header__nav__link} ${
            location.pathname === "/about" ? styles.header__nav__linkActive : ""
          }`}
          to="/about"
        >
          О нас
        </NavLink>
        <NavLink
          className={`${styles.header__nav__link} ${
            location.pathname === "/useful"
              ? styles.header__nav__linkActive
              : ""
          }`}
          to="/useful"
        >
          Полезно
        </NavLink>
        <NavLink
          className={`${styles.header__nav__link} ${
            location.pathname === "/test" ? styles.header__nav__linkActive : ""
          }`}
          to="/test"
        >
          Тесты
        </NavLink>
        <NavLink
          to="/registration"
        >
          <img
            src={BoxArrowInRight}
            alt="registration"
          />
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
