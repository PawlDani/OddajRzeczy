import React, { useState } from "react";
import { useStoreActions, useStoreState } from "../../../hooks/hooks";
import { useNavigate } from "react-router-dom";
import Header from "../../common/Header/Header";
import HomeDivider from "../../common/Divider/Divider";
import decoration from "../../../assets/Decoration.svg";
import styles from "./SignIn.module.scss";

const SignIn = () => {
  const navigate = useNavigate();
  const signIn = useStoreActions((actions) => actions.auth.signIn);
  const { loading, error } = useStoreState((state) => state.auth);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await signIn({ email, password });
      // Navigate only on successful sign in
      navigate("/");
    } catch (err) {
      // Error handling is done within the signIn thunk action, so no need to set error state here
      console.error(err);
    }
  };

  return (
    <>
      <Header />
      <div className={styles.signUpWrapper}>
        <div className={styles.signUpContainer}>
          <HomeDivider
            dividerContent={{ svg: decoration, title: "Zaloguj się" }}
          />
          <form onSubmit={handleSubmit} className={styles.signUpForm}>
            <div className={styles.inputWrapper}>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className={styles.inputField}
              />

              <label htmlFor="password">Hasło</label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className={styles.inputField}
              />
            </div>
            <div className={styles.buttonsContainer}>
              <button
                type="submit"
                disabled={loading}
                className={styles.submitButton}
              >
                Zaloguj się
              </button>
              <button
                type="button"
                onClick={() => navigate("/rejestracja")}
                className={styles.submitButton}
              >
                Załóż konto
              </button>
            </div>
            {loading && <p className={styles.loading}>Loading...</p>}
            {error && <p className={styles.errorMsg}>{error}</p>}
          </form>
        </div>
      </div>
    </>
  );
};

export default SignIn;
