import { useState } from 'react'
import { useNavigate, useLocation, Link } from 'react-router-dom'
import { Crown, Lock, Mail } from 'lucide-react'
import { useAuth } from '../context/AuthContext.jsx'
import { useToast } from '../context/ToastContext.jsx'

/**
 * Login
 * --------------------------------------------------------------
 * Simulación de autenticación de usuario (sin backend real).
 * Cualquier correo/contraseña válidos son aceptados; si el
 * correo contiene "admin" se le asigna el rol de administrador,
 * habilitando el acceso al panel /admin.
 * --------------------------------------------------------------
 */
export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const { login } = useAuth()
  const { showToast } = useToast()
  const navigate = useNavigate()
  const location = useLocation()

  const redirectTo = location.state?.from || '/'

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      await login(email, password)
      showToast('Sesión iniciada. Bienvenido a Olympo.', 'success')
      navigate(redirectTo, { replace: true })
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-olympo-black px-6 pt-24">
      <div className="card-luxe w-full max-w-md rounded-md p-10 animate-fade-up">
        <div className="mb-8 flex flex-col items-center text-center">
          <Crown className="h-9 w-9 text-olympo-gold" />
          <h1 className="mt-3 font-display text-2xl text-olympo-cream">Acceso a tu cuenta</h1>
          <p className="mt-2 text-sm text-olympo-gray">
            Ingresa tus credenciales para gestionar tus reservas.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="grid gap-5">
          <div>
            <label className="mb-2 flex items-center gap-2 text-xs uppercase tracking-widest text-olympo-gray">
              <Mail className="h-3.5 w-3.5" /> Correo electrónico
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tucorreo@ejemplo.com"
              className="input-luxe w-full rounded-sm px-4 py-3 text-sm"
            />
          </div>

          <div>
            <label className="mb-2 flex items-center gap-2 text-xs uppercase tracking-widest text-olympo-gray">
              <Lock className="h-3.5 w-3.5" /> Contraseña
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="input-luxe w-full rounded-sm px-4 py-3 text-sm"
            />
          </div>

          {error && <p className="text-xs text-red-400">{error}</p>}

          <button type="submit" disabled={loading} className="btn-gold rounded-sm py-3.5 font-medium disabled:opacity-60">
            {loading ? 'Ingresando…' : 'Iniciar sesión'}
          </button>
        </form>

        <p className="mt-6 text-center text-xs text-olympo-gray">
          Consejo: usa un correo con "admin" (ej. admin@olympo.com) para ver el panel de administrador.
        </p>

        <p className="mt-4 text-center text-sm text-olympo-cream/70">
          ¿Aún no tienes cuenta?{' '}
          <Link to="/reservas" className="text-olympo-gold hover:text-olympo-gold-light">
            Reserva como invitado
          </Link>
        </p>
      </div>
    </div>
  )
}
