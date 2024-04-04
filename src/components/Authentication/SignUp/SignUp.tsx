import React, { useState } from "react";
import { useStoreActions, useStoreState } from "../../../hooks/hooks";
import { useNavigate } from "react-router-dom";
import Header from "../../common/Header/Header";
import HomeDivider from "../../common/Divider/Divider";
import decoration from "../../../assets/Decoration.svg";
import styles from "./SignUp.module.scss";

const SignUp = () => {
  const navigate = useNavigate();
  const signUp = useStoreActions((actions) => actions.auth.signUp);
  const loading = useStoreState((state) => state.auth.loading);
  const error = useStoreState((state) => state.auth.error);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [localError, setLocalError] = useState(""); // Additional state for local error messages

  const validateEmail = (email: string) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLocalError(""); // Reset local error state

    if (!validateEmail(email)) {
      setLocalError("Invalid email address format.");
      return;
    }
    if (password.length < 6) {
      setLocalError("Password must be at least 6 characters long.");
      return;
    }
    if (password !== repeatPassword) {
      setLocalError("Passwords do not match.");
      return;
    }
    try {
      await signUp({ email, password });
      // If signUp is successful, navigate to the homepage
      navigate("/");
    } catch (err) {
      // If there's an error, it will be caught here
      console.error(err);
    }
  };

  return (
    <>
      <Header />
      <div className={styles.signUpWrapper}>
        <div className={styles.signUpContainer}>
          <HomeDivider
            dividerContent={{ svg: decoration, title: "Załóż konto" }}
          />
          <form onSubmit={handleSubmit} className={styles.signUpForm}>
            <div className={styles.inputWrapper}>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder=""
                required
                className={styles.inputField}
              />
              <label htmlFor="password">Hasło</label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder=""
                required
                className={styles.inputField}
              />
              <label htmlFor="repeatPassword">Powtórz hasło</label>
              <input
                id="repeatPassword"
                type="password"
                value={repeatPassword}
                onChange={(e) => setRepeatPassword(e.target.value)}
                required
                className={styles.inputField}
              />
            </div>
            {localError && <p className={styles.errorMsg}>{localError}</p>}
            {error && <p className={styles.errorMsg}>{error}</p>}
            <div className={styles.buttonsContainer}>
              <button
                type="button"
                onClick={() => navigate("/logowanie")}
                className={styles.submitButton}
              >
                Zaloguj się
              </button>
              <button
                type="submit"
                disabled={loading}
                className={styles.submitButton}
              >
                Załóż konto
              </button>
            </div>
          </form>
          {loading && <p>Loading...</p>}
        </div>
      </div>
    </>
  );
};

export default SignUp;
