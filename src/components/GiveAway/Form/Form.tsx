import React, { useEffect, useState } from "react";
import { useStoreActions } from "../../../hooks/hooks";
import styles from "./Form.module.scss";
import StepOne from "../StepOne/StepOne";
import StepTwo from "../StepTwo/StepTwo";
import StepThree from "../StepThree/StepThree";
import StepFour from "../StepFour/StepFour";
import SummaryStep from "../SummaryStep/SummaryStep";
import ThankYouStep from "../StepSix/StepSix";

const MultiPageForm: React.FC<{
  setCurrentStepInParent: (step: number) => void;
}> = ({ setCurrentStepInParent }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const submitFormAction = useStoreActions(
    (actions) => actions.form.submitForm
  );

  useEffect(() => {
    setCurrentStepInParent(currentStep); // Update the current step in the parent component whenever it changes
  }, [currentStep, setCurrentStepInParent]);

  const nextStep = () => setCurrentStep(currentStep + 1);
  const prevStep = () => setCurrentStep(currentStep - 1);

  const handleFormSubmission = async () => {
    await submitFormAction(); // Submit the form data
    console.log("Form submitted successfully");
    setCurrentStep(6);
  };

  return (
    <div className={styles.multiPageFormWrapper}>
      <div className={`${styles.multiPageFormContainer} container`}>
        {currentStep === 1 && <StepOne nextStep={nextStep} />}
        {currentStep === 2 && (
          <StepTwo nextStep={nextStep} prevStep={prevStep} />
        )}
        {currentStep === 3 && (
          <StepThree nextStep={nextStep} prevStep={prevStep} />
        )}
        {currentStep === 4 && (
          <StepFour nextStep={nextStep} prevStep={prevStep} />
        )}
        {currentStep === 5 && (
          <SummaryStep prevStep={prevStep} submit={handleFormSubmission} />
        )}
        {currentStep === 6 && <ThankYouStep />}
      </div>
    </div>
  );
};

export default MultiPageForm;
