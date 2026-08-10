import { useState } from 'react'
import { CheckCircle2, CalendarDays } from 'lucide-react'
import SectionTitle from '../components/SectionTitle.jsx'
import { useReservation } from '../context/ReservationContext.jsx'
import { useToast } from '../context/ToastContext.jsx'
import { ROOMS } from '../services/mockApi.js'

const initialForm = {
  name: '',
  email: '',
  checkIn: '',
  checkOut: '',
  guests: 1,
  roomType: '',
}

/**
 * Reservations (Reservas)
 * --------------------------------------------------------------
 * Formulario de reserva con validaciones básicas (campos
 * obligatorios, fechas coherentes, capacidad) y simulación de
 * confirmación a través de mockApi (sin backend real).
 * --------------------------------------------------------------
 */
export default function Reservations() {
  const { selectedRoom, setSelectedRoom, submitReservation, submitting, lastReservation } =
    useReservation()
  const { showToast } = useToast()

  const [form, setForm] = useState({
    ...initialForm,
    roomType: selectedRoom?.type || '',
  })
  const [errors, setErrors] = useState({})
  const [confirmed, setConfirmed] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const validate = () => {
    const newErrors = {}
    const today = new Date().toISOString().split('T')[0]

    if (!form.name.trim() || form.name.trim().length < 3) {
      newErrors.name = 'Ingresa tu nombre completo (mínimo 3 caracteres).'
    }
    if (!form.email.trim() || !/^\S+@\S+\.\S+$/.test(form.email)) {
      newErrors.email = 'Ingresa un correo electrónico válido.'
    }
    if (!form.checkIn) {
      newErrors.checkIn = 'Selecciona la fecha de entrada.'
    } else if (form.checkIn < today) {
      newErrors.checkIn = 'La fecha de entrada no puede ser en el pasado.'
    }
    if (!form.checkOut) {
      newErrors.checkOut = 'Selecciona la fecha de salida.'
    } else if (form.checkIn && form.checkOut <= form.checkIn) {
      newErrors.checkOut = 'La fecha de salida debe ser posterior a la de entrada.'
    }
    if (!form.guests || form.guests < 1 || form.guests > 10) {
      newErrors.guests = 'El número de personas debe estar entre 1 y 10.'
    }
    if (!form.roomType) {
      newErrors.roomType = 'Selecciona un tipo de habitación.'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) {
      showToast('Por favor corrige los errores del formulario.', 'error')
      return
    }

    try {
      const result = await submitReservation(form)
      setConfirmed(result)
      showToast('¡Reserva confirmada! Te esperamos en Olympo.', 'success')
      setSelectedRoom(null)
    } catch {
      showToast('Ocurrió un error al procesar tu reserva.', 'error')
    }
  }

  const resetForm = () => {
    setConfirmed(null)
    setForm(initialForm)
    setErrors({})
  }

  return (
    <div className="min-h-screen bg-olympo-black px-6 pb-24 pt-36">
      <div className="mx-auto max-w-3xl">
        <SectionTitle
          eyebrow="Reserva tu estadía"
          title="Formulario de Reserva"
          description="Completa tus datos y asegura tu lugar en el hotel más exclusivo del Olimpo."
        />

        {confirmed ? (
          // ---------- Confirmación ----------
          <div className="card-luxe animate-fade-up rounded-md p-10 text-center">
            <CheckCircle2 className="mx-auto h-16 w-16 text-olympo-gold" />
            <h3 className="mt-6 font-display text-2xl text-olympo-cream">
              ¡Reserva Confirmada!
            </h3>
            <p className="mt-3 text-olympo-gray">
              Código de reserva: <span className="text-olympo-gold">{confirmed.id}</span>
            </p>
            <div className="mx-auto mt-6 grid max-w-md gap-3 text-left text-sm text-olympo-cream/85">
              <p><span className="text-olympo-gray">Nombre:</span> {confirmed.name}</p>
              <p><span className="text-olympo-gray">Correo:</span> {confirmed.email}</p>
              <p><span className="text-olympo-gray">Entrada:</span> {confirmed.checkIn}</p>
              <p><span className="text-olympo-gray">Salida:</span> {confirmed.checkOut}</p>
              <p><span className="text-olympo-gray">Huéspedes:</span> {confirmed.guests}</p>
              <p><span className="text-olympo-gray">Tipo de habitación:</span> {confirmed.roomType}</p>
            </div>
            <button onClick={resetForm} className="btn-gold mt-8 rounded-sm px-8 py-3 font-medium">
              Hacer otra reserva
            </button>
          </div>
        ) : (
          // ---------- Formulario ----------
          <form onSubmit={handleSubmit} className="card-luxe rounded-md p-8 md:p-10">
            {selectedRoom && (
              <div className="mb-8 flex items-center gap-4 rounded-sm border border-olympo-gold/30 bg-olympo-charcoal-light p-4">
                <img
                  src={selectedRoom.image}
                  alt={selectedRoom.name}
                  className="h-16 w-16 rounded-sm object-cover"
                />
                <div>
                  <p className="text-sm text-olympo-gray">Habitación seleccionada</p>
                  <p className="font-display text-olympo-gold-light">{selectedRoom.name}</p>
                </div>
              </div>
            )}

            <div className="grid gap-6 sm:grid-cols-2">
              {/* Nombre */}
              <div className="sm:col-span-2">
                <label className="mb-2 block text-xs uppercase tracking-widest text-olympo-gray">
                  Nombre completo
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Ej. María Fernández"
                  className="input-luxe w-full rounded-sm px-4 py-3 text-sm"
                />
                {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name}</p>}
              </div>

              {/* Email */}
              <div className="sm:col-span-2">
                <label className="mb-2 block text-xs uppercase tracking-widest text-olympo-gray">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="tucorreo@ejemplo.com"
                  className="input-luxe w-full rounded-sm px-4 py-3 text-sm"
                />
                {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
              </div>

              {/* Fecha de entrada */}
              <div>
                <label className="mb-2 flex items-center gap-2 text-xs uppercase tracking-widest text-olympo-gray">
                  <CalendarDays className="h-3.5 w-3.5" /> Fecha de entrada
                </label>
                <input
                  type="date"
                  name="checkIn"
                  value={form.checkIn}
                  onChange={handleChange}
                  className="input-luxe w-full rounded-sm px-4 py-3 text-sm"
                />
                {errors.checkIn && <p className="mt-1 text-xs text-red-400">{errors.checkIn}</p>}
              </div>

              {/* Fecha de salida */}
              <div>
                <label className="mb-2 flex items-center gap-2 text-xs uppercase tracking-widest text-olympo-gray">
                  <CalendarDays className="h-3.5 w-3.5" /> Fecha de salida
                </label>
                <input
                  type="date"
                  name="checkOut"
                  value={form.checkOut}
                  onChange={handleChange}
                  className="input-luxe w-full rounded-sm px-4 py-3 text-sm"
                />
                {errors.checkOut && <p className="mt-1 text-xs text-red-400">{errors.checkOut}</p>}
              </div>

              {/* Número de personas */}
              <div>
                <label className="mb-2 block text-xs uppercase tracking-widest text-olympo-gray">
                  Número de personas
                </label>
                <input
                  type="number"
                  name="guests"
                  min="1"
                  max="10"
                  value={form.guests}
                  onChange={handleChange}
                  className="input-luxe w-full rounded-sm px-4 py-3 text-sm"
                />
                {errors.guests && <p className="mt-1 text-xs text-red-400">{errors.guests}</p>}
              </div>

              {/* Tipo de habitación */}
              <div>
                <label className="mb-2 block text-xs uppercase tracking-widest text-olympo-gray">
                  Tipo de habitación
                </label>
                <select
                  name="roomType"
                  value={form.roomType}
                  onChange={handleChange}
                  className="input-luxe w-full rounded-sm px-4 py-3 text-sm"
                >
                  <option value="">Selecciona una opción</option>
                  {[...new Set(ROOMS.map((r) => r.type))].map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
                {errors.roomType && <p className="mt-1 text-xs text-red-400">{errors.roomType}</p>}
              </div>
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="btn-gold mt-8 w-full rounded-sm py-3.5 font-medium disabled:opacity-60"
            >
              {submitting ? 'Procesando reserva…' : 'Confirmar Reserva'}
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
