import React, { useEffect } from 'react'
import Navbar from '@components/sections/common-sections/Navbar'
import FooterSection from '@components/sections/common-sections/FooterSection'

export default function Impressum() {
  useEffect(() => { document.title = 'Impressum | RoboTUM' }, [])
  return (
    <>
      <Navbar />
      <main className="w-full px-6 md:px-16 py-16 font-sans surface-2 edge-fade-top edge-fade-bottom">
        <article className="prose prose-invert max-w-3xl mx-auto">
          <h1 className="heading heading-h2 font-bold mb-6">Impressum</h1>

          <section className="mb-8">
            <h2 className="text-text1 font-semibold">Angaben gemäß § 5 TMG</h2>
            <p>
              RoboTUM – Student Initiative at Technische Universität München (TUM)<br/>
              Street & Nr., PLZ City, Germany<br/>
              E-Mail: contact@robotum.de<br/>
              Vertretungsberechtigt: Vorstands-/Leitungsteam
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-text1 font-semibold">Haftungsausschluss</h2>
            <p>Inhalte wurden mit größter Sorgfalt erstellt; für Richtigkeit, Vollständigkeit und Aktualität übernehmen wir keine Gewähr.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-text1 font-semibold">Urheberrecht</h2>
            <p>Die durch RoboTUM erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht.</p>
          </section>

          <p className="text-white/60 mt-10 text-sm">Letzte Aktualisierung: {new Date().toLocaleDateString()}</p>
        </article>
      </main>
      <FooterSection />
    </>
  )
}