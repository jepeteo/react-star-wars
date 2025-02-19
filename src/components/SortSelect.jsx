const SortSelect = ({ onSort }) => {
  const handleChange = (e) => {
    onSort(e.target.value)
  }
  return (
    <select onChange={handleChange} className="sort-select">
      <option value="name">Name</option>
      <option value="species">Species</option>
      <option value="homeworld">Homeworld</option>
    </select>
  )
}

export default SortSelect
