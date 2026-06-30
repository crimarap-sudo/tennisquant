import { Player } from "@/types/player";

export const players: Record<string, Player> = {

  alcaraz: {
    name: "Carlos Alcaraz",
    elo: 2150,
    momentum: 82,
    fatigue: 32,
    losses: 1,
    surfaceAdaptation: 90,
  },

  djokovic: {
    name: "Novak Djokovic",
    elo: 2080,
    momentum: 70,
    fatigue: 45,
    losses: 2,
    surfaceAdaptation: 85,
  },

  sinner: {
    name: "Jannik Sinner",
    elo: 2200,
    momentum: 90,
    fatigue: 28,
    losses: 0,
    surfaceAdaptation: 92,
  },

  medvedev: {
    name: "Daniil Medvedev",
    elo: 2105,
    momentum: 65,
    fatigue: 50,
    losses: 2,
    surfaceAdaptation: 82,
  },

  swiatek: {
    name: "Iga Swiatek",
    elo: 2250,
    momentum: 94,
    fatigue: 25,
    losses: 0,
    surfaceAdaptation: 95,
  },

  sabalenka: {
    name: "Aryna Sabalenka",
    elo: 2070,
    momentum: 68,
    fatigue: 55,
    losses: 3,
    surfaceAdaptation: 78,
  },

};