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
        <div className={styles.giveawayContent}>
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
          <div className={styles.detailsContent}>
            <div className={styles.detailRow}>
              <span>Ulica</span>
              <span>{formData.street}</span>
            </div>
            <div className={styles.detailRow}>
              <span>Miasto</span>
              <span>{formData.city}</span>
            </div>
            <div className={styles.detailRow}>
              <span>Kod pocztowy</span>
              <span>{formData.postCode}</span>
            </div>
            <div className={styles.detailRow}>
              <span>Telefon</span>
              <span>{formData.phone}</span>
            </div>
          </div>
        </div>
        <div className={styles.secondColumn}>
          <div className={styles.title}>Termin odbioru:</div>
          <div className={styles.detailsContent}>
            <div className={styles.detailRow}>
              <span>Data</span>
              <span>{formData.date}</span>
            </div>
            <div className={styles.detailRow}>
              <span>Godzina</span>
              <span>{formData.time}</span>
            </div>
            <div className={styles.detailRow}>
              <span>Uwagi dla kuriera</span>
              <span>{formData.note}</span>
            </div>
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
