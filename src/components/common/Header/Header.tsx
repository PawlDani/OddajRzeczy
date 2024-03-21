import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import styles from "./Header.module.scss";
import { useStoreState } from "../../../hooks/hooks";
import { useLocation } from "react-router-dom";

const Header: React.FC = () => {
  const user = useStoreState((state) => state.auth.user);
  const { pathname } = useLocation();
  const isHomePage = pathname === "/";
  const generateLinkPath = (path: string) => (isHomePage ? path : `/#${path}`);

  return (
    <header className={`${styles.header} container`}>
      <div className={styles.topMenu}>
        {user ? (
          <>
            <span className={styles.userLink}>Cześć, {user.email}!</span>{" "}
           
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
            <RouterLink to="/rejestracja" className={styles.signupLink}>
              Załóż konto
            </RouterLink>
          </>
        )}
      </div>

      <nav className={styles.bottomMenu}>
        
        {isHomePage ? (
          <>
            
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
              offset={50}
              className={styles.link}
            >
              Kontakt
            </ScrollLink>
          </>
        ) : (
          <>
           
            <RouterLink to={generateLinkPath("")} className={styles.link}>
              Start
            </RouterLink>
            <RouterLink to={generateLinkPath("about")} className={styles.link}>
              O co chodzi?
            </RouterLink>
            <RouterLink
              to={generateLinkPath("about-us")}
              className={styles.link}
            >
              O nas
            </RouterLink>
            <RouterLink
              to={generateLinkPath("organizations")}
              className={styles.link}
            >
              Fundacja i organizacje
            </RouterLink>
            <RouterLink
              to={generateLinkPath("contact")}
              className={styles.link}
            >
              Kontakt
            </RouterLink>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
