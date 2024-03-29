import React from "react";
import { useStoreState } from "../../../hooks/hooks";
import styles from "./SummaryStep.module.scss";
import svg1 from "../../../assets/Icon-1.svg";
import svg4 from "../../../assets/Icon-4.svg";

const SummaryStep: React.FC<{
  prevStep: () => void;
  submit: () => void;
}> = ({ prevStep, submit }) => {
  const formData = useStoreState((state) => state.form.formData);

  return (
    <div className={styles.summaryStep}>
      <h2>Podsumowanie Twojej darowizny</h2>
      <div className={styles.row}>
        <div className={styles.title}>Oddajesz:</div>
        <div className={styles.content}>
          <img src={svg1} alt="Icon" className={styles.icon} />
          {formData.numberOfBags} worki, {formData.selectedItem},{" "}
          {formData.helpGroups.join(", ")}
          <br />
          <img src={svg4} alt="Location Icon" className={styles.icon} />
          dla lokalizacji: {formData.location} {formData.specificLocation}
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.column}>
          <div className={styles.title}>Adres odbioru:</div>
          <div className={styles.content}>
            Ulica: {formData.street}
            <br />
            Miasto: {formData.city}
            <br />
            Kod pocztowy: {formData.postCode}
            <br />
            Telefon: {formData.phone}
          </div>
        </div>
        <div className={styles.column}>
          <div className={styles.title}>Termin odbioru:</div>
          <div className={styles.content}>
            Data: {formData.date}
            <br />
            Godzina: {formData.time}
            <br />
            Uwagi dla kuriera: {formData.note}
          </div>
        </div>
      </div>

      <div className={styles.actions}>
        <button onClick={prevStep} className={styles.button}>
          Wstecz
        </button>
        <button onClick={submit} className={styles.button}>
          Potwierdzam
        </button>
      </div>
    </div>
  );
};

export default SummaryStep;
