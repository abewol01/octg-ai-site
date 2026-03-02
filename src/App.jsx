import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import Home from './pages/Home'
import Pricing from './pages/Pricing'
import Tracker from './pages/Tracker'
import Mtr from './pages/Mtr'
import Customers from './pages/Customers'
import FieldIntelligence from './pages/FieldIntelligence'
import Security from './pages/Security'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/tracker" element={<Tracker />} />
          <Route path="/mtr" element={<Mtr />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/field-intelligence" element={<FieldIntelligence />} />
          <Route path="/security" element={<Security />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}
