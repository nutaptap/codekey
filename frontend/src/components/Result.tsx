import { useLocation } from "react-router-dom"

export function Result() {
  const { state } = useLocation()
  const totalScore = state && state.totalScore ? state.totalScore : 0
  const totalMistakes = state && state.totalMistakes ? state.totalMistakes : 0
  console.log(totalScore, totalMistakes)
  return (
    <>
      <div>score: {totalScore}</div>
      <div>mistakes: {totalMistakes}</div>
    </>
  )
}
