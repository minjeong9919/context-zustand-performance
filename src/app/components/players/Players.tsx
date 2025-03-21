"use client";

import { useStoreContext } from "@/app/contexts/context";
import styles from "./players.module.css";
import { Player } from "../Player/Player";

export const Players = () => {
  return (
    <div className={styles.container}>
      <h3>PLAYERS</h3>
      <h4 className={styles.title}>[ Players Component ]</h4>
      <div className={styles.playerWrapper}>
        <Player type='A' />
        <Player type='B' />
      </div>
    </div>
  );
};
