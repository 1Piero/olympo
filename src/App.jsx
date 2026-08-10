import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'

import Home from './pages/Home.jsx'
import Rooms from './pages/Rooms.jsx'
import Reservations from './pages/Reservations.jsx'
import Services from './pages/Services.jsx'
import Gallery from './pages/Gallery.jsx'
import Contact from './pages/Contact.jsx'
import Login from './pages/Login.jsx'
import Admin from './pages/Admin.jsx'
import NotFound from './pages/NotFound.jsx'

/**
 * App
 * --------------------------------------------------------------
 * Componente raíz: define el layout general (Navbar + contenido
 * + Footer) y el árbol de rutas de la aplicación mediante
 * React Router.
 * --------------------------------------------------------------
 */
export default function App() {
  return (
    <div className="flex min-h-screen flex-col bg-olympo-black">
      <Navbar />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/habitaciones" element={<Rooms />} />
          <Route path="/reservas" element={<Reservations />} />
          <Route path="/servicios" element={<Services />} />
          <Route path="/galeria" element={<Gallery />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/admin"
            element={
              <ProtectedRoute requireRole="admin">
                <Admin />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}
