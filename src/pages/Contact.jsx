import { useState } from 'react'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import SectionTitle from '../components/SectionTitle.jsx'
import { useToast } from '../context/ToastContext.jsx'

const initialForm = { name: '', email: '', message: '' }

// Contact

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const { showToast } = useToast()

  const handleChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const validate = () => {
    const newErrors = {}
    if (!form.name.trim()) newErrors.name = 'Ingresa tu nombre.'
    if (!/^\S+@\S+\.\S+$/.test(form.email)) newErrors.email = 'Correo electrónico inválido.'
    if (!form.message.trim() || form.message.trim().length < 10) {
      newErrors.message = 'Tu mensaje debe tener al menos 10 caracteres.'
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) {
      showToast('Revisa los campos marcados en el formulario.', 'error')
      return
    }
    showToast('Mensaje enviado. Nuestro equipo te contactará pronto.', 'success')
    setForm(initialForm)
  }

  return (
    <div className="min-h-screen bg-olympo-black px-6 pb-24 pt-36">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Estamos para ti"
          title="Contáctanos"
          description="¿Tienes alguna pregunta o solicitud especial? Nuestro equipo está disponible para ayudarte."
        />

        <div className="grid gap-10 lg:grid-cols-2">
          {/* Formulario */}
          <form onSubmit={handleSubmit} className="card-luxe rounded-md p-8">
            <div className="grid gap-6">
              <div>
                <label className="mb-2 block text-xs uppercase tracking-widest text-olympo-gray">
                  Nombre
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Tu nombre"
                  className="input-luxe w-full rounded-sm px-4 py-3 text-sm"
                />
                {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name}</p>}
              </div>

              <div>
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

              <div>
                <label className="mb-2 block text-xs uppercase tracking-widest text-olympo-gray">
                  Mensaje
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Cuéntanos en qué podemos ayudarte…"
                  className="input-luxe w-full rounded-sm px-4 py-3 text-sm"
                />
                {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message}</p>}
              </div>

              <button type="submit" className="btn-gold rounded-sm py-3.5 font-medium">
                Enviar mensaje
              </button>
            </div>
          </form>

          {/* Información + Mapa */}
          <div className="flex flex-col gap-8">
            <div className="card-luxe rounded-md p-8">
              <ul className="space-y-5 text-sm text-olympo-cream/85">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-olympo-gold" />
                  Av. Monte Olimpo 100, Grecia
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 shrink-0 text-olympo-gold" />
                  +51 999 888 777
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 shrink-0 text-olympo-gold" />
                  reservas@olympohotel.com
                </li>
                <li className="flex items-center gap-3">
                  <Clock className="h-5 w-5 shrink-0 text-olympo-gold" />
                  Recepción disponible las 24 horas
                </li>
              </ul>
            </div>

            <div className="h-80 overflow-hidden rounded-md border border-olympo-gold/15">
              <iframe
                title="Ubicación del Hotel Olympo"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3145.5!2d21.6086!3d37.9838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDU5JzAxLjciTiAyMcKwMzYnMzEuMCJF!5e0!3m2!1ses!2spe!4v1700000000000"
                className="h-full w-full grayscale invert-[0.9] contrast-[1.1]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
