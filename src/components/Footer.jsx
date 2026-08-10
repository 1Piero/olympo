import { Link } from 'react-router-dom'
import { Crown, Camera, MessageCircle, Send, MapPin, Phone, Mail } from 'lucide-react'

// footer

export default function Footer() {
  return (
    <footer className="border-t border-olympo-gold/15 bg-olympo-black">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-4">
        {/* Marca */}
        <div>
          <div className="flex items-center gap-2">
            <Crown className="h-6 w-6 text-olympo-gold" />
            <span className="font-display text-xl tracking-[0.2em] text-olympo-cream">OLYMPO</span>
          </div>
          <p className="mt-4 font-serif italic text-olympo-gray">
            "Donde los dioses descansan"
          </p>
          <div className="mt-6 flex gap-4">
            <a href="#" aria-label="Instagram" className="text-olympo-gray hover:text-olympo-gold transition-colors">
              <Camera className="h-5 w-5" />
            </a>
            <a href="#" aria-label="Facebook" className="text-olympo-gray hover:text-olympo-gold transition-colors">
              <MessageCircle className="h-5 w-5" />
            </a>
            <a href="#" aria-label="Twitter / X" className="text-olympo-gray hover:text-olympo-gold transition-colors">
              <Send className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Enlaces */}
        <div>
          <h4 className="mb-4 text-sm uppercase tracking-widest text-olympo-gold">Explorar</h4>
          <ul className="space-y-3 text-sm text-olympo-cream/80">
            <li><Link to="/habitaciones" className="hover:text-olympo-gold-light transition-colors">Habitaciones</Link></li>
            <li><Link to="/servicios" className="hover:text-olympo-gold-light transition-colors">Servicios</Link></li>
            <li><Link to="/galeria" className="hover:text-olympo-gold-light transition-colors">Galería</Link></li>
            <li><Link to="/reservas" className="hover:text-olympo-gold-light transition-colors">Reservas</Link></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="mb-4 text-sm uppercase tracking-widest text-olympo-gold">Hotel</h4>
          <ul className="space-y-3 text-sm text-olympo-cream/80">
            <li><Link to="/contacto" className="hover:text-olympo-gold-light transition-colors">Contacto</Link></li>
            <li><Link to="/login" className="hover:text-olympo-gold-light transition-colors">Mi cuenta</Link></li>
            <li><span className="cursor-default">Política de privacidad</span></li>
            <li><span className="cursor-default">Términos y condiciones</span></li>
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h4 className="mb-4 text-sm uppercase tracking-widest text-olympo-gold">Contacto</h4>
          <ul className="space-y-3 text-sm text-olympo-cream/80">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-olympo-gold" />
              Av. Monte Olimpo 100, Grecia
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-olympo-gold" />
              +51 999 888 777
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-olympo-gold" />
              reservas@olympohotel.com
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-olympo-gold/10 px-6 py-6 text-center text-xs text-olympo-gray">
        © {new Date().getFullYear()} Hotel Olympo. Todos los derechos reservados.
      </div>
    </footer>
  )
}
