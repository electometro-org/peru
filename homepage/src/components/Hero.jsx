import './Hero.css'
import PartyCarousel from './PartyCarousel.jsx'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        {/*<img src="/reverseLogo.svg" alt="Electómetro" className="hero-logo" />*/}
        <div className="hero-badge">
          <span>🗳️ Elecciones 2026</span>
        </div>
        <h1 className="hero-title">
          Descubre
          <br />
          <PartyCarousel />
          <span className="gradient-text">quién </span>
           te representa
        </h1>
        {/*<p className="hero-description">*/}
        {/*  Encuentra el partido y/o candidato que más se alinea con tus ideas y valores.*/}
        {/*</p>*/}
        <div className="hero-cta">
          <a
            href="https://demo.decide.pe"
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Empezar
          </a>
          <a
            href="#caracteristicas"
            className="btn btn-secondary"
          >
            Conocer Más
          </a>
        </div>
        <div className="hero-stats">
          <div className="stat">
            <div className="stat-number">10</div>
            <div className="stat-label">Preguntas</div>
          </div>
          <div className="stat">
            <div className="stat-number">20+</div>
            <div className="stat-label">Candidatos</div>
          </div>
          <div className="stat">
            <div className="stat-number">100%</div>
            <div className="stat-label">Necesario</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero