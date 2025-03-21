"use client";

import { createContext, useState, useContext, ReactNode } from "react";

interface contextType {
  teamA: number;
  teamB: number;
  increaseTeamAScore: () => void;
  decreaseTeamAScore: () => void;
  increaseTeamBScore: () => void;
  decreaseTeamBScore: () => void;
}

const Context = createContext<contextType | undefined>(undefined);

const useStore = () => {
  const [teamA, setTeamA] = useState(0);
  const [teamB, setTeamB] = useState(0);
  return {
    teamA,
    teamB,
    increaseTeamAScore: () => {
      setTeamA((prev) => prev + 1);
    },
    decreaseTeamAScore: () => {
      setTeamA((prev) => prev - 1);
    },
    increaseTeamBScore: () => {
      setTeamB((prev) => prev + 1);
    },
    decreaseTeamBScore: () => {
      setTeamB((prev) => prev - 1);
    },
  };
};

const StoreContextProvider = ({ children }: { children: ReactNode }) => {
  return <Context.Provider value={useStore()}>{children}</Context.Provider>;
};

export const useStoreContext = () => useContext(Context);
export default StoreContextProvider;
