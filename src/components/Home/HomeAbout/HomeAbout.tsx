// components/Home/HomeAboutSection/HomeAboutSection.tsx
import React from "react";
import styles from "./HomeAbout.module.scss";
import decoration from "../../../assets/Decoration.svg"; // Assuming this is the correct path to your SVG file
import signature from "../../../assets/Signature.svg"; // Assuming this is the correct path to your SVG file
import people from "../../../assets/People.jpg"; // Assuming this is the correct path to your image file

const HomeAboutSection: React.FC = () => {
  return (
    <div className={styles.aboutSection}>
      <div className={`${styles.aboutContent} container`}>
        <div className={styles.leftColumn}>
          <h2 className={styles.title}>O nas</h2>
          <img
            src={decoration}
            alt="Decoration"
            className={styles.decoration}
          />
          <p className={styles.description}>
            Nori grape silver beet broccoli kombu beet greens fava bean potato
            quandong celery. Bunya nuts black-eyed pea prairie turnip leek
            lentil turnip greens parsnip.
          </p>
          <img src={signature} alt="Signature" className={styles.signature} />
        </div>
        <div className={styles.rightColumn}>
          <div className={styles.imageWrapper}>
            <img src={people} alt="People" className={styles.image} />
          </div>
        </div>
      </div>
    </div>
  );
};

// log window inner width
console.log(window.innerWidth);

export default HomeAboutSection;
