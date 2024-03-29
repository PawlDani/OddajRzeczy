import React, { useState } from "react";
import HomeDivider from "../../Divider/Divider";
import decoration from "../../../../assets/Decoration.svg";
import facebook from "../../../../assets/Facebook.svg";
import instagram from "../../../../assets/Instagram.svg";
import styles from "./Contact.module.scss";

const ContactForm: React.FC = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });
  const [successMessage, setSuccessMessage] = useState("");

  const validateForm = () => {
    let isValid = true;
    let errors = { name: "", email: "", message: "" };

    // Name validation
    if (!form.name || form.name.includes(" ")) {
      errors.name = "Podane imię jest nieprawidłowe!";
      isValid = false;
    }

    // Email validation
    if (!form.email || !/\S+@\S+\.\S+/.test(form.email)) {
      errors.email = "Podany email jest nieprawidłowy!";
      isValid = false;
    }

    // Message validation
    if (!form.message || form.message.length < 120) {
      errors.message = "Wiadomość musi mieć conajmniej 120 znaków";
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      const response = await fetch(
        "https://fer-api.coderslab.pl/v1/portfolio/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      if (!response.ok) {
        throw new Error("Server validation failed");
      }

      const data = await response.json();
      if (data.status === "success") {
        // Handle successful form submission
        setSuccessMessage(
          "Wiadomość została wysłana! Wkrótce się skontaktujemy."
        );
        setForm({ name: "", email: "", message: "" }); // Clear form
      }
    } catch (error) {
      console.error("Failed to send message:", error);
      alert("Wystąpił błąd przy wysyłaniu wiadomości.");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
    if (value.trim() !== "") {
      // Clear out the error for that field if the value is not empty
      setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
    }
  };

  return (
    <div className={styles.contactFormWrapper} id="contact">
      <div className={`${styles.contactForm} container`}>
        <div className={styles.formWrapper}>
          <div className={styles.dividerWrapper}>
            <HomeDivider
              dividerContent={{
                svg: decoration,
                title: "Skontaktuj się z nami",
              }}
            />
            {successMessage && (
              <p className={styles.successMessage}>{successMessage}</p>
            )}
          </div>
          <form onSubmit={handleSubmit}>
            <div className={styles.inputRow}>
              <div className={styles.inputGroup}>
                <label htmlFor="name">Wpisz swoje imię</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Krzysztof"
                  value={form.name}
                  onChange={handleChange}
                  className={errors.name ? styles.error : ""}
                />
                {errors.name && (
                  <p className={styles.errorMessage}>{errors.name}</p>
                )}
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="email">Wpisz swój email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="abc@xyz.pl"
                  value={form.email}
                  onChange={handleChange}
                  className={errors.email ? styles.error : ""}
                />
                {errors.email && (
                  <p className={styles.errorMessage}>{errors.email}</p>
                )}
              </div>
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="message">Wpisz swoją wiadomość</label>
              <textarea
                id="message"
                name="message"
                placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                value={form.message}
                onChange={handleChange}
                className={errors.message ? styles.error : ""}
              />
              {errors.message && (
                <p className={styles.errorMessage}>{errors.message}</p>
              )}
            </div>
            <button type="submit">Wyślij</button>
          </form>
        </div>
        <div className={styles.contactFooter}>
          <div className={styles.copyright}>
            <p>Copyright by Coders Lab</p>
          </div>
          <div className={styles.social}>
            <a href="https://www.facebook.com/">
              <img src={facebook} alt="Facebook" />
            </a>
            <a href="https://www.instagram.com/">
              <img src={instagram} alt="Instagram" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
