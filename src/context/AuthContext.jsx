import { createContext, useContext, useEffect, useState } from 'react'
import { loginRequest, logoutRequest, getStoredUser } from '../services/mockApi'

/**
 * AuthContext
 * --------------------------------------------------------------
 * Maneja el estado de sesión del usuario en toda la aplicación:
 * login, logout y usuario actual. Persiste la sesión en
 * localStorage para simular un flujo de autenticación real.
 * --------------------------------------------------------------
 */
const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setUser(getStoredUser())
    setLoading(false)
  }, [])

  const login = async (email, password) => {
    const loggedUser = await loginRequest(email, password)
    setUser(loggedUser)
    return loggedUser
  }

  const logout = () => {
    logoutRequest()
    setUser(null)
  }

  const value = { user, isAuthenticated: !!user, loading, login, logout }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

// Hook de conveniencia para consumir el contexto de autenticación
export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth debe usarse dentro de un AuthProvider')
  return context
}
