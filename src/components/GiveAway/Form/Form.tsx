import React, { useState } from "react";
import StepOne from "../StepOne/StepOne";
import StepTwo from "../StepTwo/StepTwo";
import StepThree from "../StepThree/StepThree";

const MultiPageForm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => setCurrentStep(currentStep + 1);
  const prevStep = () => setCurrentStep(currentStep - 1);

  switch (currentStep) {
    case 1:
      return <StepOne nextStep={nextStep} />;
    case 2:
      return <StepTwo nextStep={nextStep} prevStep={prevStep} />;
    case 3:
      return <StepThree nextStep={nextStep} prevStep={prevStep} />;
    default:
      return null; // This should never happen
  }
};

export default MultiPageForm;
