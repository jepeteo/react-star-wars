import React from "react"
import { useTheme } from "../contexts/ThemeContext"

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle w-1/12"
      aria-label={`Switch to ${isDarkMode ? "light" : "dark"} mode`}
    >
      {isDarkMode ? "☀️" : "🌙"}
    </button>
  )
}

export default ThemeToggle
