# 🏛️ Olympo — Hotel de Super Lujo

> "Donde los dioses descansan"

SPA (Single Page Application) construida en **React 19 + Vite 8** para el sistema de reservas del hotel de lujo Olympo. Diseño premium en negro, dorado y blanco hueso, con tipografía serif elegante (Marcellus / Cormorant Garamond) y animaciones suaves.

## 🚀 Puesta en marcha

```bash
npm install
npm run dev       # servidor de desarrollo (http://localhost:5173)
npm run build     # build de producción → carpeta dist/
npm run preview   # sirve el build de producción localmente
```

Requiere **Node.js 18+**.

## 🧱 Stack técnico

| Capa | Tecnología |
|---|---|
| Framework | React 19 + Vite 8 |
| Enrutamiento | React Router 7 |
| Estilos | Tailwind CSS v4 (vía `@tailwindcss/vite`) |
| Estado global | Context API (3 contextos: Auth, Reservation, Toast) |
| Iconos | lucide-react |
| Persistencia simulada | `localStorage` (reservas y sesión) |

## 📁 Estructura del proyecto

```
src/
├── assets/            # recursos estáticos
├── components/        # componentes reutilizables (Navbar, Footer, RoomCard, etc.)
├── context/            # AuthContext, ReservationContext, ToastContext
├── pages/              # una página por ruta (Home, Rooms, Reservations, ...)
├── services/           # mockApi.js — simulación de backend + datos
├── styles/             # index.css — tema Tailwind + estilos globales
├── App.jsx             # layout raíz + definición de rutas
└── main.jsx            # punto de entrada, monta providers y router
```

## 🗺️ Rutas disponibles

| Ruta | Página | Acceso |
|---|---|---|
| `/` | Inicio | Público |
| `/habitaciones` | Habitaciones (con filtros) | Público |
| `/reservas` | Formulario de reserva | Público |
| `/servicios` | Servicios exclusivos | Público |
| `/galeria` | Galería con carrusel | Público |
| `/contacto` | Formulario + mapa | Público |
| `/login` | Autenticación simulada | Público |
| `/admin` | Panel de reservas | Solo rol `admin` (ruta protegida) |

## 🔐 Simulación de autenticación

No hay backend real. Cualquier correo + contraseña (mínimo 4 caracteres) es aceptado.
Si el correo contiene la palabra **"admin"** (ej. `admin@olympo.com`), el usuario recibe
el rol `admin` y puede acceder al panel `/admin`, donde se listan todas las reservas
guardadas en `localStorage`.

## 📝 Reservas

El formulario de `/reservas` valida:
- Nombre (mínimo 3 caracteres)
- Correo electrónico con formato válido
- Fecha de entrada (no puede ser pasada)
- Fecha de salida (posterior a la de entrada)
- Número de huéspedes (1–10)
- Tipo de habitación

Al confirmar, la reserva se guarda en `localStorage` (clave `olympo_reservations`) simulando
una llamada asíncrona a una API real (con latencia artificial). Se muestra una pantalla de
confirmación con el código de reserva generado.

## 🎨 Sistema de diseño

Definido en `src/styles/index.css` mediante `@theme` de Tailwind v4:

- **Colores**: `olympo-black`, `olympo-charcoal`, `olympo-gold`, `olympo-gold-light`, `olympo-cream`, `olympo-gray`
- **Tipografía**: `font-display` (Marcellus) para títulos, `font-body` (Jost) para texto
- **Componentes utilitarios**: `.btn-gold`, `.btn-outline-gold`, `.card-luxe`, `.input-luxe`, `.gold-divider`, `.text-gold-gradient`

## 💡 Posibles extensiones futuras

- Conectar `services/mockApi.js` a un backend real (Node.js/Express o Firebase)
- Añadir notificaciones push de confirmación por correo
- Internacionalización (i18n) para múltiples idiomas
- Modo claro / oscuro alternable
