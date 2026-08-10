import { Link } from 'react-router-dom'
import { Crown } from 'lucide-react'

/** Página 404, mostrada cuando la ruta no existe. */
export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-olympo-black px-6 text-center">
      <Crown className="h-10 w-10 text-olympo-gold" />
      <h1 className="font-display text-4xl text-olympo-cream">404</h1>
      <p className="text-olympo-gray">Esta página no existe en el reino del Olimpo.</p>
      <Link to="/" className="btn-gold mt-4 rounded-sm px-6 py-3 font-medium">
        Volver al inicio
      </Link>
    </div>
  )
}
