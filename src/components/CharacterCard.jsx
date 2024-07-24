import React, { useMemo } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import LazyImage from "./LazyImage"

const CharacterCard = ({ character }) => (
  <motion.li
    className="sw-char"
    layout
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3 }}
  >
    <Link to={`/characters/${character.id}`}>
      <LazyImage
        src={character.image}
        alt={character.name}
        className="w-full rounded-lg aspect-square mb-2 min-w-24 md:min-w-60"
      />
      <div>
        <p className="character-card-info">{character.name}</p>
        <p className="character-card-info">
          Homeworld:<span>{character.homeworld ? ` ${character.homeworld}` : " Unknown"}</span>
        </p>
        <p className="character-card-info">
          Species:
          <span>{character.species ? ` ${character.species}` : " Unknown"}</span>
        </p>
      </div>
    </Link>
  </motion.li>
)

export default CharacterCard
