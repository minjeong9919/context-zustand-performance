import { Winner } from "../components/winner/Winner";
import StoreContextProvider from "../contexts/context";
import { Players } from "../components/players/Players";
import styles from "../common.module.css";

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
