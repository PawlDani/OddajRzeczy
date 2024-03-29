import React from "react";
import styles from "./DynamicText.module.scss"; 

interface DynamicTextProps {
  currentStep: number;
}

interface StepTexts {
  [key: number]: { title: string; text: string };
}

const DynamicText: React.FC<DynamicTextProps> = ({ currentStep }) => {
  if (currentStep > 4) return null;

  const stepTexts: StepTexts = {
    1: {
      title: "Ważne!",
      text: "Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć, komu najlepiej je przekazać.",
    },
    2: {
      title: "Ważne!",
      text: "Wszystkie rzeczy spakuj w 60l worki. Dokładną instrukcję jak poprawnie spakować rzeczy znajdziesz TUTAJ.",
    },
    3: {
      title: "Ważne!",
      text: "Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w wyszukiwarce. Możesz też filtrować organizacje po ich lokalizacji bądź celu ich pomocy.",
    },
    4: {
      title: "Ważne!",
      text: "Podaj adres oraz termin odbioru rzeczy.",
    },
  };

  return (
    <section className={styles.dynamicTextContainer}>
      <div className={`${styles.dynamicTextContent} container`}>
        {/* Dynamically render the title and text based on the current step */}
        <h2>{stepTexts[currentStep].title}</h2>
        <p>{stepTexts[currentStep].text}</p>
      </div>
    </section>
  );
};

export default DynamicText;
