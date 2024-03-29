import React, { useState } from "react";
import { useStoreActions, useStoreState } from "../../../hooks/hooks";
import styles from "./StepTwo.module.scss";
import goUpArrow from "../../../assets/Icon-Arrow-Up.svg";
import dropDownArrow from "../../../assets/Icon-Arrow-Down.svg";

interface StepTwoProps {
  nextStep: () => void;
  prevStep: () => void;
}

const StepTwo: React.FC<StepTwoProps> = ({ nextStep, prevStep }) => {
  const setNumberOfBags = useStoreActions(
    (actions) => actions.form.setNumberOfBags
  );
  const numberOfBags = useStoreState(
    (state) => state.form.formData.numberOfBags
  );

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const options = [1, 2, 3, 4, 5];

  const selectOption = (option: number) => {
    setNumberOfBags(option.toString());
    setIsDropdownOpen(false);
  };

  const proceedToNextStep = () => {
    console.log("Number of bags:", numberOfBags);
    nextStep();
  };

  const handleDropdownClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const selectedLabel = numberOfBags ? `${numberOfBags}` : "-- wybierz --";

  return (
    <div className={styles.formStep}>
      <div className={styles.stepCounter}>Krok 2/4</div>
      <h2 className={styles.title}>
        Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:
      </h2>
      <form className={styles.form}>
        <span className={styles.bagsText}>Liczba 60l worków</span>
        <div className={styles.dropdownContainer} onClick={handleDropdownClick}>
          <span className={styles.dropdownLabel}>{selectedLabel}</span>
          <img
            src={isDropdownOpen ? goUpArrow : dropDownArrow}
            className={styles.dropdownArrow}
            alt="Arrow"
          />
          {isDropdownOpen && (
            <div className={styles.customDropdownList}>
              {options.map((option) => (
                <div
                  key={option}
                  className={styles.customDropdownItem}
                  onClick={() => selectOption(option)}
                >
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>
      </form>
      <div className={styles.buttonGroup}>
        <button type="button" onClick={prevStep} className={styles.button}>
          Wstecz
        </button>
        <button
          type="button"
          onClick={proceedToNextStep}
          className={styles.button}
          disabled={!numberOfBags}
        >
          Dalej
        </button>
      </div>
    </div>
  );
};

export default StepTwo;
