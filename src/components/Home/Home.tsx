import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import HomeHeader from "../common/Header/Header";
import HomeHero from "./HomeHero/HomeHero";
import HomeThreeColumns from "./ThreeColumns/ThreeColumns";
import HomeStepsDivider from "./StepsDivider/StepsDivider";
import HomeSteps from "./Steps/Steps";
import HomeButton from "./HomeButton/HomeButton";
import HomeAbout from "./About/About";
import HomeHelpSection from "./Help/Help";
import HomeContact from "../common/Footer/Contact/Contact";

const Home: React.FC = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        // Remove the '#' from the hash to match the id of the element.
        const id = hash.replace("#", "");
        // Attempt to find the element by its ID.
        const element = document.getElementById(id);
        if (element) {
          // If the element is found, scroll to it smoothly.
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [hash]); // Re-run this effect if the hash changes.

  return (
    <div>
      <HomeHeader />
      <div id="start">
        <HomeHero />
      </div>
      <HomeThreeColumns />
      <div id="about">
        <HomeStepsDivider />
        <HomeSteps />
      </div>
      <HomeButton />
      <div id="about-us">
        <HomeAbout />
      </div>
      <div id="organizations">
        <HomeHelpSection />
      </div>
      <div id="contact">
        <HomeContact />
      </div>
    </div>
  );
};

export default Home;
