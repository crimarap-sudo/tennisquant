export function calculateFatigue(
  matchesLast7Days:number,
  hoursPlayed:number,
  restDays:number
){

  let fatigue = 0;


  // too many matches
  fatigue += matchesLast7Days * 8;


  // long matches
  fatigue += hoursPlayed * 3;


  // recovery
  fatigue -= restDays * 10;


  // limit between 0-100
  fatigue = Math.max(
    0,
    Math.min(
      100,
      Math.round(fatigue)
    )
  );


  return fatigue;

}