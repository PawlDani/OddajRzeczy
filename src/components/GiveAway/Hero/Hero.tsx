import React from "react";
import styles from "./Hero.module.scss";
import FormHeroImage from "../../../assets/Form-Hero-Image.jpg";
import decoration from "../../../assets/Decoration.svg";

const GiveAwayHero: React.FC = () => {
  return (
    <div id="start" className={`${styles.heroSection} container`}>
      <div className={styles.imageContainer}>
        <img src={FormHeroImage} alt="Hero for Give Away" />
      </div>
      <div className={styles.contentWrapper}>
        <div className={styles.content}>
          <h1>Oddaj rzeczy, których już nie chcesz POTRZEBUJĄCYM</h1>
          <img src={decoration} alt="Decoration" />
          <p>Wystarczą 4 proste kroki:</p>
          <div className={styles.steps}>
            <div className={styles.step}>
              <p className={styles.stepNumber}>1</p>
              <p className={styles.stepText}>Wybierz rzeczy</p>
            </div>
            <div className={styles.step}>
              <p className={styles.stepNumber}>2</p>
              <p className={styles.stepText}>Spakuj je w worki</p>
            </div>
            <div className={styles.step}>
              <p className={styles.stepNumber}>3</p>
              <p className={styles.stepText}>Wybierz fundację</p>
            </div>
            <div className={styles.step}>
              <p className={styles.stepNumber}>4</p>
              <p className={styles.stepText}>Zamów kuriera</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GiveAwayHero;
