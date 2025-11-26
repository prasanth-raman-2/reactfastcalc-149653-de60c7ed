import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

const container = document.getElementById('root')
const root = createRoot(container)

// Bootstraps the React application
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
