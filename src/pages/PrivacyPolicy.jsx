import React, { useEffect } from 'react'
import Navbar from '@components/sections/common-sections/Navbar'
import FooterSection from '@components/sections/common-sections/FooterSection'

export default function PrivacyPolicy() {
  useEffect(() => { document.title = 'Privacy Policy | RoboTUM' }, [])
  return (
    <>
      <Navbar />
      <main className="w-full px-6 md:px-16 py-16 font-sans surface-2 edge-fade-top edge-fade-bottom">
        <article className="prose prose-invert max-w-3xl mx-auto">
          <h1 className="heading heading-h2 font-bold mb-6">Privacy Policy</h1>

          <section className="mb-8">
            <h2 className="text-text1 font-semibold">Controller</h2>
            <p>RoboTUM, Technische Universität München (TUM), contact@robotum.de</p>
          </section>

          <section className="mb-8">
            <h2 className="text-text1 font-semibold">Data We Process</h2>
            <ul>
              <li>Contact data (e.g., name, email via forms)</li>
              <li>Usage data (e.g., pages viewed, device/browser)</li>
              <li>Event/application data you submit</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-text1 font-semibold">Purposes & Legal Bases (GDPR Art. 6)</h2>
            <ul>
              <li>Website operation & security (legitimate interests)</li>
              <li>Responding to inquiries (contract/steps prior)</li>
              <li>Newsletters (consent)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-text1 font-semibold">Cookies & Analytics</h2>
            <p>We use only essential cookies by default. Analytics/marketing cookies, if any, are opt-in via consent banner.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-text1 font-semibold">Your Rights</h2>
            <p>Access, rectification, erasure, restriction, data portability, objection, and withdrawal of consent. Contact: privacy@robotum.de</p>
          </section>

          <p className="text-white/60 mt-10 text-sm">Last updated: {new Date().toLocaleDateString()}</p>
        </article>
      </main>
      <FooterSection />
    </>
  )
}