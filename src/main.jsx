import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'
// Bundle Font Awesome so <i class="fab ..."> renders reliably
import 'font-awesome/css/font-awesome.min.css'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
