import StoreContextProvider from "./contexts/context";
import { FaInfoCircle } from "react-icons/fa";
import styles from "./common.module.css";

export default function Home() {
  return (
    <StoreContextProvider>
      <div className={`${styles.pageContainer} ${styles.home}`}>
        <header className={styles.headerWrapper}>
          <h1>
            <strong>contextAPI</strong>와 <strong>zustand</strong>의 성능을
            비교하는 사이트입니다.
          </h1>
          <h3>아래 버튼을 누르시면 선택한 테스트 페이지로 이동해요.</h3>
        </header>
        <main>
          <div className={styles.buttonWrapper}>
            <a href='/context-page'>ContextAPI 확인하기</a>
            <a href='/zustand-page'>zustand 확인하기</a>
          </div>
        </main>
        <details>
          <summary className={styles.customDetails}>
            <FaInfoCircle className={styles.icon} />
            <span>자세한 설명 보기</span>
          </summary>
          <div className={styles.explanWrapper}>
            <ol>
              <li>
                해당 사이트는 contextAPI와 zustand의 성능 테스트를 위해 구현한
                사이트입니다.
              </li>
              <li>
                렌더링 또는 재렌더링이 일어나는 컴포넌트는 0.5초 동안 빨간
                테두리가 생깁니다.
              </li>
              <li>
                플레이어의 + 혹은 - 버튼을 클릭해 점수를 추가/감소하면서
                렌더링되는 컴포넌트를 확인해주세요.
              </li>
            </ol>
          </div>
        </details>
      </div>
    </StoreContextProvider>
  );
}
