import React from "react";
import styles from "./Steps.module.scss";
import Svg1 from "../../../assets/Icon-1.svg";
import Svg2 from "../../../assets/Icon-2.svg";
import Svg3 from "../../../assets/Icon-3.svg";
import Svg4 from "../../../assets/Icon-4.svg";

interface StepContent {
  svg: string;
  title: string;
  description: string;
}

const HomeSteps: React.FC = () => {
  const stepsContent: StepContent[] = [
    {
      svg: Svg1,
      title: "Wybierz rzeczy",
      description: "ubrania, zabawki, sprzęt i inne",
    },
    {
      svg: Svg2,
      title: "Spakuj je",
      description: "skorzystaj z worków na śmieci",
    },
    {
      svg: Svg3,
      title: "Zdecyduj komu chcesz pomóc",
      description: "wybierz zaufane miejsce",
    },
    {
      svg: Svg4,
      title: "Zamów kuriera",
      description: "kurier przyjedzie w dogodnym terminie",
    },
  ];
  return (
    <div className={styles.stepsContainerWrapper}>
      <div className={`${styles.stepsContainer} container`}>
        {stepsContent.map((content, index) => (
          <div key={index} className={styles.step}>
            <div className={styles.number}>
              <img src={content.svg} alt={`step ${index + 1}`} />
            </div>
            <div className={styles.title}>{content.title}</div>
            <div className={styles.description}>{content.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeSteps;
