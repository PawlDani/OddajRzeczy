// components/Home/Home.tsx
import React from "react";
import HomeHeader from "./HomeHeader/HomeHeader";
import HomeHero from "./HomeHero/HomeHero";
import HomeThreeColumns from "./HomeThreeColumns/HomeThreeColumns";
import HomeStepsDivider from "./HomeStepsDivider/HomeStepsDivider";
import HomeSteps from "./HomeSteps/HomeSteps";
import HomeButton from "./HomeButton/HomeButton";
import HomeAbout from "./HomeAbout/HomeAbout";
import HomeHelpSection from "./HomeHelp/HomeHelp";

const Home: React.FC = () => {
  return (
    <div>
      <HomeHeader />
      <HomeHero />
      <HomeThreeColumns />
      <HomeStepsDivider />
      <HomeSteps />
      <HomeButton />
      <HomeAbout />
      <HomeHelpSection />
    </div>
  );
};

export default Home;
