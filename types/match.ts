import { Player } from "./player";

export interface Match {

  id: number;

  player1: Player;

  player2: Player;

  tournament: string;

  surface: string;

  prediction: string;

  valueBet: boolean;

}