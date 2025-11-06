import React, { useEffect } from 'react'
import Navbar from '@components/sections/common-sections/Navbar'
import FooterSection from '@components/sections/common-sections/FooterSection'

export default function GenderAndDiversity() {
  useEffect(() => { document.title = 'Gender & Diversity | RoboTUM' }, [])
  return (
    <>
      <Navbar />
      <main className="w-full px-6 md:px-16 py-16 font-sans surface-2 edge-fade-top edge-fade-bottom">
        <article className="prose prose-invert max-w-3xl mx-auto">
          <h1 className="heading heading-h2 font-bold mb-6">Gender & Diversity Statement</h1>

          <p className="mb-6">
            RoboTUM is committed to an inclusive, respectful environment. We welcome participants of all genders,
            identities, backgrounds, abilities, and cultures. Our language aims to be gender-inclusive; where masculine
            forms are used, they are intended to include all genders.
          </p>

          <section className="mb-8">
            <h2 className="text-text1 font-semibold">Principles</h2>
            <ul>
              <li>Equal opportunities in recruitment, membership, and leadership.</li>
              <li>Zero tolerance for discrimination or harassment.</li>
              <li>Accessible events and materials wherever feasible.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-text1 font-semibold">Contact</h2>
            <p>For concerns or suggestions, contact diversity@robotum.de.</p>
          </section>

          <p className="text-white/60 mt-10 text-sm">Last reviewed: {new Date().toLocaleDateString()}</p>
        </article>
      </main>
      <FooterSection />
    </>
  )
}