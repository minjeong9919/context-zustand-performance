import { create } from "zustand";

export interface Store {
  teamA: number;
  teamB: number;
  increaseTeamAScore: () => void;
  increaseTeamBScore: () => void;
  decreaseTeamAScore: () => void;
  decreaseTeamBScore: () => void;
}

const useStore = create<Store>((set) => ({
  teamA: 0,
  teamB: 0,
  increaseTeamAScore: () => set((state) => ({ teamA: state.teamA + 1 })),
  increaseTeamBScore: () => set((state) => ({ teamB: state.teamB + 1 })),
  decreaseTeamAScore: () => set((state) => ({ teamA: state.teamA - 1 })),
  decreaseTeamBScore: () => set((state) => ({ teamB: state.teamB - 1 })),
}));

export default useStore;
