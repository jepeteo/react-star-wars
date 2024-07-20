import { useState, useMemo } from "react"

export const usePagination = (items, itemsPerPage) => {
  const [currentPage, setCurrentPage] = useState(1)

  const paginatedItems = useMemo(() => {
    const indexOfLastItem = currentPage * itemsPerPage
    const indexOfFirstItem = indexOfLastItem - itemsPerPage
    return items.slice(indexOfFirstItem, indexOfLastItem)
  }, [items, currentPage, itemsPerPage])

  const totalPages = Math.ceil(items.length / itemsPerPage)

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return { paginatedItems, currentPage, totalPages, paginate }
}
