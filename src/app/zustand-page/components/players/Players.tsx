"use client";

import useStore from "@/app/contexts/zustandStore";
import styles from "./players.module.css";
import { Player } from "@/app/components/player/Player";

const PlayerA = () => {
  const teamA = useStore((state) => state.teamA);
  const increaseTeamAScore = useStore((state) => state.increaseTeamAScore);
  const decreaseTeamAScore = useStore((state) => state.decreaseTeamAScore);
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
  const teamA = useStore((state) => state.teamB);
  const increaseTeamBScore = useStore((state) => state.increaseTeamBScore);
  const decreaseTeamBScore = useStore((state) => state.decreaseTeamBScore);
  return (
    <Player
      type='B'
      score={teamA}
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
