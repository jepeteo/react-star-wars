import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import axios from "axios"
import LazyImage from "./LazyImage"

const CharacterDetails = () => {
  const [character, setCharacter] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    const abortController = new AbortController()

    const fetchCharacter = async () => {
      try {
        const response = await axios.get(
          `https://akabab.github.io/starwars-api/api/id/${id}.json`,
          {
            signal: abortController.signal,
          }
        )
        setCharacter(response.data)
        setIsLoading(false)
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log("Request canceled:", error.message)
        } else {
          setError(`Error fetching character data: ${error.message}`)
          setIsLoading(false)
        }
      }
    }
    fetchCharacter()
    return () => {
      abortController.abort()
    }
  }, [id])

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>{error}</div>
  if (!character) return <div>Character not found.</div>

  return (
    <div className="character-details">
      <h1>{character.name}</h1>
      <LazyImage src={character.image} alt={character.name} className="character-image w-64 h-64" />
      <div className="character-info">
        <p>
          <span>Height</span>
          {character.height}m
        </p>
        <p>
          <span>Mass</span>
          {character.mass}
        </p>
        <p>
          <span>Gender</span>
          {character.gender}
        </p>
        <p>
          <span>Homeworld</span>
          {character.homeworld}
        </p>
        <p>
          <span>Species</span>
          {character.species}
        </p>
        <p>
          <span>Wiki</span>
          <a href={character.wiki} target="_blank" rel="noopener noreferrer">
            Learn more
          </a>
        </p>
      </div>
      <Link to="/characters" className="back-button">
        Back to Characters
      </Link>
    </div>
  )
}
export default CharacterDetails
