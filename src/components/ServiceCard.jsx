import { Sparkles, UtensilsCrossed, Waves, CarFront } from 'lucide-react'

// Mapa de nombres de icono (string, guardado en mockApi) a componentes reales
const ICONS = {
  Sparkles,
  UtensilsCrossed,
  Waves,
  CarFront,
}

// ServiceCard

export default function ServiceCard({ service }) {
  const Icon = ICONS[service.icon] || Sparkles

  return (
    <div className="card-luxe group relative overflow-hidden rounded-md">
      <div className="relative h-56 overflow-hidden">
        <img
          src={service.image}
          alt={service.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-olympo-black/50 transition-colors duration-500 group-hover:bg-olympo-black/30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full border border-olympo-gold/50 bg-olympo-black/60 backdrop-blur-sm transition-transform duration-500 group-hover:scale-110">
            <Icon className="h-7 w-7 text-olympo-gold" />
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-display text-lg text-olympo-cream">{service.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-olympo-gray">{service.description}</p>
      </div>
    </div>
  )
}
