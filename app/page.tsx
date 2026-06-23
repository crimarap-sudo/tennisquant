import { matches } from "@/data/matches";
import { calculatePrediction } from "@/lib/predictionEngine";
import { calculateMPRI } from "@/lib/mpriEngine";


export default function Home() {

  return (

    <main className="min-h-screen bg-black text-white p-10">

      <h1 className="text-5xl font-bold">
        TennisQuant 🎾
      </h1>


      <p className="mt-4 text-gray-400">
        AI Tennis Analytics & Predictions
      </p>



      <div className="grid gap-6 mt-10">


        {matches.map((match) => {


          const prediction = calculatePrediction(
            match.elo.player1,
            match.elo.player2,
            match.momentum.player1,
            match.momentum.player2,
            match.fatigue.player1,
            match.fatigue.player2
          );


          const mpriPlayer1 = calculateMPRI(
            match.momentum.player1,
            match.fatigue.player1,
            80,
            30,
            75
          );


          const mpriPlayer2 = calculateMPRI(
            match.momentum.player2,
            match.fatigue.player2,
            80,
            30,
            75
          );



          return (

            <div
              key={match.id}
              className="rounded-2xl bg-gray-900 p-8"
            >


              <h2 className="text-3xl font-bold">
                {match.player1}
                {" vs "}
                {match.player2}
              </h2>


              <p className="text-gray-400 mt-2">
                {match.tournament} • {match.surface}
              </p>



              <div className="mt-6 space-y-3">


                <p>
                  Prediction:
                  <span className="font-bold ml-2">
                    {match.prediction}
                  </span>
                </p>


                <p>
                  AI Win Probability:
                </p>


                <p className="text-2xl font-bold">
                  {prediction.playerA}%
                  {" - "}
                  {prediction.playerB}%
                </p>



                <p>
                  Confidence:
                  {" "}
                  {prediction.confidence}%
                </p>



                <p>
                  Fatigue:
                  {" "}
                  {match.fatigue.player1}
                  {" - "}
                  {match.fatigue.player2}
                </p>



                <p>
                  MPRI:
                  {" "}
                  {mpriPlayer1}
                  {" - "}
                  {mpriPlayer2}
                </p>


              </div>



            </div>

          );


        })}


      </div>


    </main>

  );

}