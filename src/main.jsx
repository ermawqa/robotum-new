import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/globals.css'
import { BrowserRouter, HashRouter } from 'react-router-dom'

// Use HashRouter when hosted under a subpath (GitHub Pages)
const isSubpath = import.meta.env.BASE_URL !== '/'
const Router = isSubpath ? HashRouter : BrowserRouter

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router basename={import.meta.env.BASE_URL}>
      <App />
    </Router>
  </React.StrictMode>
)