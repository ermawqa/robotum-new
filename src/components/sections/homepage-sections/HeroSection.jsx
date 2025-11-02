import { Link } from 'react-router-dom'
import * as assets from '@assets'

/**
 * HeroSection
 * - Uses design tokens (CSS vars) and Tailwind utilities
 * - Responsive typography mapped to your system: display / h1 / text1
 * - Reusable via simple props for title and CTAs
 */
export default function HeroSection({
  title = 'Shaping the Future of Robotics',
  ctaPrimary = 'Become a Member',
  ctaPrimaryTo = '/join',
  ctaSecondary = 'Become a Partner',
  ctaSecondaryTo = '/#partners',
}) {
  const baseBtn =
    'inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2'

  const primaryBtn =
    `${baseBtn} bg-[var(--brand)] text-white hover:opacity-90 focus-visible:ring-[var(--brand)]`

  const secondaryBtn =
    `${baseBtn} ring-1 ring-white/30 bg-white/10 text-white hover:bg-white/20 focus-visible:ring-white/50`

  return (
    <section
      id="hero"
      role="region"
      aria-labelledby="hero-heading"
      className="relative w-full min-h-screen px-6 py-24 text-white font-sans section-gradient overflow-hidden"
    >
      {/* Dark overlay for readability */}
      <div className="pointer-events-none absolute inset-0 bg-black/20" />

      {/* Content */}
      <div className="relative z-10 flex items-center">
        <div className="container mx-auto md:py-32 grid place-items-center text-center">
          {/* Logo */}
          <img
            src={assets.navLogo}
            alt="RoboTUM logo"
            className="w-40 md:w-56 h-auto mb-8 drop-shadow"
            loading="eager"
            decoding="async"
          />

          {/* Heading */}
          <h1
            id="hero-heading"
            className="font-bold leading-tight tracking-tight text-4xl md:text-h1 lg:text-display"
          >
            {title}
          </h1>

          {/* Subtext (optional): map to text1 scale if you add subtitle later */}
          <p className="mt-4 text-text1 text-white/80 max-w-3xl">Your subtitle here</p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6">
            <Link to={ctaPrimaryTo} className={primaryBtn}>
              {ctaPrimary}
            </Link>
            {ctaSecondary ? (
              <Link to={ctaSecondaryTo} className={secondaryBtn}>
                {ctaSecondary}
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}