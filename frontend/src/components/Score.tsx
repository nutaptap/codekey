import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

interface ScoreProps {
  toggleModal: () => void
  score: {
    wpm: number
    acc: number
    time: string
  }
}
export function Score({ toggleModal, score }: ScoreProps) {
  const navigate = useNavigate()
  const [name, setName] = useState("")

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    try {
      await fetch("https://codekey.cyclic.app/scores", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, ...score }),
      })
      toggleModal()
      navigate("/saved")
    } catch (error) {
      console.error("Error posting score:", error)
    }
  }

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
    <form
      onSubmit={handleSubmit}
      className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-60 z-20 w-screen backdrop-filter backdrop-blur-[1px]"
    >
      <div
        id="modal"
        className="absolute z-20 flex flex-col bg-background rounded-lg justify-center p-10 text-lg "
      >
        <input
          type="text"
          placeholder="Name"
          required
          className="p-2 bg-neutral w-40 rounded-md"
          value={name}
          onChange={(e) => setName(e.target.value)}
          maxLength={16}
        />

        <button
          type="submit"
          className="mt-10 rounded-lg font-semibold tracking-widest bg-sub hover:bg-subAlt duration-200"
        >
          save
        </button>
      </div>
    </form>
  )
}
