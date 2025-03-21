"use client";

import { initialValue } from "@/app/constants/initialValue";
import { useStoreContext } from "../../contexts/context";
import styles from "./winner.module.css";

export const Winner = () => {
  const { teamA, teamB } = useStoreContext() || initialValue;

  return (
    <div className={styles.container}>
      <h4 className={styles.title}>[ Winner Component ]</h4>
      <h1>Winner</h1>
      <h4>{teamA === teamB ? "DRAW" : teamA > teamB ? "TEAM A" : "TEAM B"}</h4>
    </div>
  );
};
