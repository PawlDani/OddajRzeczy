import React from "react";
import styles from "./HomeDivider.module.scss";
import decoration from "../../../assets/Decoration.svg";

interface DividerContent {
  svg: string;
  title: string;
}

const HomeDivider: React.FC = () => {
  const dividerContent: DividerContent = {
    svg: decoration,
    title: "Wystarczą 4 proste kroki",
  };

  return (
    <div className={styles.dividerContainerWrapper}>
      <div className={`${styles.dividerContainer} container`}>
        <div className={styles.dividerContent}>
          <h1 className={styles.title}>{dividerContent.title}</h1>
          <img src={dividerContent.svg} alt="decoration" />
        </div>
      </div>
    </div>
  );
};

export default HomeDivider;
