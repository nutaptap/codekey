import { useRef, useState, useEffect } from "react"

export function TypingTest() {
  const originalCode = "console.log('potato')"
  const [typedCode, setTypedCode] = useState("")
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const specialKeys = [
        "Shift",
        "CapsLock",
        "Tab",
        "Insert",
        "Home",
        "End",
        "PageUp",
        "PageDown",
        "ArrowLeft",
        "ArrowUp",
        "ArrowRight",
        "ArrowDown",
        "Alt",
        "AltGraph",
      ]

      if (specialKeys.includes(e.key) || e.key.startsWith("F")) {
        e.preventDefault()
        return
      }

      if (e.key === "Backspace" || e.key === "Delete") {
        if (typedCode.length > 0) {
          setTypedCode((prevTypedCode) => prevTypedCode.slice(0, -1))
        }
        return
      }

      const char = e.key
      setTypedCode((prevTypedCode) => prevTypedCode + char)
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [typedCode])

  return (
    <section>
      <article className="relative my-20">
        <div onClick={() => inputRef.current && inputRef.current.focus()}>
          {originalCode.split("").map((char, index) => (
            <span
              className={`${typedCode.length === index + 1 ? "caret" : ""} ${
                typedCode[index] === char
                  ? "text-[#f1e2e4]"
                  : typedCode[index]
                  ? "text-[#d44729]"
                  : "text-[#d8a0a6]"
              }`}
              key={index}
            >
              {char}
            </span>
          ))}
        </div>
      </article>
    </section>
  )
}
