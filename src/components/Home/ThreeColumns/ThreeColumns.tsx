import React, { useEffect } from "react";
import styles from "./ThreeColumns.module.scss";

interface ColumnContent {
  number: string;
  title: string;
  description: string;
}

const HomeThreeColumns: React.FC = () => {
  const columnsContent: ColumnContent[] = [
    {
      number: "10",
      title: "ODDANYCH WORKÓW",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.",
    },
    {
      number: "5",
      title: "WSPARTYCH ORGANIZACJI",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.",
    },
    {
      number: "7",
      title: "ZORGANIZOWANY ZBIÓREK",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.animate);
            // Stop observing the element so animation doesn't replay
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(`.${styles.column}`);
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.threeColumnsContainerWrapper}>
      <div className={`${styles.threeColumnsContainer} container`}>
        {columnsContent.map((content, index) => (
          <div key={index} className={styles.column}>
            <div className={styles.number}>{content.number}</div>
            <div className={styles.title}>{content.title}</div>
            <div className={styles.description}>{content.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeThreeColumns;
