import React from "react";

interface StepThreeProps {
  nextStep: () => void;
  prevStep: () => void;
}

const StepThree: React.FC<StepThreeProps> = ({ nextStep, prevStep }) => {
  return (
    <div className="formStep">
      <div className="stepCounter">Krok 3/4</div>
      <h2>Placeholder for Step Three</h2>
      <p>This is the third step of the form.</p>
      <button type="button" onClick={prevStep}>
        Wstecz
      </button>
      <button type="button" onClick={nextStep}>
        Dalej
      </button>
    </div>
  );
};

export default StepThree;
