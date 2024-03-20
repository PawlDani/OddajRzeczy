import React from "react";
import HomeHeader from "./Header/Header";
import HomeHero from "./HomeHero/HomeHero";
import HomeThreeColumns from "./ThreeColumns/ThreeColumns";
import HomeStepsDivider from "./StepsDivider/StepsDivider";
import HomeSteps from "./Steps/Steps";
import HomeButton from "./HomeButton/HomeButton";
import HomeAbout from "./About/About";
import HomeHelpSection from "./Help/Help";
import HomeContact from "./Contact/Contact";

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
      <HomeContact />
    </div>
  );
};

export default Home;
