const mongoose = require("mongoose")

const scoreSchema = new mongoose.Schema({
  name: { type: String, required: true },
  wpm: { type: Number, required: true },
  acc: { type: Number, required: true, min: 0, max: 100 },
  date: { type: Date, default: Date.now },
})

const Score = mongoose.model("Score", scoreSchema)

module.exports = Score
