import { useEffect } from "react"

interface ScoreProps {
  toggleModal: () => void
}
export function Score({ toggleModal }: ScoreProps) {
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
    <form className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-60 z-20 w-screen backdrop-filter backdrop-blur-[1px]">
      <div
        id="modal"
        className="absolute z-20 flex flex-col bg-background rounded-lg justify-center p-10 text-lg "
      >
        <input
          type="text"
          placeholder="Name"
          required
          className="p-2 bg-gradient2 w-40 rounded-md"
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
