import { useState, useEffect, useCallback } from "react"
import { useNavigate } from "react-router-dom"
import { codeBlocks } from "../data/codeBlocks.json"
import { TimeMenu } from "./TimeMenu"

function getRandom() {
  const maxLength = codeBlocks.length
  const randomIndex = Math.floor(Math.random() * maxLength)
  return codeBlocks[randomIndex]
}

export function TypingTest() {
  const navigate = useNavigate()
  const [originalCode, setOriginalCode] = useState(getRandom())
  const initialTypedCode = originalCode.map(() => "")
  const [typedCode, setTypedCode] = useState(initialTypedCode)
  const [currentLine, setCurrentLine] = useState(0)
  const [time, setTime] = useState(15)
  const [maxTime, setMaxTime] = useState(time)
  const [score, setScore] = useState(0)
  const [mistakes, setMistakes] = useState(0)
  const [start, setStart] = useState(false)

  function isCorrect(arrayIndex: number, charIndex: number) {
    const charOne = originalCode[arrayIndex]?.[charIndex]
    const charTwo = typedCode[arrayIndex]?.[charIndex]

    return charOne === charTwo ? true : false
  }

  function isTyped(arrayIndex: number, charIndex: number) {
    const char = typedCode[arrayIndex]?.[charIndex]

    return char === undefined ? false : true
  }

  const completeCodeBlock = useCallback(() => {
    function calculateScore() {
      const thisScore = typedCode.reduce(
        (total, string) => total + string.length,
        0
      )
      const totalScore = thisScore + score
      return totalScore
    }

    function calculateMistakes() {
      const totalMistakes = originalCode.reduce((total, line, lineIndex) => {
        let thisMistakes = 0
        for (let charIndex = 0; charIndex < line.length; charIndex++) {
          if (typedCode[lineIndex]?.[charIndex] !== line[charIndex]) {
            thisMistakes++
          }
        }
        return total + thisMistakes
      }, 0)

      return mistakes + totalMistakes
    }

    setScore(calculateScore())
    setMistakes(calculateMistakes())
    const newCodeBlock = getRandom()
    setOriginalCode(newCodeBlock)
    setTypedCode(initialTypedCode)
    setCurrentLine(0)
  }, [initialTypedCode, mistakes, originalCode, score, typedCode])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        location.reload()
        return
      }

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

      if (
        specialKeys.includes(e.key) ||
        (e.key.length > 1 && e.key.startsWith("F"))
      ) {
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

      if (typedCode[currentLine].length < originalCode[currentLine].length) {
        setTypedCode((prevTypedCode) => {
          const updatedTypedCode = [...prevTypedCode]
          updatedTypedCode[currentLine] += e.key

          return updatedTypedCode
        })
      }

      if (start === false) {
        setStart(true)
        let intervalId: number | undefined = undefined

        intervalId = setInterval(() => {
          setTime((prevTime) => {
            if (prevTime > 0) {
              return prevTime - 1
            } else {
              clearInterval(intervalId)
              return prevTime
            }
          })
        }, 1000)

        return () => clearInterval(intervalId)
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [
    typedCode,
    currentLine,
    originalCode,
    time,
    maxTime,
    initialTypedCode,
    mistakes,
    score,
    start,
    completeCodeBlock,
    navigate,
  ])

  useEffect(() => {
    if (
      currentLine === originalCode.length - 1 &&
      typedCode[currentLine].length === originalCode[currentLine].length
    ) {
      completeCodeBlock()
    }
  }, [typedCode, originalCode, currentLine, completeCodeBlock])

  function handleTime(e: React.MouseEvent<HTMLLIElement>) {
    const newTime = parseInt((e.target as HTMLLIElement).textContent ?? "0", 10)
    if (time >= maxTime) {
      setMaxTime(newTime)
      setTime(newTime)
    }
  }

  useEffect(() => {
    if (time === 0) {
      const thisScore = typedCode.reduce(
        (total, string) => total + string.length,
        0
      )
      const totalScore = thisScore + score

      const thislMistakes = typedCode.reduce((total, line, lineIndex) => {
        let mistakes = 0
        for (let charIndex = 0; charIndex < line.length; charIndex++) {
          if (originalCode[lineIndex]?.[charIndex] !== line[charIndex]) {
            mistakes++
          }
        }
        return total + mistakes
      }, 0)
      const totalMistakes = thislMistakes + mistakes

      navigate("/result", { state: { totalScore, totalMistakes, maxTime } })
    }
  }, [
    time,
    maxTime,
    navigate,
    completeCodeBlock,
    score,
    mistakes,
    originalCode,
    typedCode,
  ])

  return (
    <section>
      {start === false ? (
        <div className="flex justify-center">
          <TimeMenu handleTime={handleTime} time={time} />
        </div>
      ) : (
        <div className="text-center my-10 text-lg text-[#76689a]">{time}</div>
      )}
      <article className="relative my-16 text-xl">
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
      {start === true && (
        <div className="text-[#655d6d] text-center">
          Press{" "}
          <span className="text-[#2b2b2c] mr-1 bg-[#655d6d] rounded-lg p-1">
            Esc
          </span>{" "}
          to reset
        </div>
      )}
    </section>
  )
}
