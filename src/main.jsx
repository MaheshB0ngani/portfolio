import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'
import { trackVisit } from './lib/tracker'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// Fire-and-forget tracking (respects siteConfig.analytics.enabled)
try {
  // Do not await; don't block app startup
  void trackVisit()
} catch (e) {
  // ignore
  console.error('trackVisit error', e)
}
