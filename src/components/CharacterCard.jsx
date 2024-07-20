import { Link } from "react-router-dom"
const CharacterCard = ({ character }) => (
  <li className="sw-char">
    <Link to={`/characters/${character.id}`}>
      <img src={character.image} alt={character.name} width="128" />
      <div>
        <h2>{character.name}</h2>
        <p>Homeworld: {character.homeworld}</p>
      </div>
    </Link>
  </li>
)

export default CharacterCard
