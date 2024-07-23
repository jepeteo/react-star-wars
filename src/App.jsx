import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navigation from "./components/Navigation.jsx"
import ErrorBoundary from "./components/ErrorBoundary.jsx"
import { Suspense, lazy } from "react"

const Home = () => {
  return <h2>Welcome to Star Wars Info</h2>
}

const CharacterList = lazy(() => import("./routes/CharacterList.jsx"))
const CharacterDetails = lazy(() => import("./components/CharacterDetails.jsx"))

const App = () => {
  return (
    <Router>
      <ErrorBoundary>
        <Navigation />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/characters" element={<CharacterList />} />
            <Route path="/characters/:id" element={<CharacterDetails />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </Router>
  )
}

export default App
