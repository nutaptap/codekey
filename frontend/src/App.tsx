import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { TypingTest } from "./components/TypingTest"
import { Result } from "./components/Result"
import { useState } from "react"
import { About } from "./components/About"
import { Saved } from "./components/Saved"

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
        className={`font-cascadia-mono text-text bg-background w-screen min-w-screen h-screen min-h-screen flex flex-col items-center overflow-x-hidden custom-scrollbar ${theme}`}
      >
        <Header switchTheme={switchTheme} theme={theme} />
        <Routes>
          <Route path="/" element={<TypingTest />} />
          <Route path="/result" element={<Result />} />
          <Route path="/about" element={<About />} />
          <Route path="/saved" element={<Saved />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
