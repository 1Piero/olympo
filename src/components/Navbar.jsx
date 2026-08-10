import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, Crown, LogOut } from 'lucide-react'
import { useAuth } from '../context/AuthContext.jsx'

const NAV_LINKS = [
  { to: '/', label: 'Inicio' },
  { to: '/habitaciones', label: 'Habitaciones' },
  { to: '/servicios', label: 'Servicios' },
  { to: '/galeria', label: 'Galería' },
  { to: '/contacto', label: 'Contacto' },
]

/**
 * Navbar
 * --------------------------------------------------------------
 * Barra de navegación fija que cambia de apariencia al hacer
 * scroll (de transparente a sólida con blur). Incluye menú
 * responsive para dispositivos móviles y estado de sesión.
 * --------------------------------------------------------------
 */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { isAuthenticated, user, logout } = useAuth()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const linkClass = ({ isActive }) =>
    `relative text-sm tracking-widest uppercase transition-colors duration-300 hover:text-olympo-gold-light ${
      isActive ? 'text-olympo-gold' : 'text-olympo-cream/90'
    }`

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-olympo-black/90 backdrop-blur-md shadow-[0_2px_20px_rgba(0,0,0,0.5)] py-3' : 'bg-transparent py-6'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6">
        {/* Logotipo */}
        <Link to="/" className="flex items-center gap-2 group" onClick={() => setOpen(false)}>
          <Crown className="h-6 w-6 text-olympo-gold transition-transform duration-500 group-hover:rotate-12" />
          <span className="font-display text-2xl tracking-[0.2em] text-olympo-cream">
            OLYMPO
          </span>
        </Link>

        {/* Enlaces desktop */}
        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <NavLink key={link.to} to={link.to} className={linkClass}>
              {link.label}
            </NavLink>
          ))}

          {isAuthenticated ? (
            <div className="flex items-center gap-4">
              {user?.role === 'admin' && (
                <NavLink to="/admin" className={linkClass}>
                  Admin
                </NavLink>
              )}
              <span className="text-xs text-olympo-gray">Hola, {user?.name}</span>
              <button
                onClick={logout}
                className="flex items-center gap-1 text-olympo-cream/80 hover:text-olympo-gold transition-colors"
                title="Cerrar sesión"
              >
                <LogOut className="h-4 w-4" />
              </button>
            </div>
          ) : (
            <NavLink to="/login" className="btn-outline-gold px-5 py-2 rounded-sm">
              Ingresar
            </NavLink>
          )}

          <Link to="/reservas" className="btn-gold px-5 py-2 rounded-sm font-medium">
            Reservar
          </Link>
        </div>

        {/* Botón menú móvil */}
        <button
          className="text-olympo-gold md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menú"
        >
          {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </nav>

      {/* Menú móvil desplegable */}
      {open && (
        <div className="mt-4 flex flex-col gap-5 border-t border-olympo-gold/20 bg-olympo-black/95 px-6 py-6 md:hidden">
          {NAV_LINKS.map((link) => (
            <NavLink key={link.to} to={link.to} className={linkClass} onClick={() => setOpen(false)}>
              {link.label}
            </NavLink>
          ))}
          {isAuthenticated && user?.role === 'admin' && (
            <NavLink to="/admin" className={linkClass} onClick={() => setOpen(false)}>
              Admin
            </NavLink>
          )}
          {isAuthenticated ? (
            <button
              onClick={() => {
                logout()
                setOpen(false)
              }}
              className="text-left text-olympo-cream/80"
            >
              Cerrar sesión ({user?.name})
            </button>
          ) : (
            <NavLink to="/login" className={linkClass} onClick={() => setOpen(false)}>
              Ingresar
            </NavLink>
          )}
          <Link
            to="/reservas"
            onClick={() => setOpen(false)}
            className="btn-gold w-fit px-5 py-2 rounded-sm font-medium"
          >
            Reservar
          </Link>
        </div>
      )}
    </header>
  )
}
