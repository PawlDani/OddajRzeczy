// components/Home/Home.tsx
import React from "react";
import HomeHeader from "./HomeHeader/HomeHeader";
import HomeHero from "./HomeHero/HomeHero";
import HomeThreeColumns from "./HomeThreeColumns/HomeThreeColumns";
import HomeDivider from "./HomeDivider/HomeDivider";
import HomeSteps from "./HomeSteps/HomeSteps";
import HomeButton from "./HomeButton/HomeButton";

const Home: React.FC = () => {
  return (
    <div>
      <HomeHeader />
      <HomeHero />
      <HomeThreeColumns />
      <HomeDivider />
      <HomeSteps />
      <HomeButton />
    </div>
  );
};

export default Home;
