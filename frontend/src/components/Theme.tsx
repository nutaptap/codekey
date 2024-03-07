import { useEffect } from "react"

interface ThemeProps {
  toggleModal: () => void
  switchTheme: (theme: string) => void
  theme: string
}

export function Theme({ toggleModal, switchTheme, theme }: ThemeProps) {
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

  function isCurrentTheme(buttonTheme: string) {
    return buttonTheme === theme
  }

  return (
    <div className="absolute h-screen min-h-screen flex items-center justify-center bg-gray-900 bg-opacity-60 z-20 w-screen backdrop-filter backdrop-blur-[1px]">
      <article
        id="modal"
        className="text-xs text-[#2f2a41] w-[200px] bg-main rounded-2xl absolute z-20 flex flex-col space-y-2 items-center justify-center p-6"
      >
        <button
          onClick={handleClick}
          data-theme="gelato"
          className={`rounded-xl p-2 flex justify-between items-center w-40 ${
            isCurrentTheme("gelato") ? "bg-gradient3" : "bg-gradient1"
          }`}
        >
          <span>gelato</span>
          <div className="bg-[#ffffff] flex rounded-xl space-x-1 p-[6px] px-2">
            <div className="rounded-xl w-[10px] h-[10px] bg-[#7c9ce0]"></div>
            <div className="rounded-xl w-[10px] h-[10px] bg-[#6f7a94]"></div>
            <div className="rounded-xl w-[10px] h-[10px] bg-[#212b43]"></div>
          </div>
        </button>
        <button
          onClick={handleClick}
          data-theme="midnight"
          className={`rounded-xl p-2 flex justify-between items-center w-40 ${
            isCurrentTheme("midnight") ? "bg-gradient3" : "bg-gradient1"
          }`}
        >
          <span>midnight</span>
          <div className="bg-[#2b2b2c] flex rounded-xl space-x-1 p-[6px] px-2">
            <div className="rounded-xl w-[10px] h-[10px] bg-[#72689a]"></div>
            <div className="rounded-xl w-[10px] h-[10px] bg-[#d8a0ad]"></div>
            <div className="rounded-xl w-[10px] h-[10px] bg-[#f1e2e4]"></div>
          </div>
        </button>
        <button
          onClick={handleClick}
          data-theme="lilac-mist"
          className={`rounded-xl p-2 flex justify-between items-center w-40 ${
            isCurrentTheme("lilac-mist") ? "bg-gradient3" : "bg-gradient1"
          }`}
        >
          <span>lilac mist</span>
          <div className="bg-[#ada6c2] flex rounded-xl space-x-1 p-[6px] px-2">
            <div className="rounded-xl w-[10px] h-[10px] bg-[#e9bad8]"></div>
            <div className="rounded-xl w-[10px] h-[10px] bg-[#8475b6]"></div>
            <div className="rounded-xl w-[10px] h-[10px] bg-[#2f2a41]"></div>
          </div>
        </button>
        <button
          onClick={handleClick}
          data-theme="mossery"
          className={`rounded-xl p-2 flex justify-between items-center w-40 ${
            isCurrentTheme("mossery") ? "bg-gradient3" : "bg-gradient1"
          }`}
        >
          <span>mossery</span>
          <div className="bg-[#2c3333] flex rounded-xl space-x-1 p-[6px] px-2">
            <div className="rounded-xl w-[10px] h-[10px] bg-[#799f81]"></div>
            <div className="rounded-xl w-[10px] h-[10px] bg-[#8bcbb7]"></div>
            <div className="rounded-xl w-[10px] h-[10px] bg-[#f3e4df]"></div>
          </div>
        </button>
        <button
          onClick={handleClick}
          data-theme="spellbound"
          className={`rounded-xl p-2 flex justify-between items-center w-40 ${
            isCurrentTheme("spellbound") ? "bg-gradient3" : "bg-gradient1"
          }`}
        >
          <span>spellbound</span>
          <div className="bg-[#f4edec] flex rounded-xl space-x-1 p-[6px] px-2">
            <div className="rounded-xl w-[10px] h-[10px] bg-[#d4c3c2]"></div>
            <div className="rounded-xl w-[10px] h-[10px] bg-[#93b3a6]"></div>
            <div className="rounded-xl w-[10px] h-[10px] bg-[#56786a]"></div>
          </div>
        </button>
        <button
          onClick={handleClick}
          data-theme="lunar-treat"
          className={`rounded-xl p-2 flex justify-between items-center w-40 ${
            isCurrentTheme("lunar-treat") ? "bg-gradient3" : "bg-gradient1"
          }`}
        >
          <span>lunar treat</span>
          <div className="bg-[#2a273f] flex rounded-xl space-x-1 p-[6px] px-2">
            <div className="rounded-xl w-[10px] h-[10px] bg-[#b090d8]"></div>
            <div className="rounded-xl w-[10px] h-[10px] bg-[#f8cb8c]"></div>
            <div className="rounded-xl w-[10px] h-[10px] bg-[#edebf9]"></div>
          </div>
        </button>
        <button
          onClick={handleClick}
          data-theme="wyvern"
          className={`rounded-xl p-2 flex justify-between items-center w-40 ${
            isCurrentTheme("wyvern") ? "bg-gradient3" : "bg-gradient1"
          }`}
        >
          <span>wyvern</span>
          <div className="bg-[#efe1ec] flex rounded-xl space-x-1 p-[6px] px-2">
            <div className="rounded-xl w-[10px] h-[10px] bg-[#905bd6]"></div>
            <div className="rounded-xl w-[10px] h-[10px] bg-[#b69cc4]"></div>
            <div className="rounded-xl w-[10px] h-[10px] bg-[#212b43]"></div>
          </div>
        </button>
      </article>
    </div>
  )
}
