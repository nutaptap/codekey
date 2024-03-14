import { useEffect, useState } from "react"

interface LeaderboardProps {
  toggleModal: () => void
}

interface Score {
  _id: string
  name: string
  wpm: number
  acc: number
  time: string
  date: string
}

export function Leaderboard({ toggleModal }: LeaderboardProps) {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const modal = document.getElementById("modal")
      const isClickedOutside = modal && !modal.contains(event.target as Node)
      if (isClickedOutside) {
        toggleModal()
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [toggleModal])

  const [scores, setScores] = useState<Score[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://codekey.cyclic.app/scores")
        if (!response.ok) {
          throw new Error("Failed to fetch scores")
        }
        const data = await response.json()
        setScores(data)
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    }

    fetchData()
  }, [])

  function formatDate(dateString: string): string {
    const date = new Date(dateString)
    const day = date.getDate().toString().padStart(2, "0")
    const month = (date.getMonth() + 1).toString().padStart(2, "0")
    const year = date.getFullYear()

    return `${day}/${month}/${year}`
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-60 z-20 w-screen backdrop-filter backdrop-blur-[1px] ">
      <main id="modal" className="absolute z-20 flex flex-col items-end">
        <div className="bg-background rounded-lg p-6 pt-10 text-lg text-sub w-[590px] h-[325px] overflow-hidden">
          <div className="rounded-lg overflow-auto max-h-[250px] custom-scrollbar flex justify-center">
            <table className="text-left mr-2 text-sm">
              <thead>
                <tr className="text-neutral text-xs">
                  <th className="px-4 py-2">#</th>
                  <th className="px-4 py-2">name</th>
                  <th className="px-4 py-2">wpm</th>
                  <th className="px-4 py-2">acc</th>
                  <th className="px-4 py-2">time</th>
                  <th className="px-4 py-2">date</th>
                </tr>
              </thead>
              <tbody>
                {scores.map((score, index) => (
                  <tr key={score._id}>
                    <td
                      className={`px-4 py-2 ${
                        index === 0 ? "bg-neutral rounded-l-lg" : ""
                      }`}
                    >
                      {index + 1}
                    </td>
                    <td
                      className={`px-4 py-2 ${index === 0 ? "bg-neutral" : ""}`}
                    >
                      {score.name}
                    </td>
                    <td
                      className={`px-4 py-2 ${index === 0 ? "bg-neutral" : ""}`}
                    >
                      {score.wpm}
                    </td>
                    <td
                      className={`px-4 py-2 ${index === 0 ? "bg-neutral" : ""}`}
                    >
                      {score.acc}%
                    </td>
                    <td
                      className={`px-4 py-2 ${index === 0 ? "bg-neutral" : ""}`}
                    >
                      {score.time}
                    </td>
                    <td
                      className={`px-4 py-2 ${
                        index === 0 ? "bg-neutral rounded-r-lg" : ""
                      }`}
                    >
                      {formatDate(score.date)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  )
}
