const SkeletonCard = () => {
  return (
    <li className="sw-char animate-pulse">
      <div className="bg-gray-300 w-full aspect-square rounded-lg"></div>
      <div className="mt-2">
        <div className="bg-gray-300 h-8 w-3/4 rounded"></div>
        <div className="bg-gray-300 h-6 w-1/4 mt-2 rounded"></div>
      </div>
    </li>
  )
}

export default SkeletonCard
