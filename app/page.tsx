import { matches } from "@/data/matches";
import { calculatePrediction, calculateMPRI } from "@/lib/predictionEngine";

export default function Home() {

  return (

    <main className="min-h-screen bg-black text-white p-10">


      <h1 className="text-5xl font-bold">
        TennisQuant 🎾
      </h1>


      <p className="mt-3 text-gray-400">
        AI Tennis Analytics & Predictions
      </p>



      <div className="grid gap-6 mt-10">


        {matches.map((match)=> (const prediction = calculatePrediction(
match.elo.player1,
match.elo.player2,
match.momentum.player1,
match.momentum.player2
);


          <div
          key={match.id}
          className="rounded-2xl bg-gray-900 p-8"
          >


          <h2 className="text-3xl font-bold">
            {match.player1} 
            <span className="text-gray-500">
             {" "}vs{" "}
            </span>
            {match.player2}
          </h2>


          <p className="text-gray-400 mt-2">
            {match.tournament} • {match.surface}
          </p>



          <div className="grid md:grid-cols-4 gap-4 mt-6">


            <div>
              <p className="text-gray-400">
                Prediction
              </p>

              <p className="font-bold">
                {match.prediction}
              </p>
            </div>



            <div>
              <p className="text-gray-400">
                Confidence
              </p>

              <p className="font-bold">
                {match.confidence}%
              </p>
            </div>



            <div>
              <p className="text-gray-400">
                MPRI
              </p>

              <p className="font-bold">
                {match.mpri.player1}/100
              </p>
            </div>



            <div>
              <p className="text-gray-400">
                Value Bet
              </p>

              <p className="font-bold">
                {match.valueBet ? "YES" : "NO"}
              </p>
            </div>


          </div>



          <div className="mt-6">

            <p>
              Win Probability:
            </p>


            <p className="text-xl font-bold">
              {prediction.playerA}%
              {" - "}
              {prediction.playerB}%
            </p>

          </div>


          </div>


        ))}



      </div>


    </main>

  );

}