import { Match } from "@/types/match";

import { calculatePrediction } from "@/lib/predictionEngine";

import { calculateMPRI } from "@/lib/mpriEngine";


export function analyzeMatch(match: Match) {


  const prediction = calculatePrediction(

    match.player1.elo,

    match.player2.elo,

    match.player1.momentum,

    match.player2.momentum,

    match.player1.fatigue,

    match.player2.fatigue,

    match.player1.losses,

    match.player2.losses

  );



  const mpriPlayer1 = calculateMPRI(

    match.player1.momentum,

    match.player1.fatigue,

    match.player1.elo,

    match.player1.losses,

    match.player1.surfaceAdaptation

  );



  const mpriPlayer2 = calculateMPRI(

    match.player2.momentum,

    match.player2.fatigue,

    match.player2.elo,

    match.player2.losses,

    match.player2.surfaceAdaptation

  );




  return {


    match,


    prediction,


    mpri: {

      player1: mpriPlayer1,

      player2: mpriPlayer2

    }


  };

}