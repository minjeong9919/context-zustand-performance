"use client";

import { Profiler, useRef } from "react";
import { setRenderHighlight } from "@/app/utils/setRenderHighlight";
import { initialValue } from "@/app/constants/initialValue";
import { useStoreContext } from "@/app/contexts/context";
import styles from "./winner.module.css";
import { useStore } from "zustand";

export const Winner = () => {
  const { teamA, teamB } = useStoreContext() || initialValue;
  const ref = useRef<HTMLDivElement | null>(null);

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
