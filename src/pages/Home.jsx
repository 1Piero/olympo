import { Link } from 'react-router-dom'
import { Sparkles, UtensilsCrossed, Waves, CarFront, ArrowRight } from 'lucide-react'
import SectionTitle from '../components/SectionTitle.jsx'
import { SERVICES, ROOMS } from '../services/mockApi.js'
import RoomCard from '../components/RoomCard.jsx'

const ICONS = { Sparkles, UtensilsCrossed, Waves, CarFront }

export default function Home() {
  return (
    <div>
      {/*  HERO */}
      <section className="relative flex h-screen min-h-[600px] w-full items-center justify-center overflow-hidden">
        <img
          src="./assets/images/fondo-hero.png"
          alt="Hotel Olympo de lujo"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-olympo-black/70 via-olympo-black/60 to-olympo-black" />

        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center animate-fade-up">
          <p className="mb-5 text-xs uppercase tracking-[0.5em] text-olympo-gold-light">
            Hotel 
          </p>
          <h1 className="font-display text-5xl leading-tight text-olympo-cream md:text-7xl">
            O L Y M P O
          </h1>
          <p className="mt-4 font-serif text-xl italic text-gold-gradient md:text-2xl">
            "Donde los dioses descansan"
          </p>
          <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-olympo-cream/80 md:text-base">
            Una experiencia de hospitalidad reservada para quienes buscan la perfección:
            confort absoluto, servicio impecable y un lujo que trasciende lo terrenal.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link to="/reservas" className="btn-gold rounded-sm px-8 py-3.5 font-medium">
              Reserva rápida
            </Link>
            <Link to="/habitaciones" className="btn-outline-gold rounded-sm px-8 py-3.5">
              Ver habitaciones
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-olympo-gold/70">
          <div className="h-8 w-5 rounded-full border border-olympo-gold/50 p-1">
            <div className="h-1.5 w-1.5 rounded-full bg-olympo-gold" />
          </div>
        </div>
      </section>

      {/*SERVICIOS DESTACADOS*/}
      <section className="bg-olympo-black px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Experiencia Olympo"
            title="Servicios destacados"
            description="Cada rincón de Olympo está diseñado para ofrecerte una experiencia inigualable, digna de la morada de los dioses."
          />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((service) => {
              const Icon = ICONS[service.icon]
              return (
                <div
                  key={service.id}
                  className="card-luxe flex flex-col items-center gap-4 rounded-md p-8 text-center"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-olympo-gold/40">
                    <Icon className="h-6 w-6 text-olympo-gold" />
                  </div>
                  <h3 className="font-display text-lg text-olympo-cream">{service.name}</h3>
                  <p className="text-sm text-olympo-gray">{service.description}</p>
                </div>
              )
            })}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/servicios"
              className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-olympo-gold hover:text-olympo-gold-light transition-colors"
            >
              Ver todos los servicios <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/*HABITACIONES DESTACADAS*/}
      <section className="bg-olympo-charcoal/40 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Alojamiento exclusivo"
            title="Nuestras habitaciones más solicitadas"
            description="Desde suites elegantes hasta la Suite Presidencial, cada espacio fue creado para el máximo confort."
          />
          <div className="grid gap-8 md:grid-cols-3">
            {ROOMS.slice(0, 3).map((room) => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              to="/habitaciones"
              className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-olympo-gold hover:text-olympo-gold-light transition-colors"
            >
              Ver todas las habitaciones <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/*CITA / BANNER INFERIOR*/}
      <section className="relative overflow-hidden px-6 py-28">
        <img
          src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2000&auto=format&fit=crop"
          alt="Piscina infinita de Olympo"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-olympo-black/75" />
        <div className="relative mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl text-olympo-cream md:text-4xl">
            Tu escapada divina te espera
          </h2>
          <p className="mt-4 text-olympo-cream/80">
            Reserva hoy y vive una experiencia reservada solo para unos pocos elegidos.
          </p>
          <Link to="/reservas" className="btn-gold mt-8 inline-block rounded-sm px-8 py-3.5 font-medium">
            Reservar ahora
          </Link>
        </div>
      </section>
    </div>
  )
}
