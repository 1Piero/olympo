import { createContext, useCallback, useContext, useState } from 'react'

// ToastContext
const ToastContext = createContext(null)

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([])

  const showToast = useCallback((message, type = 'success') => {
    const id = Date.now() + Math.random()
    setToasts((prev) => [...prev, { id, message, type }])
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id))
    }, 4000)
  }, [])

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {/* Contenedor de toasts, fijo en la esquina superior derecha */}
      <div className="fixed top-24 right-4 z-[100] flex flex-col gap-3 w-[90vw] max-w-sm">
        {toasts.map((t) => (
          <div
            key={t.id}
            className={`animate-fade-up rounded-md border px-5 py-4 shadow-lg backdrop-blur-md font-body text-sm ${
              t.type === 'success'
                ? 'bg-olympo-charcoal/95 border-olympo-gold text-olympo-cream'
                : 'bg-olympo-charcoal/95 border-red-500 text-red-200'
            }`}
          >
            {t.message}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  )
}

export function useToast() {
  const context = useContext(ToastContext)
  if (!context) throw new Error('useToast debe usarse dentro de un ToastProvider')
  return context
}
