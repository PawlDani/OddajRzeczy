import React, { useState } from "react";
import { useStoreActions, useStoreState } from "../../../hooks/hooks";
import styles from "./StepThree.module.scss";
import goUpArrow from "../../../assets/Icon-Arrow-Up.svg";
import dropDownArrow from "../../../assets/Icon-Arrow-Down.svg";

interface StepThreeProps {
  nextStep: () => void;
  prevStep: () => void;
}

const StepThree: React.FC<StepThreeProps> = ({ nextStep, prevStep }) => {
  const setLocation = useStoreActions((actions) => actions.form.setLocation);
  const setHelpGroups = useStoreActions(
    (actions) => actions.form.setHelpGroups
  );
  const setSpecificLocation = useStoreActions(
    (actions) => actions.form.setSpecificLocation
  );

  const location = useStoreState((state) => state.form.formData.location);
  const helpGroups = useStoreState((state) => state.form.formData.helpGroups);
  const specificLocation = useStoreState(
    (state) => state.form.formData.specificLocation
  );

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const locations = ["Poznań", "Warszawa", "Kraków", "Wrocław", "Katowice"];
  const helpGroupOptions = [
    { label: "dzieciom", value: "dzieciom" },
    { label: "samotnym matkom", value: "samotnym matkom" },
    { label: "bezdomnym", value: "bezdomnym" },
    { label: "niepełnosprawnym", value: "niepełnosprawnym" },
    { label: "osobom starszym", value: "osobom starszym" },
  ];

  const selectLocation = (location: string) => {
    setLocation(location);
    setIsDropdownOpen(false);
  };

  const handleCheckboxChange = (value: string) => {
    setHelpGroups([value]); 
  };

  const handleSpecificLocationInput = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSpecificLocation(e.target.value);
  };

  const proceedToNextStep = () => {
    if (location || specificLocation || helpGroups.length > 0) {
      console.log("Location:", location);
      console.log("Help groups:", helpGroups);
      console.log("Specific location:", specificLocation);
      nextStep();
    } else {
      console.log("A selection is required");
    }
  };

  const handleDropdownClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const selectedLocationLabel = location ? location : "-- wybierz --";

  return (
    <div className={styles.formStep}>
      <div className={styles.stepCounter}>Krok 3/4</div>
      <h2 className={styles.title}>Lokalizacja:</h2>
      <form className={styles.form}>
        {/* Location dropdown */}
        <div className={styles.dropdownContainer} onClick={handleDropdownClick}>
          <span className={styles.dropdownLabel}>{selectedLocationLabel}</span>
          <img
            src={isDropdownOpen ? goUpArrow : dropDownArrow}
            className={styles.dropdownArrow}
            alt="Arrow"
          />
          {isDropdownOpen && (
            <div className={styles.customDropdownList}>
              {locations.map((location) => (
                <div
                  key={location}
                  className={styles.customDropdownItem}
                  onClick={() => selectLocation(location)}
                >
                  {location}
                </div>
              ))}
            </div>
          )}
        </div>
        {/* Help groups checkboxes */}
        <h3 className={styles.checkBoxTitle}>Komu chcesz pomóc?</h3>
        <div className={styles.checkboxGroup}>
          {helpGroupOptions.map((option) => (
            <div
              key={option.value}
              className={`${styles.checkboxContainer} ${
                helpGroups.includes(option.value) ? styles.checkboxSelected : ""
              }`}
              onClick={() => handleCheckboxChange(option.value)}
            >
              <input
                id={option.value}
                type="checkbox"
                className={styles.hiddenCheckbox}
                checked={helpGroups.includes(option.value)}
                onChange={() => handleCheckboxChange(option.value)}
              />
              <label htmlFor={option.value} className={styles.checkboxLabel}>
                {option.label}
              </label>
            </div>
          ))}
        </div>
        {/* Specific location input */}
        <h3 className={styles.inputTitle}>
          Wpisz nazwę konkretnej lokalizacji (opcjonalnie)
        </h3>
        <input
          type="text"
          placeholder=""
          value={specificLocation}
          onChange={handleSpecificLocationInput}
          className={styles.specificLocationInput}
        />
      </form>
      {/* Navigation buttons */}
      <div className={styles.buttonGroup}>
        <button type="button" onClick={prevStep} className={styles.button}>
          Wstecz
        </button>
        <button
          type="button"
          onClick={proceedToNextStep}
          className={styles.button}
          disabled={!location || (helpGroups.length === 0 && !specificLocation)}
        >
          Dalej
        </button>
      </div>
    </div>
  );
};

export default StepThree;
