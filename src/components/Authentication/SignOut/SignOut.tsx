import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useStoreActions } from "../../../hooks";

const Logout: React.FC = () => {
  const navigate = useNavigate();
  const signOut = useStoreActions((actions) => actions.auth.signOut);

  useEffect(() => {
    const performLogout = async () => {
      await signOut();
    };

    performLogout();
  }, [signOut]);

  // Button handler to navigate to the homepage
  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div>
      <p>Wylogowanie nastąpiło pomyślnie!</p>
      <button onClick={handleGoHome}>Strona główna</button>
    </div>
  );
};

export default Logout;
