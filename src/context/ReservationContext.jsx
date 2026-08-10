import { createContext, useContext, useState } from 'react'
import { createReservation, getReservations } from '../services/mockApi'

//ReservationContext
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
