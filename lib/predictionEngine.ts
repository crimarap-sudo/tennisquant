import { calculateElo } from "./eloEngine";
import { calculateStress } from "./stressEngine";


export function calculatePrediction(
  eloA:number,
  eloB:number,
  formA:number,
  formB:number,
  fatigueA:number,
  fatigueB:number,
  lossesA:number,
  lossesB:number
){

  // Elo calculation
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


  const eloDifference =
    eloAUpdated - eloBUpdated;



  // Fatigue advantage
  const fatigueDifference =
    fatigueB - fatigueA;



  // Stress calculation
  const stressA = calculateStress(
    lossesA,
    eloB / 10,
    20
  );


  const stressB = calculateStress(
    lossesB,
    eloA / 10,
    20
  );


  const stressDifference =
    stressB - stressA;



  // Final probability
  let probability =
    50 +
    (eloDifference / 15) +
    ((formA - formB) / 3) +
    (fatigueDifference / 2) +
    (stressDifference / 3);



  probability = Math.max(
    5,
    Math.min(
      95,
      Math.round(probability)
    )
  );



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

    confidence,

    stressA,

    stressB

  };

}