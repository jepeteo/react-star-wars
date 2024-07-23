import { Link } from "react-router-dom"
import starWarsWhite from "./../assets/images/star-wars-white.webp"
import ThemeToggle from "./ThemeToggle"

const Navigation = () => {
  return (
    <nav className="container main-nav">
      <img src={starWarsWhite} className="w-24 md:w-1/12 md:object-contain" />
      <ul className="justify-center order-9  md:order-none md:w-10/12">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/characters">Characters</Link>
        </li>
      </ul>
      <ThemeToggle />
    </nav>
  )
}

export default Navigation
