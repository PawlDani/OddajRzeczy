import React, { useState, useEffect } from "react";
import { useStoreActions, useStoreState } from "../../../hooks/hooks";
import styles from "./StepFour.module.scss";

interface StepFourProps {
  nextStep: () => void;
  prevStep: () => void;
}

const StepFour: React.FC<StepFourProps> = ({ nextStep, prevStep }) => {
  // Actions to update the global state
  const {
    setStreet,
    setCity,
    setPostCode,
    setPhone,
    setDate,
    setTime,
    setNote,
  } = useStoreActions((actions) => actions.form);

  // Retrieving initial form data from the global state
  const formDataGlobal = useStoreState((state) => state.form.formData);

  // Local state initialized with global state values
  const [formData, setFormData] = useState(formDataGlobal);
  const [touched, setTouched] = useState({
    street: false,
    city: false,
    postCode: false,
    phone: false,
    date: false,
    time: false,
    note: false, // Ensure all fields are represented in the touched state
  });
  const [formErrors, setFormErrors] = useState({
    street: "",
    city: "",
    postCode: "",
    phone: "",
    date: "",
    time: "",
    note: "",
  });

  useEffect(() => {
    validateForm();
  }, [formData]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setTouched((prev) => ({ ...prev, [name]: true }));

    // Immediately update global state to ensure data persists across navigation
    switch (name) {
      case "street":
        setStreet(value);
        break;
      case "city":
        setCity(value);
        break;
      case "postCode":
        setPostCode(value);
        break;
      case "phone":
        setPhone(value);
        break;
      case "date":
        setDate(value);
        break;
      case "time":
        setTime(value);
        break;
      case "note":
        setNote(value);
        break;
      default:
        break;
    }
  };

  const validateForm = () => {
    let errors = { ...formErrors };

    errors.street =
      formData.street.trim().length >= 2
        ? ""
        : "Ulica musi mieć conajmniej 2 znaki.";
    errors.city =
      formData.city.trim().length >= 2
        ? ""
        : "Miasto musi mieć conajmniej 2 znaki.";
    errors.postCode = /^\d{2}-\d{3}$/.test(formData.postCode)
      ? ""
      : "Format kodu: 12-345.";
    errors.phone = /^\d{9}$/.test(formData.phone)
      ? ""
      : "Numer telefonu musi składać się z 9 cyfr.";
    errors.date = formData.date.trim() !== "" ? "" : "Data jest wymagana.";
    errors.time = formData.time.trim() !== "" ? "" : "Godzina jest wymagana.";
    errors.note =
      formData.note.trim().length > 0 ? "" : "Pole uwagi nie może być puste."; // Validate note as needed

    setFormErrors(errors);
  };

  const handleSubmit = () => {
    if (Object.values(formErrors).every((error) => error === "")) {
      // Proceed to the next step if there are no errors
      nextStep();
    } else {
      alert("Proszę poprawić błędy w formularzu.");
    }
  };

  return (
    <div className={styles.formStep}>
      <div className={styles.stepCounter}>Krok 4/4</div>
      <h2 className={styles.title}>
        Podaj adres oraz termin odbioru rzeczy przez kuriera
      </h2>
      <div className={styles.columns}>
        <div className={styles.column}>
          <h2 className={styles.title}>Adres odbioru:</h2>
          {/* Street input */}
          <div className={styles.inputGroup}>
            <label htmlFor="street" className={styles.inputLabel}>
              Ulica
            </label>
            <input
              type="text"
              name="street"
              id="street"
              value={formData.street}
              onChange={handleChange}
              className={styles.input}
            />
          </div>
          {formErrors.street && touched.street && (
            <div className={styles.error}>{formErrors.street}</div>
          )}
          {/* City input */}
          <div className={styles.inputGroup}>
            <label htmlFor="city" className={styles.inputLabel}>
              Miasto
            </label>
            <input
              type="text"
              name="city"
              id="city"
              value={formData.city}
              onChange={handleChange}
              className={styles.input}
            />
          </div>
          {formErrors.city && touched.city && (
            <div className={styles.error}>{formErrors.city}</div>
          )}
          {/* Post Code input */}
          <div className={styles.inputGroup}>
            <label htmlFor="postCode" className={styles.inputLabel}>
              Kod pocztowy
            </label>
            <input
              type="text"
              name="postCode"
              id="postCode"
              value={formData.postCode}
              onChange={handleChange}
              className={styles.input}
              pattern="\d{2}-\d{3}"
              title="Format kodu: 12-345"
            />
          </div>
          {formErrors.postCode && touched.postCode && (
            <div className={styles.error}>{formErrors.postCode}</div>
          )}
          {/* Phone input */}
          <div className={styles.inputGroup}>
            <label htmlFor="phone" className={styles.inputLabel}>
              Numer telefonu
            </label>
            <input
              type="text"
              name="phone"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              className={styles.input}
              pattern="\d{9}"
              title="9 cyfr bez separatorów"
            />
          </div>
          {formErrors.phone && touched.phone && (
            <div className={styles.error}>{formErrors.phone}</div>
          )}
        </div>
        <div className={styles.column}>
          <h2 className={styles.title}>Termin odbioru:</h2>
          {/* Date input */}
          <div className={styles.inputGroup}>
            <label htmlFor="date" className={styles.inputLabel}>
              Data
            </label>
            <input
              type="date"
              name="date"
              id="date"
              value={formData.date}
              onChange={handleChange}
              className={styles.input}
            />
          </div>
          {formErrors.date && touched.date && (
            <div className={styles.error}>{formErrors.date}</div>
          )}
          {/* Time input */}
          <div className={styles.inputGroup}>
            <label htmlFor="time" className={styles.inputLabel}>
              Godzina
            </label>
            <input
              type="time"
              name="time"
              id="time"
              value={formData.time}
              onChange={handleChange}
              className={styles.input}
            />
          </div>
          {formErrors.time && touched.time && (
            <div className={styles.error}>{formErrors.time}</div>
          )}
          <div className={styles.inputGroup}>
            <label htmlFor="note" className={styles.textareaLabel}>
              Uwagi dla kuriera
            </label>
            <textarea
              name="note"
              id="note"
              value={formData.note}
              onChange={handleChange}
              className={styles.textarea}
            />
          </div>
        </div>
      </div>

      <div className={styles.buttonGroup}>
        <button type="button" onClick={prevStep} className={styles.button}>
          Wstecz
        </button>
        <button type="button" onClick={handleSubmit} className={styles.button}>
          Dalej
        </button>
      </div>
    </div>
  );
};

export default StepFour;
