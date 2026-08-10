import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './styles/index.css'
import App from './App.jsx'
import { AuthProvider } from './context/AuthContext.jsx'
import { ReservationProvider } from './context/ReservationContext.jsx'
import { ToastProvider } from './context/ToastContext.jsx'

// Punto de entrada de la aplicación.
// Envolvemos App con los providers de contexto necesarios y el router.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ToastProvider>
        <AuthProvider>
          <ReservationProvider>
            <App />
          </ReservationProvider>
        </AuthProvider>
      </ToastProvider>
    </BrowserRouter>
  </StrictMode>,
)
