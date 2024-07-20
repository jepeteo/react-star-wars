import { useState } from "react"

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("")

  const handleSearch = (e) => {
    const value = e.target.value
    setSearchTerm(value)
    onSearch(value)
  }

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search characters..."
        value={searchTerm}
        onChange={handleSearch}
        className="search-input"
      />
    </div>
  )
}
export default SearchBar
