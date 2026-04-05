import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './index.css'
import App from './App.jsx'

function Root() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false
    })
  }, [])

  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Root />
  </StrictMode>
)