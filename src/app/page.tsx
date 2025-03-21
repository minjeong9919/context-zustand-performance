import StoreContextProvider from "./contexts/context";
import ContextPage from "./context-page/page";

export default function Home() {
  return (
    <StoreContextProvider>
      <ContextPage />
    </StoreContextProvider>
  );
}
