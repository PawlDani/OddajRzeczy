
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useStoreActions } from "../../../hooks/hooks";
import Header from "../../common/Header/Header";
import HomeDivider from "../../common/Divider/Divider"; 
import decoration from "../../../assets/Decoration.svg"; 
import styles from "./SignOut.module.scss"; 

const SignOut: React.FC = () => {
  const navigate = useNavigate();
  const signOut = useStoreActions((actions) => actions.auth.signOut);

  useEffect(() => {
    const performLogout = async () => {
      await signOut();
      
    };

    performLogout();
  }, [signOut]);

 
  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <>
      <Header />
      <div className={styles.signOutWrapper}>
        <div className={styles.signOutContainer}>
          <HomeDivider
            dividerContent={{
              svg: decoration,
              title: "Wylogowanie nastąpiło pomyślnie!",
            }}
          />
          <div
            className={styles.buttonsContainer}
            style={{ marginTop: "30px" }}
          >
            <button className={styles.submitButton} onClick={handleGoHome}>
              Strona główna
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignOut;
