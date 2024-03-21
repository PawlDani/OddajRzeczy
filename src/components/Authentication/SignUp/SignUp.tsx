import { useState } from "react";
import { useStoreActions, useStoreState } from "../../../hooks/hooks";
import { useNavigate } from "react-router-dom";
import Header from "../../common/Header/Header";
import HomeDivider from "../../common/Divider/Divider";
import decoration from "../../../assets/Decoration.svg";
import styles from "./SignUp.module.scss";

const SignUp = () => {
  const navigate = useNavigate();
  const user = useStoreState((state) => state.auth.user);

  const signUp = useStoreActions((actions) => actions.auth.signUp);
  const loading = useStoreState((state) => state.auth.loading);
  const error = useStoreState((state) => state.auth.error);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password !== repeatPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      await signUp({ email, password });
      console.log("User signed up and state updated:", user);
      navigate("/");
    } catch (error) {}
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
            <div className={styles.buttonsContainer}>
              <button
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
          {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
      </div>
    </>
  );
};

export default SignUp;
