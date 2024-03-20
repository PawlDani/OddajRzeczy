import React from "react";
import styles from "./HomeHero.module.scss";
import heroImage from "../../../assets/Home-Hero-Image.jpg";
import decoration from "../../../assets/Decoration.svg";
import { Link as RouterLink } from "react-router-dom";

const HomeHero: React.FC = () => {
  return (
    <div id="start" className={`${styles.heroSection} container`}>
      <div className={styles.imageContainer}>
        <img src={heroImage} alt="hero" />
      </div>
      <div className={styles.contentWrapper}>
        <div className={styles.content}>
          <h1>Zacznij pomagać!</h1>
          <p>Oddaj niechciane rzeczy w zaufane ręce</p>
          <img src={decoration} alt="decoration" />
          <div className={styles.links}>
            <RouterLink to="/login" className={styles.link}>
              ODDAJ <br></br>RZECZY
            </RouterLink>
            <RouterLink to="/login" className={styles.link}>
              ZORGANIZUJ ZBIÓRKĘ
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
