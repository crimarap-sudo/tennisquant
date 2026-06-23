export function calculateMPRI(
  form:number,
  fatigue:number,
  surface:number,
  stress:number,
  eloTrend:number
){

  let mpri =
    (form * 0.35) +
    ((100 - fatigue) * 0.25) +
    (surface * 0.20) +
    ((100 - stress) * 0.10) +
    (eloTrend * 0.10);


  return Math.round(mpri);

}