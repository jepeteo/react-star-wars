import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import Navigation from "./components/Navigation.jsx"
import ErrorBoundary from "./components/ErrorBoundary.jsx"
import { Suspense, lazy } from "react"

const Home = () => {
  return <h2>Welcome to Star Wars Info</h2>
}

const CharacterList = lazy(() => import("./routes/CharacterList.jsx"))
const CharacterDetails = lazy(() => import("./components/CharacterDetails.jsx"))

const AnimatedRoutes = () => {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<CharacterList />} />
        <Route path="/characters/:id" element={<CharacterDetails />} />
      </Routes>
    </AnimatePresence>
  )
}

const App = () => {
  return (
    <Router>
      <ErrorBoundary>
        <Navigation />
        <Suspense fallback={<div>Loading...</div>}>
          <AnimatedRoutes />
        </Suspense>
      </ErrorBoundary>
    </Router>
  )
}

export default App
