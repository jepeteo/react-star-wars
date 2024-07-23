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
        className="w-full rounded-lg aspect-square min-w-24 md:min-w-60"
      />
      <div>
        <h2>{character.name}</h2>
        <p>Homeworld: {character.homeworld}</p>
      </div>
    </Link>
  </motion.li>
)

export default CharacterCard
