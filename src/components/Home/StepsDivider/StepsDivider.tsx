import React from "react";
import HomeDivider from "../../common/Divider/Divider";
import decoration from "../../../assets/Decoration.svg";

const HomeStepsDivider: React.FC = () => {
  const dividerContent = {
    svg: decoration,
    title: "Wystarczą 4 proste kroki",
  };

  return (
    <div id="about">
      <HomeDivider dividerContent={dividerContent} />
    </div>
  );
};

export default HomeStepsDivider;
