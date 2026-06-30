export function calculateSurfaceAdvantage(
  playerSurface:number,
  opponentSurface:number
){

  const difference =
    playerSurface - opponentSurface;


  let advantage =
    difference / 2;


  advantage = Math.max(
    -20,
    Math.min(
      20,
      Math.round(advantage)
    )
  );


  return advantage;

}