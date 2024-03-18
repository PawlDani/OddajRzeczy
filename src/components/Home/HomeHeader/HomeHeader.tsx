// components/Header/Header.tsx
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import styles from "./HomeHeader.module.scss";

const Header: React.FC = () => {
  return (
    <header className={`${styles.header} container`}>
      <div className={styles.topMenu}>
        <RouterLink to="/login" className={styles.link}>
          Zaloguj
        </RouterLink>
        <RouterLink to="/register" className={styles.link}>
          Załóż konto
        </RouterLink>
      </div>
      <nav className={styles.bottomMenu}>
        <ScrollLink
          to="start"
          smooth={true}
          duration={500}
          className={styles.link}
        >
          Start
        </ScrollLink>
        <ScrollLink
          to="about"
          smooth={true}
          duration={500}
          className={styles.link}
        >
          O co chodzi?
        </ScrollLink>
        <ScrollLink
          to="about-us"
          smooth={true}
          duration={500}
          className={styles.link}
        >
          O nas
        </ScrollLink>
        <ScrollLink
          to="organizations"
          smooth={true}
          duration={500}
          className={styles.link}
        >
          Fundacja i organizacje
        </ScrollLink>
        <ScrollLink
          to="contact"
          smooth={true}
          duration={500}
          className={styles.link}
        >
          Kontakt
        </ScrollLink>
      </nav>
    </header>
  );
};

export default Header;
