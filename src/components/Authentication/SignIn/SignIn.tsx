import { useState } from "react";
import { useStoreActions } from "../../../hooks/hooks";
import { useNavigate } from "react-router-dom";
import Header from "../../common/Header/Header"; 
import HomeDivider from "../../common/Divider/Divider"; 
import decoration from "../../../assets/Decoration.svg"; 
import styles from "./SignIn.module.scss"; 

const SignIn = () => {
  const navigate = useNavigate();
  const signIn = useStoreActions((actions) => actions.auth.signIn);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(""); 

    try {
      await signIn({ email, password });
      navigate("/"); 
    } catch (err) {
      console.error(err);
      setError("Failed to sign in. Please check your email and password."); 
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
              <button type="submit" className={styles.submitButton}>
                Zaloguj się
              </button>
              <button
                className={styles.submitButton}
                onClick={() => navigate("/rejestracja")}
              >
                Załóż konto
              </button>
            </div>
            {error && <p style={{ color: "red" }}>{error}</p>}
          </form>
        </div>
      </div>
    </>
  );
};

export default SignIn;
