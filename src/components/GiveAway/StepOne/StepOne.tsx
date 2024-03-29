import React from "react";
import { useStoreActions, useStoreState } from "../../../hooks/hooks";
import styles from "./StepOne.module.scss";

interface StepOneProps {
  nextStep: () => void;
}

interface LabelMap {
  [key: string]: string;
}

const StepOne: React.FC<StepOneProps> = ({ nextStep }) => {
  const setSelectedItem = useStoreActions(
    (actions) => actions.form.setSelectedItem
  );
  const selectedItem = useStoreState(
    (state) => state.form.formData.selectedItem
  );

  const labels: LabelMap = {
    item1: "Ubrania, które nadają się do ponownego użycia",
    item2: "Ubrania, do wyrzucenia",
    item3: "Zabawki",
    item4: "Książki",
    item5: "Inne",
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const label = labels[e.target.value];
    setSelectedItem(label);
  };

  const proceedToNextStep = () => {
    console.log("Selected Item:", selectedItem);
    nextStep();
  };

  const isItemSelected = selectedItem !== "";

  return (
    <div className={styles.formStep}>
      <div className={styles.stepCounter}>Krok 1/4</div>
      <h2 className={styles.title}>Zaznacz co chcesz oddać:</h2>
      <form className={styles.form}>
        {Object.keys(labels).map((key) => (
          <label key={key} className={styles.label}>
            <input
              type="radio"
              name="donationItem"
              value={key}
              onChange={handleChange}
              checked={selectedItem === labels[key]}
              className={styles.radio}
            />
            {labels[key]}
          </label>
        ))}
        <button
          type="button"
          onClick={proceedToNextStep}
          className={styles.button}
          disabled={!isItemSelected}
        >
          Dalej
        </button>
      </form>
    </div>
  );
};

export default StepOne;
