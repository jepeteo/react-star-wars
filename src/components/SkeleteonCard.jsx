const SkeletonCard = () => {
  return (
    <li className="sw-char animate-pulse">
      <div className="bg-gray-300 w-24 h-24 rounded-lg"></div>
      <div className="mt-2">
        <div className="bg-gray-300 h-4 w-3/4 rounded"></div>
        <div className="bg-gray-300 h-3 w-1/2 mt-2 rounded"></div>
      </div>
    </li>
  )
}

export default SkeletonCard
