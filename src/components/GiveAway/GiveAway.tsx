import React, { useState } from "react";
import Header from "../common/Header/Header";
import GiveAwayHero from "./Hero/Hero";
import MultiPageForm from "./Form/Form";
import DynamicText from "./DynamicSection/DynamicText";
import Contact from "../common/Footer/Contact/Contact";

const OddajRzeczy: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <>
      <Header />
      <GiveAwayHero currentStep={currentStep} />
      <DynamicText currentStep={currentStep} />
      <main>
        <MultiPageForm setCurrentStepInParent={setCurrentStep} />
      </main>
      <Contact />
    </>
  );
};

export default OddajRzeczy;
