import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { TypingTest } from "./components/TypingTest"
import { Result } from "./components/Result"
import { useState } from "react"

function App() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "midnight"
  )

  function switchTheme(theme: string) {
    setTheme(theme)
    localStorage.setItem("theme", theme)
  }

  return (
    <Router>
      <div
        className={`font-cascadia-mono text-text bg-background h-screen min-h-screen flex flex-col items-center ${theme}`}
      >
        <Header switchTheme={switchTheme} theme={theme} />
        <Routes>
          <Route path="/" element={<TypingTest />} />
          <Route path="/result" element={<Result />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
