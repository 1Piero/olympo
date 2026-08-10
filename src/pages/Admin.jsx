import { useEffect, useState } from 'react'
import { ClipboardList, RefreshCw } from 'lucide-react'
import SectionTitle from '../components/SectionTitle.jsx'
import { useReservation } from '../context/ReservationContext.jsx'

// Admin

export default function Admin() {
  const { fetchAllReservations } = useReservation()
  const [reservations, setReservations] = useState([])
  const [loading, setLoading] = useState(true)

  const loadReservations = async () => {
    setLoading(true)
    const data = await fetchAllReservations()
    setReservations(data.reverse())
    setLoading(false)
  }

  useEffect(() => {
    loadReservations()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="min-h-screen bg-olympo-black px-6 pb-24 pt-36">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
          <SectionTitle
            eyebrow="Panel privado"
            title="Reservas de Olympo"
            description="Listado de todas las reservas registradas en el sistema."
            center={false}
          />
          <button
            onClick={loadReservations}
            className="btn-outline-gold flex items-center gap-2 rounded-sm px-5 py-2.5"
          >
            <RefreshCw className="h-4 w-4" /> Actualizar
          </button>
        </div>

        {loading ? (
          <p className="text-olympo-gray">Cargando reservas…</p>
        ) : reservations.length === 0 ? (
          <div className="card-luxe flex flex-col items-center gap-3 rounded-md p-16 text-center">
            <ClipboardList className="h-10 w-10 text-olympo-gold" />
            <p className="text-olympo-gray">Aún no hay reservas registradas.</p>
          </div>
        ) : (
          <div className="card-luxe overflow-x-auto rounded-md">
            <table className="w-full min-w-[720px] text-left text-sm">
              <thead>
                <tr className="border-b border-olympo-gold/20 text-xs uppercase tracking-widest text-olympo-gold">
                  <th className="px-5 py-4">Código</th>
                  <th className="px-5 py-4">Nombre</th>
                  <th className="px-5 py-4">Correo</th>
                  <th className="px-5 py-4">Entrada</th>
                  <th className="px-5 py-4">Salida</th>
                  <th className="px-5 py-4">Huéspedes</th>
                  <th className="px-5 py-4">Habitación</th>
                  <th className="px-5 py-4">Estado</th>
                </tr>
              </thead>
              <tbody>
                {reservations.map((r) => (
                  <tr key={r.id} className="border-b border-olympo-gold/10 text-olympo-cream/85 hover:bg-olympo-charcoal-light/60">
                    <td className="px-5 py-4 text-olympo-gold-light">{r.id}</td>
                    <td className="px-5 py-4">{r.name}</td>
                    <td className="px-5 py-4">{r.email}</td>
                    <td className="px-5 py-4">{r.checkIn}</td>
                    <td className="px-5 py-4">{r.checkOut}</td>
                    <td className="px-5 py-4">{r.guests}</td>
                    <td className="px-5 py-4">{r.roomType}</td>
                    <td className="px-5 py-4">
                      <span className="rounded-full border border-olympo-gold/40 px-3 py-1 text-xs text-olympo-gold">
                        {r.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}
