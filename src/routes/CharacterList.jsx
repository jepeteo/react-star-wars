// components/CharacterList.jsx
import { useState, useEffect, useMemo } from "react"
import axios from "axios"
import { usePagination } from "../hooks/usePagination"
import CharacterCard from "./../components/CharacterCard"
import Pagination from "./../components/Pagination"
import SearchBar from "../components/SearchBar"
import SortSelect from "../components/SortSelect"

const CharacterList = () => {
  const [characters, setCharacters] = useState([])
  const [filteredCharacters, setFilteredCharacters] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const [sortBy, setSortBy] = useState("name")
  const charactersPerPage = 12

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await axios.get("https://akabab.github.io/starwars-api/api/all.json")
        setCharacters(response.data)
        setFilteredCharacters(response.data) // Update filteredCharacters as well
        setIsLoading(false)
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log("Request canceled:", error.message)
        } else {
          setError(`Error fetching the data: ${error.message}`)
          setIsLoading(false)
        }
      }
    }
    fetchCharacters()
  }, [])

  const sortedCharacters = useMemo(() => {
    return [...filteredCharacters].sort((a, b) => {
      if (a[sortBy] < b[sortBy]) return -1
      if (a[sortBy] > b[sortBy]) return 1
      return 0
    })
  }, [filteredCharacters, sortBy])

  const {
    paginatedItems: currentCharacters,
    currentPage,
    totalPages,
    paginate,
  } = usePagination(sortedCharacters, charactersPerPage)

  const handleSearch = (searchTerm) => {
    const filtered = characters.filter((character) =>
      character.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setFilteredCharacters(filtered)
    paginate(1)
  }

  const handleSort = (criteria) => {
    setSortBy(criteria)
    paginate(1)
  }

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>{error}</div>

  return (
    <div className="container">
      <h1>Star Wars Characters</h1>
      <SearchBar onSearch={handleSearch} />
      <SortSelect onSort={handleSort} />
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
