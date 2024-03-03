import { useLocation } from "react-router-dom"
import { calculateWPM } from "../utils/calculateWPM"
import { calculateAccuracy } from "../utils/calculateAccuracy"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js"
import { Doughnut } from "react-chartjs-2"

ChartJS.register(ArcElement, Tooltip, Legend)

export function Result() {
  const { state } = useLocation()
  const totalScore = state && state.totalScore ? state.totalScore : 0
  const totalMistakes = state && state.totalMistakes ? state.totalMistakes : 0
  const maxTime = state && state.maxTime ? state.maxTime : 0
  const accurate = Math.round(calculateAccuracy(totalScore, totalMistakes))
  const wrong = 100 - accurate
  const minutes: { [key: number]: string } = {
    15: "00:15",
    30: "00:30",
    60: "01:00",
    120: "02:00",
  }

  function secondsToMinutes(seconds: number) {
    return minutes[seconds]
  }

  const data = {
    labels: ["Accurate", "Error"],
    datasets: [
      {
        label: "Accuracy",
        data: [accurate, wrong],
        backgroundColor: ["#d8a0a6", "#d44729"],
        borderColor: ["#d8a0a6", "#d44729"],
        circumference: 180,
        rotation: 270,
      },
    ],
  }

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
  }

  return (
    <main className="flex space-x-20 items-center text-md tracking-widest text-center my-auto">
      <section className="flex flex-col">
        <span className="text-sub">wpm</span>
        <span className="text-3xl">
          {Math.round(calculateWPM(totalScore, maxTime))}
        </span>
      </section>
      <section className="flex items-center space-x-5">
        <div className="flex flex-col">
          <span className="text-sub">acc</span>
          <span className="text-3xl">{accurate}%</span>
        </div>
        <span className="w-20">
          <Doughnut data={data} options={options} />
        </span>
      </section>
      <section className="flex flex-col items-center">
        <span className="text-sub">time</span>
        <span className="text-3xl">{secondsToMinutes(maxTime)}</span>
      </section>
    </main>
  )
}
