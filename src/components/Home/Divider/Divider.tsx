import React from "react";
import styles from "./Divider.module.scss";

interface DividerContent {
  svg: string;
  title: string;
}

interface HomeDividerProps {
  dividerContent: DividerContent;
}

const HomeDivider: React.FC<HomeDividerProps> = ({ dividerContent }) => {
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
