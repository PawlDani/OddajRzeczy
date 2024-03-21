import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import SignUp from "./components/Authentication/SignUp/SignUp";
import Logout from "./components/Authentication/SignOut/SignOut";
import SignIn from "./components/Authentication/SignIn/SignIn";
import OddajRzeczy from "./components/GiveAway/GiveAway";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./config/firebase-config";
import { useStoreActions } from "./hooks/hooks";

function App() {
  const setUser = useStoreActions((actions) => actions.auth.setUser);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser && firebaseUser.email) {
        // Ensure firebaseUser.email is not null before setting the user
        setUser({ email: firebaseUser.email });
      } else {
        // User is signed out or email is null
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, [setUser]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rejestracja" element={<SignUp />} />
        <Route path="/wyloguj" element={<Logout />} />
        <Route path="/logowanie" element={<SignIn />} />
        <Route path="/oddaj-rzeczy" element={<OddajRzeczy />} />
      </Routes>
    </Router>
  );
}

export default App;
