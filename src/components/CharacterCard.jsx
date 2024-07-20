// import { GiRingedPlanet } from "react-icons/gi"
const CharacterCard = ({ character }) => (
  <li className="sw-char">
    <img src={character.image} alt={character.name} width="128" />
    <div>
      <h2>{character.name}</h2>
      <p>Homeworld: {character.homeworld}</p>
      <p>Species: {character.species}</p>
    </div>
  </li>
)

export default CharacterCard
