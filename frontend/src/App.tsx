import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { Codetype } from "./components/Codetype"

function App() {
  return (
    <Router>
      <div className="font-cascadia-mono text-[#f1e2e4] bg-[#2b2b2c] h-screen min-h-screen flex flex-col items-center">
        <Header />
        <Routes>
          <Route path="/" Component={Codetype} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
