import { Profiler, useRef } from "react";
import { setRenderHighlight } from "@/app/utils/setRenderHighlight";
import styles from "./player.module.css";

interface propsType {
  type: "A" | "B";
  score: number;
  onCrease: () => void;
  onDecrease: () => void;
}

export const Player = ({ type, score, onCrease, onDecrease }: propsType) => {
  const ref = useRef<HTMLDivElement | null>(null);

  return (
    <Profiler id='player' onRender={() => setRenderHighlight(ref)}>
      <div className={styles.container} ref={ref}>
        <h4 className={styles.title}>[ Player{type} Component ]</h4>
        <h3>TEAM {type}</h3>
        <h1 className={styles.score}>{score}</h1>
        <div className={styles.buttonWrapper}>
          <button className={styles.button} onClick={onDecrease}>
            -
          </button>
          <button className={styles.button} onClick={onCrease}>
            +
          </button>
        </div>
      </div>
    </Profiler>
  );
};
