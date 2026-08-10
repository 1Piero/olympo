import { Link } from 'react-router-dom'
import { Users } from 'lucide-react'
import { useReservation } from '../context/ReservationContext.jsx'

// RoomCard

export default function RoomCard({ room }) {
  const { setSelectedRoom } = useReservation()

  return (
    <div className="card-luxe group flex flex-col overflow-hidden rounded-md">
      <div className="relative h-64 overflow-hidden">
        <img
          src={room.image}
          alt={room.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-olympo-black/80 via-transparent to-transparent" />
        <span className="absolute top-4 left-4 rounded-sm bg-olympo-black/80 px-3 py-1 text-xs uppercase tracking-widest text-olympo-gold border border-olympo-gold/40">
          {room.type}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl text-olympo-cream">{room.name}</h3>

        <p className="mt-3 flex-1 text-sm leading-relaxed text-olympo-gray">
          {room.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {room.amenities.slice(0, 3).map((a) => (
            <span
              key={a}
              className="rounded-full border border-olympo-gold/20 px-3 py-1 text-[11px] text-olympo-cream/70"
            >
              {a}
            </span>
          ))}
        </div>

        <div className="mt-5 flex items-center justify-between border-t border-olympo-gold/10 pt-5">
          <div>
            <p className="font-display text-2xl text-olympo-gold-light">
              ${room.price}
              <span className="ml-1 text-xs font-body text-olympo-gray">/ noche</span>
            </p>
            <p className="mt-1 flex items-center gap-1 text-xs text-olympo-gray">
              <Users className="h-3.5 w-3.5" /> Hasta {room.capacity} personas
            </p>
          </div>

          <Link
            to="/reservas"
            onClick={() => setSelectedRoom(room)}
            className="btn-gold rounded-sm px-5 py-2.5 text-xs font-medium"
          >
            Reservar
          </Link>
        </div>
      </div>
    </div>
  )
}
