import { useState, useEffect } from "react"

export function TypingTest() {
  const originalCode = ["function potato()", "{console.log('potato')}"]
  const initialTypedCode = originalCode.map(() => "")
  const [typedCode, setTypedCode] = useState(initialTypedCode)
  const [currentLine, setCurrentLine] = useState(0)

  function isCorrect(arrayIndex, charIndex) {
    const charOne = originalCode[arrayIndex]?.[charIndex]
    const charTwo = typedCode[arrayIndex]?.[charIndex]

    return charOne === charTwo ? true : false
  }

  function isTyped(arrayIndex, charIndex) {
    const char = typedCode[arrayIndex]?.[charIndex]

    return char === undefined ? false : true
  }

  useEffect(() => {
    const handleKeyDown = (e) => {
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

      if (e.key === "Enter") {
        if (originalCode.length == currentLine + 1) {
          return
        } else {
          const newLine = currentLine + 1
          setCurrentLine(newLine)
          return
        }
      }

      if (e.key === "Backspace" || e.key === "Delete") {
        if (typedCode[currentLine].length === 0 && currentLine !== 0) {
          const newLine = currentLine - 1
          setCurrentLine(newLine)
          setTypedCode((prevTypedCode) => {
            const updatedTypedCode = [...prevTypedCode]
            updatedTypedCode[newLine] = prevTypedCode[newLine].slice(0, -1)
            return updatedTypedCode
          })
          return
        }

        setTypedCode((prevTypedCode) => {
          const updatedTypedCode = [...prevTypedCode]
          updatedTypedCode[currentLine] = prevTypedCode[currentLine].slice(
            0,
            -1
          )
          return updatedTypedCode
        })
        return
      }

      const char = e.key
      setTypedCode((prevTypedCode) => {
        const updatedTypedCode = [...prevTypedCode]
        updatedTypedCode[currentLine] += char
        return updatedTypedCode
      })
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [typedCode, currentLine, originalCode])

  return (
    <section>
      <article className="relative my-20">
        <div className="mb-8">
          {originalCode.map((line, lineIndex) => (
            <p key={lineIndex}>
              {line.split("").map((char, charIndex) => (
                <span
                  key={charIndex}
                  className={[
                    isTyped(lineIndex, charIndex)
                      ? isCorrect(lineIndex, charIndex)
                        ? "text-[#f1e2e4]"
                        : "text-[#d44729]"
                      : "text-[#d8a0a6]",
                    currentLine === lineIndex &&
                    typedCode[currentLine].length === charIndex + 1
                      ? "caret"
                      : "",
                    currentLine === lineIndex &&
                    charIndex === 0 &&
                    typedCode[currentLine].length === 0
                      ? "reverse"
                      : "",
                  ].join(" ")}
                >
                  {char}
                </span>
              ))}
            </p>
          ))}
        </div>
      </article>
    </section>
  )
}
