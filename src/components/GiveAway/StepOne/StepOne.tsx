import React from "react";

interface StepOneProps {
  nextStep: () => void;
}

const StepOne: React.FC<StepOneProps> = ({ nextStep }) => {
  return (
    <div className="formStepOne">
      <div className="stepCounter">Krok 1/4</div>
      <h2>Zaznacz co chcesz oddać:</h2>
      <form>
        <label>
          <input type="checkbox" name="item1" />
          Ubrania, które nadają się do ponownego użycia
        </label>
        <label>
          <input type="checkbox" name="item2" />
          Ubrania, do wyrzucenia
        </label>
        <label>
          <input type="checkbox" name="item3" />
          Zabawki
        </label>
        <label>
          <input type="checkbox" name="item4" />
          Książki
        </label>
        <label>
          <input type="checkbox" name="item5" />
          Inne
        </label>
        <button type="button" onClick={nextStep}>
          Dalej
        </button>
      </form>
    </div>
  );
};

export default StepOne;
