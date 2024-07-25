import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"
import { ThemeProvider } from "./contexts/ThemeContext.jsx"
import { AnimatePresence } from "framer-motion"
import Navigation from "./components/Navigation.jsx"
import ErrorBoundary from "./components/ErrorBoundary.jsx"
import { Suspense, lazy } from "react"

const Home = () => {
  return (
    <div className="container">
      <h1 className="mt-16">Welcome to Star Wars - Information</h1>
      <div className="pr-info mt-8 max-w-xl m-auto border rounded-lg p-8 border-blue-900 text-center">
        <p>A small react project about Star Wars.</p>
        <p>
          Now it can show a list of characters in a grid layout with basic information about each
          character, with the ability to click the character card and see more information about the
          character.
        </p>
        <p>
          i have used the Star Wars API from: <br />
          <a
            className=" text-blue-400 hover:text-red-800"
            href="https://akabab.github.io/starwars-api/"
            target="_blank"
            title="Star Wars API"
          >
            https://akabab.github.io/starwars-api/
          </a>
        </p>
      </div>
    </div>
  )
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
    <ThemeProvider>
      <Router>
        <ErrorBoundary>
          <Navigation />
          <Suspense fallback={<div>Loading...</div>}>
            <AnimatedRoutes />
          </Suspense>
        </ErrorBoundary>
      </Router>
    </ThemeProvider>
  )
}

export default App
