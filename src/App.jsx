import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navigation from "./components/Navigation.jsx"
import CharacterList from "./routes/CharacterList.jsx"

const App = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<CharacterList />} />
      </Routes>
    </Router>
  )
}
const Home = () => {
  return <h2>Welcome to Star Wars Info</h2>
}

export default App
