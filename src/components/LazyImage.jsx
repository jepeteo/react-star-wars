import { useState, useEffect, useRef } from "react"

const LazyImage = ({ src, alt, className }) => {
  const [isInView, setIsInView] = useState(false)
  const imgRef = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.unobserve(imgRef.current)
        }
      },
      {
        rootMargin: "100px",
        threshold: 0.1,
      }
    )

    if (imgRef.current) {
      observer.observe(imgRef.current)
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current)
      }
    }
  }, [])

  return (
    <div ref={imgRef} className={`lazy-image-container ${className}`}>
      {isInView ? (
        <img src={src} alt={alt} className="lazy-image" loading="lazy" />
      ) : (
        <div className="lazy-image-placeholder animate-pulse bg-gray-300"></div>
      )}
    </div>
  )
}

export default LazyImage
