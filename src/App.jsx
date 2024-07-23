import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navigation from "./components/Navigation.jsx"
import CharacterList from "./routes/CharacterList.jsx"
import CharacterDetails from "./components/CharacterDetails.jsx"
import ErrorBoundary from "./components/ErrorBoundary.jsx"

const App = () => {
  return (
    <Router>
      <ErrorBoundary>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/characters" element={<CharacterList />} />
          <Route path="/characters/:id" element={<CharacterDetails />} />
        </Routes>
      </ErrorBoundary>
    </Router>
  )
}
const Home = () => {
  return <h2>Welcome to Star Wars Info</h2>
}

export default App
