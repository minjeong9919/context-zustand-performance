"use client";

import styles from "./players.module.css";
import { Player } from "@/app/components/player/Player";
import { useStoreContext } from "@/app/contexts/context";
import { initialValue } from "@/app/constants/initialValue";

const PlayerA = () => {
  const { teamA, increaseTeamAScore, decreaseTeamAScore } =
    useStoreContext() || initialValue;
  return (
    <Player
      type='A'
      score={teamA}
      onCrease={increaseTeamAScore}
      onDecrease={decreaseTeamAScore}
    />
  );
};

const PlayerB = () => {
  const { teamB, increaseTeamBScore, decreaseTeamBScore } =
    useStoreContext() || initialValue;
  return (
    <Player
      type='B'
      score={teamB}
      onCrease={increaseTeamBScore}
      onDecrease={decreaseTeamBScore}
    />
  );
};

export const Players = () => {
  return (
    <div className={styles.container}>
      <h3>PLAYERS</h3>
      <h4 className={styles.title}>[ Players Component ]</h4>
      <div className={styles.playerWrapper}>
        <PlayerA />
        <PlayerB />
      </div>
    </div>
  );
};
