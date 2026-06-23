import { matches } from "@/data/matches";

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

        {matches.map((match) => (

          <div
            key={match.id}
            className="rounded-xl bg-gray-900 p-6"
          >

            <h2 className="text-2xl font-bold">
              {match.player1} vs {match.player2}
            </h2>

            <p className="text-gray-400">
              {match.tournament} - {match.surface}
            </p>


            <div className="mt-4 space-y-2">

              <p>
                Prediction:
                <span className="font-bold ml-2">
                  {match.prediction}
                </span>
              </p>


              <p>
                Win Probability:
                {match.player1Probability}% - {match.player2Probability}%
              </p>


              <p>
                Confidence:
                {match.confidence}%
              </p>

            </div>

          </div>

        ))}


      </div>


    </main>
  );
}