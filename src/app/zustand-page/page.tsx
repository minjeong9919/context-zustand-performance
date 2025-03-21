import StoreContextProvider from "../contexts/context";
import { Winner } from "./components/winner/Winner";
import { Players } from "./components/players/Players";
import styles from "../common.module.css";

const zustandPage = () => {
  return (
    <StoreContextProvider>
      <div className={styles.pageContainer}>
        <Winner />
        <Players />
      </div>
    </StoreContextProvider>
  );
};

export default zustandPage;
