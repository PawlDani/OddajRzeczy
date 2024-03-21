import React from "react";
import { Link as RouterLink } from "react-router-dom";
import styles from "./HomeButton.module.scss";

const HomeButton: React.FC = () => {
  return (
    <div className={styles.links}>
      <RouterLink to="/logowanie" className={styles.link}>
        ODDAJ <br /> RZECZY
      </RouterLink>
    </div>
  );
};

export default HomeButton;
