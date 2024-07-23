import React from "react"
import { Link } from "react-router-dom"
import LazyImage from "./LazyImage"

const CharacterCard = ({ character }) => (
  <li className="sw-char">
    <Link to={`/characters/${character.id}`}>
      <LazyImage
        src={character.image}
        alt={character.name}
        className="w-full rounded-lg aspect-square min-w-24 md:min-w-60"
      />
      <div>
        <h2>{character.name}</h2>
        <p>Homeworld: {character.homeworld}</p>
      </div>
    </Link>
  </li>
)

export default CharacterCard
