const express = require("express")
const router = express.Router()
const Score = require("../models/score")

router.get("/", async (req, res) => {
  try {
    const scores = await Score.find()

    const rankedScores = scores.map((score) => ({
      ...score,
      ranking: score.wpm - (100 - score.acc),
    }))

    rankedScores.sort((a, b) => b.ranking - a.ranking)

    res.json(rankedScores)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

router.post("/", async (req, res) => {
  const score = new Score({
    name: req.body.name,
    wpm: req.body.wpm,
    acc: req.body.acc,
    time: req.body.time,
  })

  try {
    const newScore = await score.save()
    res.status(201).json(newScore)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

module.exports = router
