import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'

/**
 * ProtectedRoute
 * --------------------------------------------------------------
 * Envuelve rutas que requieren sesión iniciada (y opcionalmente
 * un rol específico, como "admin"). Si el usuario no cumple los
 * requisitos, se le redirige a /login o a la página principal.
 * --------------------------------------------------------------
 */
export default function ProtectedRoute({ children, requireRole }) {
  const { isAuthenticated, user, loading } = useAuth()

  if (loading) return null

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />
  }

  if (requireRole && user?.role !== requireRole) {
    return <Navigate to="/" replace />
  }

  return children
}
