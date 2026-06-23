export function calculateStress(
  recentLosses:number,
  opponentLevel:number,
  tournamentPressure:number
){

  let stress = 0;


  // recent defeats increase pressure
  stress += recentLosses * 15;


  // stronger opponent = more pressure
  stress += opponentLevel * 0.3;


  // tournament importance
  stress += tournamentPressure;


  // limit 0-100
  stress = Math.max(
    0,
    Math.min(
      100,
      Math.round(stress)
    )
  );


  return stress;

}