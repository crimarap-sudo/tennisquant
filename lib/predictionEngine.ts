import { calculateElo } from "./eloEngine";


export function calculatePrediction(
  eloA: number,
  eloB: number,
  formA: number,
  formB: number
) {

  // Apply Elo calculation
  const eloAUpdated = calculateElo(
    eloA,
    eloB,
    1
  );

  const eloBUpdated = calculateElo(
    eloB,
    eloA,
    0
  );


  // Elo advantage
  const eloDifference =
    eloAUpdated - eloBUpdated;


  // Prediction formula
  let probability =
    50 +
    (eloDifference / 15) +
    ((formA - formB) / 3);


  // Keep probability between 5% and 95%
  probability = Math.max(
    5,
    Math.min(
      95,
      Math.round(probability)
    )
  );


  // Confidence score
  const confidence = Math.min(
    95,
    Math.round(
      55 +
      Math.abs(probability - 50)
    )
  );


  return {

    playerA: probability,

    playerB: 100 - probability,

    confidence

  };

}