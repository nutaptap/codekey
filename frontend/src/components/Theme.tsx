import { useEffect } from "react"

export function Theme({ toggleModal }: { toggleModal: () => void }) {
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
    <div className="absolute h-screen min-h-screen flex items-center justify-center bg-gray-900 bg-opacity-60 z-20 w-screen backdrop-filter backdrop-blur-[1px]">
      <article
        id="modal"
        className="w-[200px] h-[400px] bg-main rounded-2xl absolute z-20 flex flex-col space-y-2 items-center justify-center p-8"
      >
        <button className="rounded-xl p-1 border border-text">Midnight</button>
        <button className="rounded-xl p-1 border border-text">Wyvern</button>
        <button className="rounded-xl p-1 border border-text">
          Lilac Mist
        </button>
        <button className="rounded-xl p-1 border border-text">Mossery</button>
        <button className="rounded-xl p-1 border border-text">Gelato</button>
        <button className="rounded-xl p-1 border border-text">
          Lunar Treat
        </button>
        <button className="rounded-xl p-1 border border-text">
          Spellbound
        </button>
      </article>
    </div>
  )
}
