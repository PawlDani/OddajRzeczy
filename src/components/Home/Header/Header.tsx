import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import styles from "./Header.module.scss";
import { useStoreState } from "../../../hooks";

const Header: React.FC = () => {
  const user = useStoreState((state) => state.auth.user);

  return (
    <header className={`${styles.header} container`}>
      <div className={styles.topMenu}>
        {user ? (
          <>
            <span className={styles.userLink}>Cześć, {user.email}!</span>{" "}
            {/* Display user email */}
            <RouterLink to="/oddaj-rzeczy" className={styles.specialLink}>
              Oddaj rzeczy
            </RouterLink>
            <RouterLink to="/wyloguj" className={styles.link}>
              Wyloguj
            </RouterLink>
          </>
        ) : (
          <>
            <RouterLink to="/logowanie" className={styles.link}>
              Zaloguj
            </RouterLink>
            <RouterLink to="/rejestracja" className={styles.link}>
              Załóż konto
            </RouterLink>
          </>
        )}
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
          offset={150}
        >
          Kontakt
        </ScrollLink>
      </nav>
    </header>
  );
};

export default Header;
