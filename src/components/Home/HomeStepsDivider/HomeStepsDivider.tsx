// components/Home/HomeStepsDivider/HomeStepsDivider.tsx
import React from "react";
import HomeDivider from "../HomeDivider/HomeDivider";
import decoration from "../../../assets/Decoration.svg";

const HomeStepsDivider: React.FC = () => {
  const dividerContent = {
    svg: decoration,
    title: "Wystarczą 4 proste kroki",
  };

  return <HomeDivider dividerContent={dividerContent} />;
};

export default HomeStepsDivider;
