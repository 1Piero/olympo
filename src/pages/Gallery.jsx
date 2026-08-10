import SectionTitle from '../components/SectionTitle.jsx'
import Carousel from '../components/Carousel.jsx'
import { GALLERY_IMAGES } from '../services/mockApi.js'

/**
 * Gallery (Galería)
 * --------------------------------------------------------------
 * Carrusel principal de imágenes del hotel más una cuadrícula
 * de miniaturas para explorar habitaciones, exteriores y
 * servicios.
 * --------------------------------------------------------------
 */
export default function Gallery() {
  return (
    <div className="min-h-screen bg-olympo-black px-6 pb-24 pt-36">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="Un vistazo al Olimpo"
          title="Galería"
          description="Recorre visualmente nuestras habitaciones, exteriores y servicios de lujo."
        />

        <Carousel images={GALLERY_IMAGES} />

        {/* Cuadrícula de miniaturas */}
        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {GALLERY_IMAGES.map((src, i) => (
            <div key={src} className="group overflow-hidden rounded-md border border-olympo-gold/10">
              <img
                src={src}
                alt={`Galería Olympo ${i + 1}`}
                loading="lazy"
                className="h-40 w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
