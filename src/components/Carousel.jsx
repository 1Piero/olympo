import { useEffect, useState, useCallback } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

// Carousel
export default function Carousel({ images, autoPlayMs = 5000 }) {
  const [index, setIndex] = useState(0)

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % images.length)
  }, [images.length])

  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length)

  useEffect(() => {
    const timer = setInterval(next, autoPlayMs)
    return () => clearInterval(timer)
  }, [next, autoPlayMs])

  return (
    <div className="w-full">
      <div className="relative h-[60vh] w-full overflow-hidden rounded-md border border-olympo-gold/15">
        {images.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={`Vista del hotel Olympo ${i + 1}`}
            loading="lazy"
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
              i === index ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-olympo-black/70 via-transparent to-transparent" />

        {/* Controles */}
        <button
          onClick={prev}
          aria-label="Imagen anterior"
          className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full border border-olympo-gold/40 bg-olympo-black/60 p-2 text-olympo-gold backdrop-blur-sm transition-colors hover:bg-olympo-gold hover:text-olympo-black"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={next}
          aria-label="Imagen siguiente"
          className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full border border-olympo-gold/40 bg-olympo-black/60 p-2 text-olympo-gold backdrop-blur-sm transition-colors hover:bg-olympo-gold hover:text-olympo-black"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* Miniaturas */}
      <div className="mt-4 flex justify-center gap-2 overflow-x-auto pb-2">
        {images.map((src, i) => (
          <button
            key={src}
            onClick={() => setIndex(i)}
            aria-label={`Ir a la imagen ${i + 1}`}
            className={`h-2.5 w-2.5 shrink-0 rounded-full transition-all ${
              i === index ? 'w-6 bg-olympo-gold' : 'bg-olympo-gold/30 hover:bg-olympo-gold/60'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
