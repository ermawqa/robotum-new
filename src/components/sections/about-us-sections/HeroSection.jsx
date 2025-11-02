import * as assets from '@assets'
import React, { useEffect, useRef, useState } from 'react'

/** Smooth counter that starts when `inView` is true */
const Counter = ({ target, duration = 2000, inView = true }) => {
  const [value, setValue] = useState(0)
  const rafRef = useRef(null)
  const startRef = useRef(null)

  useEffect(() => {
    if (!inView) return
    const start = 0
    const end = Number(target) || 0
    const d = Math.max(600, duration)

    const step = (ts) => {
      if (!startRef.current) startRef.current = ts
      const elapsed = ts - startRef.current
      const progress = Math.min(1, elapsed / d)
      // easeOutCubic
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = Math.round(start + (end - start) * eased)
      setValue(current)
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step)
      }
    }
    rafRef.current = requestAnimationFrame(step)
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      startRef.current = null
    }
  }, [inView, target, duration])

  return <span>{value}</span>
}

export default function AboutHero() {
  const statsRef = useRef(null)
  const [statsInView, setStatsInView] = useState(false)

  // Start counters when the stats block enters viewport
  useEffect(() => {
    const node = statsRef.current
    if (!node) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      className="section-gradient text-white pt-28 pb-16 px-6 min-h-screen font-sans"
      aria-labelledby="about-hero-heading"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-10 mb-12 md:mb-16">
          {/* Copy */}
          <div className="md:w-1/2">
            <h1
              id="about-hero-heading"
              className="font-bold leading-tight [text-wrap:balance] text-h2"
            >
              More than a<br /> student club!
            </h1>
            <p className="mt-4 text-text1 text-white/80">
              We bring together students from all disciplines to turn ideas into real
              robots — hands on and driven by passion.
            </p>
          </div>

          {/* Visual */}
          <div className="md:w-1/2">
            <img
              src={assets.auditoryImg}
              alt="RoboTUM students collaborating during a robotics session"
              className="rounded-xl w-full shadow-lg border border-white/10"
              loading="eager"
              decoding="async"
            />
          </div>
        </div>

        {/* Stats */}
        <div
          ref={statsRef}
          className="grid grid-cols-1 sm:grid-cols-3 gap-5 md:gap-8 text-center"
          aria-label="RoboTUM key figures"
        >
          <div className="rounded-xl p-6 bg-white/5 border border-white/10 backdrop-blur-sm">
            <p className="text-[2.5rem] md:text-[3.25rem] font-semibold text-blue-100 leading-none">
              +<Counter target={100} inView={statsInView} />
            </p>
            <p className="mt-2 text-text2 text-white/75">active members</p>
          </div>

          <div className="rounded-xl p-6 bg-white/5 border border-white/10 backdrop-blur-sm">
            <p className="text-[2.5rem] md:text-[3.25rem] font-semibold text-blue-100 leading-none">
              +<Counter target={21} inView={statsInView} />
            </p>
            <p className="mt-2 text-text2 text-white/75">partners &amp; sponsors</p>
          </div>

          <div className="rounded-xl p-6 bg-white/5 border border-white/10 backdrop-blur-sm">
            <p className="text-[2.5rem] md:text-[3.25rem] font-semibold text-blue-100 leading-none">
              +<Counter target={3} inView={statsInView} />
            </p>
            <p className="mt-2 text-text2 text-white/75">projects in development</p>
          </div>
        </div>
      </div>
    </section>
  )
}