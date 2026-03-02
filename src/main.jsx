import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Analytics placeholder — add Google Analytics / Plausible / PostHog script here
// import { initAnalytics } from './analytics'
// initAnalytics()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
