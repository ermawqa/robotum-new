import { useState, useMemo } from 'react'
import * as assets from '@assets'
import Button from '@components/ui/Button'
import ImageFrame from '@components/ui/ImageFrame'
import { events } from '@data/events'

export default function EventSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  // Compute the 4 nearest events: upcoming first by start date; if fewer than 4, backfill with most recent past
  const nearest4 = useMemo(() => {
    const now = new Date()
    const upcoming = events
      .filter(e => new Date(e.end) >= now)
      .sort((a, b) => new Date(a.start) - new Date(b.start))

    const past = events
      .filter(e => new Date(e.end) < now)
      .sort((a, b) => new Date(b.end) - new Date(a.end))

    const combined = [...upcoming, ...past]
    return combined.slice(0, 4)
  }, [])

  // If active index is out of range due to fewer than 4 events, clamp to 0
  const safeActiveIndex = Math.min(activeIndex, Math.max(0, nearest4.length - 1))

  // Format date range like: 10–14 Feb, 2025 or Feb 28, 2025 – Mar 2, 2025
  const formatDateRange = (start, end) => {
    const s = new Date(start)
    const e = new Date(end)
    const sameMonth = s.getMonth() === e.getMonth() && s.getFullYear() === e.getFullYear()
    const startDay = s.getDate()
    const endDay = e.getDate()
    const monthShort = s.toLocaleString('en-US', { month: 'short' })
    const endMonthShort = e.toLocaleString('en-US', { month: 'short' })
    const year = s.getFullYear()

    if (sameMonth) return `${startDay}–${endDay} ${monthShort}, ${year}`

    const startStr = s.toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })
    const endStr = e.toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })
    return `${startStr} – ${endStr}`
  }

  return (
    <section
      id="events"
      className="section-container font-sans text-white surface-2 edge-fade-top edge-fade-bottom surface-wrap surface-pattern"
      aria-labelledby="events-section-heading"
      role="region"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left side - image and title */}
        <div className="md:w-5/12 text-left">
          <h2 id="events-section-heading" className="heading heading-h1 font-bold leading-tight mb-8">
            Next up at RoboTUM
          </h2>
          <ImageFrame
            src={assets.speakerImg}
            alt="Event speaker"
            aspect="3/2"
            fit="cover"
            variant="soft"
            rounded="xl"
            className="w-full shadow-lg"
          />
          {/* View all events button on mobile stacked under image */}
          <div className="mt-6 md:hidden">
            <Button as="link" to="/events" variant="secondary" className="w-full justify-center">
              View all events →
            </Button>
          </div>
        </div>

        {/* Right side - nearest 4 events list */}
        <div className="md:w-7/12 flex flex-col gap-6" role="list" aria-labelledby="events-section-heading">
          {nearest4.length === 0 && (
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-white/70">
              No events to show yet. Check back soon!
            </div>
          )}

          {nearest4.map((event, index) => {
            const isActive = safeActiveIndex === index
            return (
              <button
                type="button"
                key={event.id}
                role="listitem"
                onClick={() => setActiveIndex(index)}
                aria-expanded={isActive}
                aria-controls={`event-panel-${index}`}
                className={`w-full text-left cursor-pointer p-6 rounded-2xl border transition-all duration-500 backdrop-blur-sm ${
                  isActive
                    ? 'bg-accent/20 border-accent shadow-[0_8px_28px_rgba(59,130,246,0.25)] scale-[1.02]'
                    : 'bg-white/5 border-white/10 hover:bg-white/10'
                }`}
              >
                <div className="flex justify-between items-start">
                  <div className="flex gap-4">
                    <div className="text-center px-3 py-2 rounded-lg bg-white/5 border border-white/10">
                      <div className="text-xs font-bold text-slate-300 tracking-wider">
                        {new Date(event.start).toLocaleString('en-US', { month: 'short' })}
                      </div>
                      <div className="text-2xl font-bold text-white leading-none">
                        {new Date(event.start).getDate()}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-slate-300">{event.type}</div>
                      <div className="text-[15px] md:text-base font-semibold text-white">{event.title}</div>
                      <div className="text-sm text-white/60 italic">{formatDateRange(event.start, event.end)}</div>
                    </div>
                  </div>
                  <div className="text-white text-xl transition-transform duration-300">{isActive ? '▾' : '▸'}</div>
                </div>

                {isActive && (
                  <div id={`event-panel-${index}`} className="mt-4 text-slate-200 whitespace-pre-line animate-fadeIn">
                    <p>{event.blurb}</p>
                    <p className="text-sm text-white/60 mt-1 italic">{event.location}</p>
                    {event.links?.register && (
                      <div className="mt-4">
                        <Button variant="secondary" as="link" to={event.links.register} className="text-sm px-4 py-2">
                          Register →
                        </Button>
                      </div>
                    )}
                  </div>
                )}
              </button>
            )
          })}

          {/* View all events button for desktop */}
          <div className="hidden md:flex justify-end pt-2">
            <Button as="link" to="/events" variant="secondary">
              View all events →
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}