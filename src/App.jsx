import React, { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

// Lazy-load route components for better performance (code-splitting)
const Home = lazy(() => import('@pages/Home'))
const About = lazy(() => import('@pages/About'))
const Join = lazy(() => import('@pages/Join-us'))
const Events = lazy(() => import('@pages/Events'))
const Partners = lazy(() => import('@pages/Partners'))

export default function App() {
  return (
    <Suspense
      fallback={
        <div className="w-full min-h-[40vh] flex items-center justify-center text-white/70">
          Loading…
        </div>
      }
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/join" element={<Join />} />
        <Route path="/events" element={<Events />} />
        <Route path="/partners" element={<Partners />} />
      </Routes>
    </Suspense>
  )
}