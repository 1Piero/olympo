import { createContext, useContext, useState } from 'react'
import { createReservation, getReservations } from '../services/mockApi'

/**
 * ReservationContext
 * --------------------------------------------------------------
 * Centraliza la lógica de reservas: habitación pre-seleccionada
 * (cuando el usuario hace clic en "Reservar" desde /habitaciones),
 * envío del formulario de reserva y listado de reservas para el
 * panel de administrador.
 * --------------------------------------------------------------
 */
const ReservationContext = createContext(null)

export function ReservationProvider({ children }) {
  const [selectedRoom, setSelectedRoom] = useState(null)
  const [lastReservation, setLastReservation] = useState(null)
  const [submitting, setSubmitting] = useState(false)

  const submitReservation = async (formData) => {
    setSubmitting(true)
    try {
      const result = await createReservation(formData)
      setLastReservation(result)
      return result
    } finally {
      setSubmitting(false)
    }
  }

  const fetchAllReservations = () => getReservations()

  const value = {
    selectedRoom,
    setSelectedRoom,
    lastReservation,
    submitting,
    submitReservation,
    fetchAllReservations,
  }

  return <ReservationContext.Provider value={value}>{children}</ReservationContext.Provider>
}

export function useReservation() {
  const context = useContext(ReservationContext)
  if (!context) throw new Error('useReservation debe usarse dentro de un ReservationProvider')
  return context
}
