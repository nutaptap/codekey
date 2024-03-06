import { useEffect } from "react"

interface ThemeProps {
  toggleModal: () => void
  switchTheme: (theme: string) => void
}

export function Theme({ toggleModal, switchTheme }: ThemeProps) {
  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    const theme = (e.currentTarget as HTMLButtonElement).getAttribute(
      "data-theme"
    )
    theme && switchTheme(theme)
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
    <div className="absolute h-screen min-h-screen flex items-center justify-center bg-gray-900 bg-opacity-60 z-20 w-screen backdrop-filter backdrop-blur-[1px]">
      <article
        id="modal"
        className="w-[200px] h-[400px] bg-main rounded-2xl absolute z-20 flex flex-col space-y-2 items-center justify-center p-8"
      >
        <button
          onClick={handleClick}
          data-theme="gelato"
          className="rounded-xl p-1 border border-text"
        >
          Gelato
        </button>
        <button
          onClick={handleClick}
          data-theme="lilac-mist"
          className="rounded-xl p-1 border border-text"
        >
          Lilac Mist
        </button>
        <button
          onClick={handleClick}
          data-theme="lunar-treat"
          className="rounded-xl p-1 border border-text"
        >
          Lunar Treat
        </button>
        <button
          onClick={handleClick}
          data-theme="midnight"
          className="rounded-xl p-1 border border-text"
        >
          Midnight
        </button>
        <button
          onClick={handleClick}
          data-theme="mossery"
          className="rounded-xl p-1 border border-text"
        >
          Mossery
        </button>
        <button
          onClick={handleClick}
          data-theme="spellbound"
          className="rounded-xl p-1 border border-text"
        >
          Spellbound
        </button>
        <button
          onClick={handleClick}
          data-theme="wyvern"
          className="rounded-xl p-1 border border-text"
        >
          Wyvern
        </button>
      </article>
    </div>
  )
}
