
import './App.css'
import { HashRouter, Routes, Route } from "react-router-dom"
import Homepage from "./components/Homepage"
import Videopage from "./components/Videopage"

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/room/:id" element={<Videopage />} />
      </Routes>
    </HashRouter>
  )
}

export default App

