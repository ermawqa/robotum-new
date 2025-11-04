import React from 'react'
import * as assets from '@assets'

const partnerTypes = [
  {
    title: 'Lead Sponsors',
    partners: [
      { name: 'LIMX', logo: assets.limxLogo, link: 'https://limx.com' },
      { name: 'Maxon', logo: assets.maxonLogo, link: 'https://maxonmotor.com' },
      { name: 'Reply Roboverse', logo: assets.replyLogo, link: 'https://reply.com' },
    ]
  },
  {
    title: 'Sponsors',
    partners: [
      { name: 'CubeMars', logo: assets.cubemarsLogo, link: 'https://cubemars.com' },
      { name: 'Olive Robotics', logo: assets.oliveLogo, link: 'https://oliverobotics.com' },
    ]
  },
  {
    title: 'Industry Collaborators',
    partners: [
      { name: 'ITQ', logo: assets.itqLogo, link: 'https://itq.com' },
    ]
  },
  {
    title: 'Academic Collaborators',
    partners: [
      { name: 'TUM', logo: assets.tumLogo, link: 'https://tum.de' },
    ]
  }
]

const PartnerCategories = () => {
  return (
    <div className="grid gap-12">
      {partnerTypes.map((partnerType, idx) => (
        <div key={idx}>
          <h2 className="heading heading-h2 font-bold text-center mb-6">{partnerType.title}</h2>
          <div className="flex justify-center gap-8 flex-wrap">
            {partnerType.partners.map((partner, index) => (
              <a
                key={index}
                href={partner.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-32 h-32 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center transition-all duration-300 hover:bg-white/10"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-24 h-24 object-contain"
                />
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default PartnerCategories