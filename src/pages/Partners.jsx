// Above-the-fold imports
import Navbar from '@components/sections/common-sections/Navbar'
import FooterSection from '@components/sections/common-sections/FooterSection'

// Lazy-load below-the-fold content for performance
import React, { lazy, Suspense, useEffect } from 'react'
// const PartnersSection = lazy(() => import('@components/sections/homepage-sections/PartnersSection'))
const PartnerCategories = lazy(() => import('@components/sections/partners-sections/PartnerCategories'))
const NextPrototypes = lazy(() => import('@components/sections/partners-sections/NextPrototypes'))
const WhatWeOffer = lazy(() => import('@components/sections/partners-sections/WhatWeOffer'))

export default function Partners() {
  useEffect(() => {
    document.title = 'Partners | RoboTUM'
  }, [])

  return (
    <>
      <Navbar />

      <Suspense
        fallback={
          <div className="w-full min-h-[40vh] flex items-center justify-center text-white/70">
            Loading…
          </div>
        }
      >
        <PartnerCategories />
        <WhatWeOffer />
        <NextPrototypes />
      </Suspense>

      <FooterSection />
    </>
  )
}