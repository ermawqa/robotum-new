import * as assets from '@assets'

const partnerTypes = [
  {
    title: 'Lead Sponsors',
    partners: [
      { name: 'LIMX Dynamics', logo: assets.limx, link: 'https://limx.com' },
      { name: 'Maxon', logo: assets.maxon, link: 'https://maxongroup.com' },
      { name: 'Reply Roboverse', logo: assets.reply, link: 'https://reply.com' },
    ],
  },
  {
    title: 'Sponsors',
    partners: [
      { name: 'CubeMars', logo: assets.cubemars, link: 'https://cubemars.com' },
      { name: 'Cadfem', logo: assets.cadfem, link: '#' },
      { name: 'Fort', logo: assets.fort, link: '#' },
      { name: 'MayTec', logo: assets.maytec, link: '#' },
    ],
  },
  {
    title: 'Industry Collaborators',
    partners: [
      { name: 'NVIDIA', logo: assets.nvidia, link: 'https://nvidia.com' },
      { name: 'UVC Partners', logo: assets.uvc, link: '#' },
      { name: '3Dconnexion', logo: assets.threeDConnexion, link: '#' },
      { name: 'Ansys', logo: assets.ansys, link: 'https://ansys.com' },
      { name: 'GATE', logo: assets.gate, link: 'https://gate.de' },
      { name: 'Makerspace', logo: assets.makerspace, link: '#' },
      { name: 'Siemens', logo: assets.siemens, link: 'https://siemens.com' },
    ],
  },
  {
    title: 'Academic Collaborators',
    partners: [
      { name: 'TUM', logo: assets.tum, link: 'https://tum.de' },
      { name: 'Max Planck Institute', logo: assets.maxPlanck, link: 'https://mpg.de/en' },
      { name: 'Applied Mechanics', logo: assets.appliedMechanics, link: '#' },
      { name: 'TUM Venture Labs', logo: assets.tumVenture, link: 'https://tumventurelabs.com' },
      { name: 'MiRMI', logo: assets.mirmi, link: 'https://mirmi.de' },
      { name: 'KU Leuven', logo: assets.kuLeuven, link: 'https://kuleuven.be' },
    ],
  },
]

const PartnerCategories = () => {
  return (
    <section className="surface-light surface-wrap edge-fade-y px-6 md:px-12 py-24">
      <div className="max-w-6xl mx-auto grid gap-20">
        {partnerTypes.map((type, idx) => (
          <div key={idx} className="text-center animate-fadeIn">
            <h2 className="heading heading-h2 text-[#0B1B2E] mb-10">{type.title}</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 place-items-center">
              {type.partners.map((p, i) => (
                <a
                  key={i}
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={p.name}
                  title={p.name}
                  className="group w-32 h-32 sm:w-36 sm:h-36 rounded-xl bg-white shadow-md border border-[#E5EAF2] 
                             flex items-center justify-center transition-all duration-300
                             hover:scale-105 hover:shadow-xl focus-visible:ring-2 focus-visible:ring-[#60A5FA] focus:outline-none"
                >
                  <img
                    src={p.logo}
                    alt={p.name}
                    className="max-w-[72%] max-h-[72%] object-contain transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                    decoding="async"
                  />
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default PartnerCategories