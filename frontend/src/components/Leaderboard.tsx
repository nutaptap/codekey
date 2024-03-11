import { useEffect } from "react"

interface LeaderboardProps {
  toggleModal: () => void
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

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-60 z-20 w-screen backdrop-filter backdrop-blur-[1px] select-none">
      <main id="modal" className="absolute z-20 flex flex-col items-end">
        <div className="bg-background rounded-lg p-6 pt-10 text-lg text-sub w-[590px] h-[325px] overflow-hidden">
          <div className="rounded-lg overflow-auto max-h-[250px] custom-scrollbar flex justify-center">
            <table className="text-left mr-2">
              <thead>
                <tr className="text-neutral text-sm">
                  <th className="px-4 py-2">#</th>
                  <th className="px-4 py-2">name</th>
                  <th className="px-4 py-2">wpm</th>
                  <th className="px-4 py-2">acc</th>
                  <th className="px-4 py-2">time</th>
                  <th className="px-4 py-2">date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2 bg-neutral rounded-l-lg">1</td>
                  <td className="px-4 py-2 bg-neutral">Joe</td>
                  <td className="px-4 py-2 bg-neutral">65</td>
                  <td className="px-4 py-2 bg-neutral">98%</td>
                  <td className="px-4 py-2 bg-neutral">00:30</td>
                  <td className="px-4 py-2 bg-neutral rounded-r-lg">
                    2024/03/01
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2">2</td>
                  <td className="px-4 py-2">Steph</td>
                  <td className="px-4 py-2">72</td>
                  <td className="px-4 py-2">95%</td>
                  <td className="px-4 py-2">01:00</td>
                  <td className="px-4 py-2">2024/03/02</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">3</td>
                  <td className="px-4 py-2">Rona</td>
                  <td className="px-4 py-2">68</td>
                  <td className="px-4 py-2">97%</td>
                  <td className="px-4 py-2">00:15</td>
                  <td className="px-4 py-2">2024/03/03</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">4</td>
                  <td className="px-4 py-2">Kathi</td>
                  <td className="px-4 py-2">70</td>
                  <td className="px-4 py-2">96%</td>
                  <td className="px-4 py-2">02:00</td>
                  <td className="px-4 py-2">2024/03/04</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">5</td>
                  <td className="px-4 py-2">Eris</td>
                  <td className="px-4 py-2">03</td>
                  <td className="px-4 py-2">0%</td>
                  <td className="px-4 py-2">00:15</td>
                  <td className="px-4 py-2">2024/03/05</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  )
}
