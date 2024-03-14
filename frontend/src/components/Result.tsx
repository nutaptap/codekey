import { useLocation } from "react-router-dom"
import { calculateWPM } from "../utils/calculateWPM"
import { calculateAccuracy } from "../utils/calculateAccuracy"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js"
import { Doughnut } from "react-chartjs-2"
import { useEffect, useState } from "react"
import { Score } from "./Score"

ChartJS.register(ArcElement, Tooltip, Legend)

export function Result() {
  const { state } = useLocation()
  const [subColor, setSubColor] = useState("")
  const [errorColor, setErrorColor] = useState("")
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

  useEffect(() => {
    const gelatoRoot = document.querySelector(".gelato")
    const lilacMistRoot = document.querySelector(".lilac-mist")
    const lunarTreatRoot = document.querySelector(".lunar-treat")
    const midnightRoot = document.querySelector(".midnight")
    const mosseryRoot = document.querySelector(".mossery")
    const spellboundRoot = document.querySelector(".spellbound")
    const wyvernRoot = document.querySelector(".wyvern")

    const root =
      gelatoRoot ||
      lilacMistRoot ||
      lunarTreatRoot ||
      midnightRoot ||
      mosseryRoot ||
      spellboundRoot ||
      wyvernRoot

    if (root) {
      const styles = getComputedStyle(root)
      const getSubColor = styles.getPropertyValue("--sub-color")
      const getErrorColor = styles.getPropertyValue("--error-color")

      setSubColor(getSubColor)
      setErrorColor(getErrorColor)
    }
  }, [])

  const data = {
    labels: ["Accurate", "Error"],
    datasets: [
      {
        label: "Accuracy",
        data: [accurate, wrong],
        backgroundColor: [subColor, errorColor],
        borderColor: [subColor, errorColor],
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

  const [modalOpen, setModalOpen] = useState(false)
  function toggleModal() {
    setModalOpen(!modalOpen)
  }

  return (
    <main className="my-auto flex flex-col items-center select-none">
      <article className="flex space-x-20 items-center text-md tracking-widest text-center">
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
      </article>
      <section className="mt-10">
        <button
          onClick={toggleModal}
          className="text-xl bg-gradient1 p-1 px-4 rounded-xl hover:bg-gradient2 duration-200"
        >
          save score
        </button>
      </section>
      {modalOpen && (
        <Score
          toggleModal={toggleModal}
          score={{
            wpm: Math.round(calculateWPM(totalScore, maxTime)),
            acc: accurate,
            time: secondsToMinutes(maxTime),
          }}
        />
      )}
    </main>
  )
}
