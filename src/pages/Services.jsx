import SectionTitle from '../components/SectionTitle.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import { SERVICES } from '../services/mockApi.js'

/**
 * Services (Servicios)
 * --------------------------------------------------------------
 * Presenta los servicios exclusivos del hotel: spa, restaurante
 * gourmet, piscina infinita y transporte VIP.
 * --------------------------------------------------------------
 */
export default function Services() {
  return (
    <div className="min-h-screen bg-olympo-black px-6 pb-24 pt-36">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="A tu disposición"
          title="Servicios Exclusivos"
          description="En Olympo, cada servicio está diseñado para superar tus expectativas y ofrecerte una estadía verdaderamente divina."
        />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </div>
  )
}
