import { useMemo, useState } from 'react'
import { SlidersHorizontal } from 'lucide-react'
import SectionTitle from '../components/SectionTitle.jsx'
import RoomCard from '../components/RoomCard.jsx'
import { ROOMS } from '../services/mockApi.js'

const TYPES = ['Todas', 'Suite', 'Deluxe', 'Presidencial']
const SORT_OPTIONS = [
  { value: 'default', label: 'Relevancia' },
  { value: 'price-asc', label: 'Precio: menor a mayor' },
  { value: 'price-desc', label: 'Precio: mayor a menor' },
]

// Rooms

export default function Rooms() {
  const [type, setType] = useState('Todas')
  const [sort, setSort] = useState('default')
  const [maxPrice, setMaxPrice] = useState(4000)

  const filteredRooms = useMemo(() => {
    let rooms = ROOMS.filter((r) => r.price <= maxPrice)
    if (type !== 'Todas') {
      rooms = rooms.filter((r) => r.type === type)
    }
    if (sort === 'price-asc') rooms = [...rooms].sort((a, b) => a.price - b.price)
    if (sort === 'price-desc') rooms = [...rooms].sort((a, b) => b.price - a.price)
    return rooms
  }, [type, sort, maxPrice])

  return (
    <div className="min-h-screen bg-olympo-black px-6 pb-24 pt-36">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Alojamiento"
          title="Nuestras Habitaciones"
          description="Suites, habitaciones Deluxe y la exclusiva Suite Presidencial: elige el espacio perfecto para tu estadía olímpica."
        />

        {/* Filtros */}
        <div className="card-luxe mb-12 flex flex-col gap-6 rounded-md p-6 md:flex-row md:items-end md:justify-between">
          <div className="flex items-center gap-2 text-olympo-gold">
            <SlidersHorizontal className="h-5 w-5" />
            <span className="text-sm uppercase tracking-widest">Filtrar</span>
          </div>

          <div className="grid flex-1 gap-6 sm:grid-cols-3">
            {/* Tipo de habitación */}
            <div>
              <label className="mb-2 block text-xs uppercase tracking-widest text-olympo-gray">
                Tipo de habitación
              </label>
              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="input-luxe w-full rounded-sm px-3 py-2.5 text-sm"
              >
                {TYPES.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>

            {/* Precio máximo */}
            <div>
              <label className="mb-2 block text-xs uppercase tracking-widest text-olympo-gray">
                Precio máximo: <span className="text-olympo-gold">${maxPrice}</span>
              </label>
              <input
                type="range"
                min="600"
                max="4000"
                step="50"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full accent-olympo-gold"
              />
            </div>

            {/* Orden */}
            <div>
              <label className="mb-2 block text-xs uppercase tracking-widest text-olympo-gray">
                Ordenar por
              </label>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="input-luxe w-full rounded-sm px-3 py-2.5 text-sm"
              >
                {SORT_OPTIONS.map((o) => (
                  <option key={o.value} value={o.value}>{o.label}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Resultado */}
        {filteredRooms.length === 0 ? (
          <p className="py-20 text-center text-olympo-gray">
            No se encontraron habitaciones con los filtros seleccionados.
          </p>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredRooms.map((room) => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
