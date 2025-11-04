import React from 'react'
import * as assets from '@assets'

const offers = [
  {
    icon: assets.iconOffer1,
    title: 'Networking Opportunities',
    description: 'Connect with professionals and experts in robotics to share knowledge and ideas.',
  },
  {
    icon: assets.iconOffer2,
    title: 'Skill Development',
    description: 'Gain hands-on experience in cutting-edge robotics projects and technologies.',
  },
  {
    icon: assets.iconOffer3,
    title: 'Innovation Support',
    description: 'Collaborate on innovative solutions with industry leaders and academic experts.',
  },
  {
    icon: assets.iconOffer4,
    title: 'Global Exposure',
    description: 'Get involved in international competitions and events to showcase your skills.',
  }
]

const WhatWeOffer = () => {
  return (
    <div className="mt-16 text-center">
      <h2 className="heading heading-h2 font-bold mb-8">What We Offer</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {offers.map((offer, index) => (
          <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-white text-center">
            <img
              src={offer.icon}
              alt={offer.title}
              className="w-16 h-16 mb-6 mx-auto"
            />
            <h3 className="text-text1 font-semibold mb-4">{offer.title}</h3>
            <p className="text-text2 text-white/80">{offer.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WhatWeOffer