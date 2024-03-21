import React from "react";

interface StepTwoProps {
  nextStep: () => void;
  prevStep: () => void;
}

const StepTwo: React.FC<StepTwoProps> = ({ nextStep, prevStep }) => {
  return (
    <div className="formStep">
      <div className="stepCounter">Krok 2/4</div>
      <h2>Placeholder for Step Two</h2>
      <p>This is the second step of the form.</p>
      <button type="button" onClick={prevStep}>
        Wstecz
      </button>
      <button type="button" onClick={nextStep}>
        Dalej
      </button>
    </div>
  );
};

export default StepTwo;
