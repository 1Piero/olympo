// Mock API para el Hotel Olympo

// Datos de habitaciones
export const ROOMS = [
  {
    id: 'suite-olimpica',
    name: 'Suite Olímpica',
    type: 'Suite',
    price: 1200,
    capacity: 2,
    image:
      'https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=1400&auto=format&fit=crop',
    description:
      'Una suite espaciosa con vista panorámica, sala de estar privada, jacuzzi de mármol y mayordomo personal disponible las 24 horas.',
    amenities: ['Vista panorámica', 'Jacuzzi privado', 'Mayordomo 24/7', 'Minibar premium'],
  },
  {
    id: 'deluxe-zeus',
    name: 'Habitación Deluxe Zeus',
    type: 'Deluxe',
    price: 650,
    capacity: 2,
    image:
      'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1400&auto=format&fit=crop',
    description:
      'Elegancia y confort en cada detalle: cama king size, terraza privada y acceso preferente al spa y a la piscina infinita.',
    amenities: ['Terraza privada', 'Cama king size', 'Acceso preferente al spa'],
  },
  {
    id: 'presidencial-zeus-olimpo',
    name: 'Suite Presidencial Olimpo',
    type: 'Presidencial',
    price: 3200,
    capacity: 4,
    image:
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1400&auto=format&fit=crop',
    description:
      'La experiencia más exclusiva del hotel: piscina privada, comedor para ocho personas, gimnasio propio y traslados VIP incluidos.',
    amenities: ['Piscina privada', 'Comedor privado', 'Gimnasio propio', 'Traslado VIP incluido'],
  },
  {
    id: 'deluxe-hera',
    name: 'Habitación Deluxe Hera',
    type: 'Deluxe',
    price: 720,
    capacity: 3,
    image:
      'https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=1400&auto=format&fit=crop',
    description:
      'Diseño contemporáneo con toques dorados, vistas a los jardines interiores y desayuno gourmet incluido cada mañana.',
    amenities: ['Vista a jardines', 'Desayuno gourmet', 'Smart TV 65"'],
  },
  {
    id: 'suite-afrodita',
    name: 'Suite Afrodita',
    type: 'Suite',
    price: 1450,
    capacity: 2,
    image:
      'https://plalla.com/wp-content/uploads/2024/10/habitacion-con-piscina-afrodita-retreat-tulum.webp',
    description:
      'Pensada para escapadas románticas: bañera de hidromasaje con vista al mar, champán de bienvenida y decoración exclusiva.',
    amenities: ['Bañera con vista al mar', 'Champán de bienvenida', 'Decoración exclusiva'],
  },
  {
    id: 'presidencial-poseidon',
    name: 'Suite Presidencial Poseidón',
    type: 'Presidencial',
    price: 3600,
    capacity: 6,
    image:
      'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=1400&auto=format&fit=crop',
    description:
      'Ubicada en el ático del hotel, con vistas de 360°, sala de cine privada y acceso directo al helipuerto de Olympo.',
    amenities: ['Vistas 360°', 'Sala de cine privada', 'Acceso a helipuerto'],
  },
]

// ---------- Servicios del hotel ----------
export const SERVICES = [
  {
    id: 'spa',
    name: 'Spa de Lujo',
    icon: 'Sparkles',
    image:
      'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1200&auto=format&fit=crop',
    description:
      'Un santuario de bienestar con tratamientos exclusivos, sauna de sal del Himalaya y terapeutas expertos a tu disposición.',
  },
  {
    id: 'restaurante',
    name: 'Restaurante Gourmet',
    icon: 'UtensilsCrossed',
    image:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop',
    description:
      'Alta cocina internacional dirigida por chefs galardonados, maridajes exclusivos y una carta de vinos de autor.',
  },
  {
    id: 'piscina',
    name: 'Piscina Infinita',
    icon: 'Waves',
    image:
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1200&auto=format&fit=crop',
    description:
      'Una piscina de borde infinito con vistas espectaculares, servicio de bar junto al agua y camastros privados.',
  },
  {
    id: 'transporte',
    name: 'Transporte VIP',
    icon: 'CarFront',
    image:
      'https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1200&auto=format&fit=crop',
    description:
      'Flota privada de vehículos de lujo y traslados en helicóptero para una llegada y salida verdaderamente olímpicas.',
  },
]

// ---------- Galería ----------
export const GALLERY_IMAGES = [
  'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=1400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=1400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1400&auto=format&fit=crop',
  'https://plalla.com/wp-content/uploads/2024/10/habitacion-con-piscina-afrodita-retreat-tulum.webp',
  'https://images.unsplash.com/photo-1568084680786-a84f91d1153c?q=80&w=1400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1400&auto=format&fit=crop',
]

// Pequeña utilidad para simular latencia de red
const delay = (ms = 700) => new Promise((resolve) => setTimeout(resolve, ms))

/**
 * Simula el envío de una reserva a un backend.
 * Guarda el registro en localStorage bajo la clave "olympo_reservations".
 */
export async function createReservation(reservation) {
  await delay(900)
  const stored = JSON.parse(localStorage.getItem('olympo_reservations') || '[]')
  const newReservation = {
    ...reservation,
    id: `RES-${Date.now()}`,
    createdAt: new Date().toISOString(),
    status: 'Confirmada',
  }
  stored.push(newReservation)
  localStorage.setItem('olympo_reservations', JSON.stringify(stored))
  return newReservation
}

/** Obtiene todas las reservas almacenadas (usado por el panel de administrador). */
export async function getReservations() {
  await delay(400)
  return JSON.parse(localStorage.getItem('olympo_reservations') || '[]')
}

/**
 * Simula un inicio de sesión. Cualquier combinación de correo/contraseña
 * válida (no vacía) es aceptada, ya que no existe backend real.
 */
export async function loginRequest(email, password) {
  await delay(800)
  if (!email || !password) {
    throw new Error('Correo y contraseña son obligatorios.')
  }
  if (password.length < 4) {
    throw new Error('La contraseña debe tener al menos 4 caracteres.')
  }
  const user = { email, name: email.split('@')[0], role: email.includes('admin') ? 'admin' : 'guest' }
  localStorage.setItem('olympo_user', JSON.stringify(user))
  return user
}

export function logoutRequest() {
  localStorage.removeItem('olympo_user')
}

export function getStoredUser() {
  const raw = localStorage.getItem('olympo_user')
  return raw ? JSON.parse(raw) : null
}
