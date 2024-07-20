// components/CharacterList.jsx
import { useState, useEffect } from "react"
import axios from "axios"
import { usePagination } from "../hooks/usePagination"
import CharacterCard from "./../components/CharacterCard"
import Pagination from "./../components/Pagination"

const CharacterList = () => {
  const [characters, setCharacters] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const charactersPerPage = 6

  const {
    paginatedItems: currentCharacters,
    currentPage,
    totalPages,
    paginate,
  } = usePagination(characters, charactersPerPage)

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await axios.get("https://akabab.github.io/starwars-api/api/all.json")
        setCharacters(response.data)
        setIsLoading(false)
      } catch (error) {
        setError(`Error fetching the data. [ ${error} ]`)
        setIsLoading(false)
      }
    }

    fetchCharacters()
  }, [])

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>{error}</div>

  return (
    <div className="container">
      <h1>Star Wars Characters</h1>
      <ul className="charList">
        {currentCharacters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </ul>
      <Pagination currentPage={currentPage} totalPages={totalPages} paginate={paginate} />
    </div>
  )
}

export default CharacterList
