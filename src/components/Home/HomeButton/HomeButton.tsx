import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { useStoreState } from "../../../hooks/hooks";
import styles from "./HomeButton.module.scss";

const HomeButton: React.FC = () => {
  const user = useStoreState((state) => state.auth.user);

  // Determine the destination based on the user's authentication status
  const destination = user ? "/oddaj-rzeczy" : "/logowanie";

  return (
    <div className={styles.links}>
      <RouterLink to={destination} className={styles.link}>
        ODDAJ <br /> RZECZY
      </RouterLink>
    </div>
  );
};

export default HomeButton;
