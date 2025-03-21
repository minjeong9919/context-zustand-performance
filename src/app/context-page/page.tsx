import { Winner } from "../components/winner/Winner";
import StoreContextProvider from "../contexts/context";
import styles from "../common.module.css";
import { Players } from "../components/players/Players";

const ContextPage = () => {
  return (
    <StoreContextProvider>
      <div className={styles.pageContainer}>
        <Winner />
        <Players />
      </div>
    </StoreContextProvider>
  );
};

export default ContextPage;
