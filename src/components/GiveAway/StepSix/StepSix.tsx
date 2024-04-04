import styles from "./StepSix.module.scss";
import decoration from "../../../assets/Decoration.svg";

const ThankYouStep = () => {
  return (
    <div className={styles.thankYouMessage}>
      <h2>
        Dziękujemy za przesłanie formularza Na maila prześlemy wszelkie
        informacje o odbiorze.
      </h2>
      <img src={decoration} alt="Decoration" className={styles.decorationSvg} />
    </div>
  );
};

export default ThankYouStep;
