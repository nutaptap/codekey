export function calculateWPM(score: number, time: number) {
  const words = score / 5
  const minutes = time / 60
  const WPM = words / minutes

  return WPM
}
