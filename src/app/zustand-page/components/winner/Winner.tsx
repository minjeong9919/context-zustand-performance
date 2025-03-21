"use client";

import { Profiler, useRef } from "react";
import { setRenderHighlight } from "@/app/utils/setRenderHighlight";
import styles from "./winner.module.css";
import useStore from "@/app/contexts/zustandStore";

export const Winner = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const teamA = useStore((state) => state.teamA);
  const teamB = useStore((state) => state.teamB);

  return (
    <Profiler id='winner' onRender={() => setRenderHighlight(ref)}>
      <div className={styles.container} ref={ref}>
        <h4 className={styles.title}>[ Winner Component ]</h4>
        <h1>Winner</h1>
        <h4>
          {teamA === teamB ? "DRAW" : teamA > teamB ? "TEAM A" : "TEAM B"}
        </h4>
      </div>
    </Profiler>
  );
};
