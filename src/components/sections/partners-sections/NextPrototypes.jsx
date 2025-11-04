import React from 'react'
import * as assets from '@assets'

const NextPrototypes = () => {
  return (
    <div className="mt-16 text-center">
      <h3 className="text-h3 font-bold mb-4">Proud Members of</h3>
      <div className="flex justify-center mb-6">
        <img
          src={assets.nextPrototypesLogo}
          alt="Next Prototypes"
          className="w-48 h-auto object-contain"
        />
      </div>
      <p className="text-text2 md:text-text1 text-white/80 leading-relaxed max-w-2xl mx-auto">
        We are proud to be part of Next Prototypes, an innovative community pushing the boundaries of technology.
      </p>
    </div>
  )
}

export default NextPrototypes