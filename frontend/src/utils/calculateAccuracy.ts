export function calculateAccuracy(score: number, mistakes: number) {
  const accurate = score - mistakes
  const percentage = (accurate / score) * 100
  return percentage
}
