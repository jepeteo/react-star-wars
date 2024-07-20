// components/CharacterList.jsx
import { useState, useEffect } from "react"
import axios from "axios"
import { usePagination } from "../hooks/usePagination"
import CharacterCard from "./../components/CharacterCard"
import Pagination from "./../components/Pagination"
import SearchBar from "../components/SearchBar"

const CharacterList = () => {
  const [characters, setCharacters] = useState([])
  const [filteredCharacters, setFilteredCharacters] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const charactersPerPage = 6

  const {
    paginatedItems: currentCharacters,
    currentPage,
    totalPages,
    paginate,
  } = usePagination(filteredCharacters, charactersPerPage)

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

  const handleSearch = (searchTerm) => {
    const filtered = characters.filter((character) =>
      character.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setFilteredCharacters(filtered)
    paginate(1)
  }

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>{error}</div>

  return (
    <div className="container">
      <h1>Star Wars Characters</h1>
      <SearchBar onSearch={handleSearch} />
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
