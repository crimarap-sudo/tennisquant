export function calculateMPRI(
  form:number,
  fatigue:number,
  surface:number,
  stress:number,
  eloTrend:number
){

  const score =
    form * 0.35 +
    (100 - fatigue) * 0.25 +
    surface * 0.20 +
    (100 - stress) * 0.10 +
    eloTrend * 0.10;


  return Math.round(score);

}



export function calculatePrediction(
  eloA:number,
  eloB:number,
  formA:number,
  formB:number
){

  const eloDifference = eloA - eloB;


  const score =
    50 +
    (eloDifference / 20) +
    ((formA-formB)/2);


  const probability =
    Math.max(
      5,
      Math.min(
        95,
        Math.round(score)
      )
    );


  return {

    playerA: probability,

    playerB: 100 - probability,

    confidence:
      Math.abs(probability-50)

  };

}