import { Link } from "react-router-dom"
import starWarsWhite from "./../assets/images/star-wars-white.webp"

const Navigation = () => {
  return (
    <nav className="container main-nav">
      <img src={starWarsWhite} width="100" />
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/characters">Characters</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
