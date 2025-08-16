import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./components/Header.tsx"
import Home from "./components/Home.tsx"
import About from "./components/About.tsx"
import Opportunities from "./components/Opportunities.tsx"
import Events from "./components/Events.tsx"
import Join from "./components/Join.tsx"

const App = () => {
  return (
    <Router>
      <Header />
      <main className="p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/opportunities" element={<Opportunities />} />
          <Route path="/events" element={<Events />} />
          <Route path="/join" element={<Join />} />
        </Routes>
      </main>
    </Router>
  )
}

export default App
