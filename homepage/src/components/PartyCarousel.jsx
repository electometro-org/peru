import './PartyCarousel.css'

function PartyCarousel() {
  const parties = [
    {
      name: 'PRIN',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Partido_Pol%C3%ADtico_PRIN_-_S%C3%ADmbolo.png'
    },
    {
      name: 'FREPAP',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Logo_of_the_Agricultural_People%27s_Front_of_Peru.png'
    },
    {
      name: 'Somos Perú',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Logo_Partido_Democr%C3%A1tico_Somos_Per%C3%BA.png/512px-Logo_Partido_Democr%C3%A1tico_Somos_Per%C3%BA.png'
    },
    {
      name: 'Partido Morado',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Logo_Partido_Morado.png/256px-Logo_Partido_Morado.png'
    },
    {
      name: 'Avanza País',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Avanza_Pa%C3%ADs_Logo_2017-20.jpg'
    },
    {
      name: 'Fuerza Popular',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Fuerza_popular.jpg/512px-Fuerza_popular.jpg'
    },
    {
      name: 'Acción Popular',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Acci%C3%B3n_Popular.png/512px-Acci%C3%B3n_Popular.png'
    },
    {
      name: 'Ahora Nación',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Ahora_Naci%C3%B3n.jpg/512px-Ahora_Naci%C3%B3n.jpg'
    },
    {
      name: 'Juntos por el Perú',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Logo_juntos_por_el_Peru.svg/512px-Logo_juntos_por_el_Peru.svg.png'
    }
  ]

  return (
    <div className="party-carousel">
      <div className="carousel-track">
        {/* First set of logos */}
        {parties.map((party, index) => (
          <div key={`party-${index}`} className="party-logo-wrapper">
            <img
              src={party.logo}
              alt={party.name}
              className="party-logo"
              loading="lazy"
            />
          </div>
        ))}
        {/* Duplicate set for seamless loop */}
        {parties.map((party, index) => (
          <div key={`party-duplicate-${index}`} className="party-logo-wrapper">
            <img
              src={party.logo}
              alt={party.name}
              className="party-logo"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default PartyCarousel