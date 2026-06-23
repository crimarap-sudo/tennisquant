export function calculatePrediction(
  eloA:number,
  eloB:number,
  formA:number,
  formB:number
){

  const eloDifference = eloA - eloB;


  let probability =
    50 +
    (eloDifference / 15) +
    ((formA-formB)/3);


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

    confidence

  };

}