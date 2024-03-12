const express = require("express")
const mongoose = require("mongoose")
require("dotenv").config()

const app = express()
app.use(express.json())

const scoresRouter = require("./routes/scores")
app.use("/scores", scoresRouter)

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
const db = mongoose.connection
db.on("error", console.error.bind(console, "MongoDB connection error:"))
db.once("open", () => console.log("Connected to MongoDB"))

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
