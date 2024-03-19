// components/Home/HomeThreeColumns/HomeThreeColumns.tsx
import React from "react";
import styles from "./HomeThreeColumns.module.scss";

interface ColumnContent {
  number: string;
  title: string;
  description: string;
}

const HomeThreeColumns: React.FC = () => {
  // Content for each column can be static or fetched from some data source
  const columnsContent: ColumnContent[] = [
    {
      number: "10",
      title: "ODDANYCH WORKÓW",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing. Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.",
    },
    {
      number: "5",
      title: "WSPARTYCH ORGANIZACJI",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing. Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.",
    },
    {
      number: "7",
      title: "ZORGANIZOWANY ZBIÓREK",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing. Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.",
    },
  ];

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
