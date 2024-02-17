import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Header } from "./components/Header"
import { TypingTest } from "./components/TypingTest"

function App() {
  return (
    <Router>
      <div className="font-cascadia-mono text-[#f1e2e4] bg-[#2b2b2c] h-screen">
        <Header />
        <Routes>
          <Route path="/" Component={TypingTest} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
