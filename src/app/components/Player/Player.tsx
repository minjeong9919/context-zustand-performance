import { Profiler, useRef } from "react";
import { initialValue } from "@/app/constants/initialValue";
import { useStoreContext } from "@/app/contexts/context";
import { setRenderHighlight } from "@/app/utils/setRenderHighlight";
import styles from "./player.module.css";

interface propsType {
  type: "A" | "B";
}

export const Player = ({ type }: propsType) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const {
    teamA,
    teamB,
    increaseTeamAScore,
    increaseTeamBScore,
    decreaseTeamAScore,
    decreaseTeamBScore,
  } = useStoreContext() || initialValue;
  return (
    <Profiler id='player' onRender={() => setRenderHighlight(ref)}>
      <div className={styles.container} ref={ref}>
        <h4 className={styles.title}>[ Player{type} Component ]</h4>
        <h3>TEAM {type}</h3>
        <h1 className={styles.score}>{type === "A" ? teamA : teamB}</h1>
        <div className={styles.buttonWrapper}>
          <button
            className={styles.button}
            onClick={type === "A" ? decreaseTeamAScore : decreaseTeamBScore}
          >
            -
          </button>
          <button
            className={styles.button}
            onClick={type === "A" ? increaseTeamAScore : increaseTeamBScore}
          >
            +
          </button>
        </div>
      </div>
    </Profiler>
  );
};
