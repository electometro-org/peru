import { T } from "@tolgee/react"
import { Link } from 'react-router-dom'
import { useLoading } from './LoadingScreen'
import './Hero.css'
import PartyCarousel from './PartyCarousel.jsx'
import { tolgee } from '../tolgee.js'
import { useCycleLanguage } from '../contexts/LanguageCycle.jsx'
import LanguageCurtain from './LanguageCurtain.jsx'

function Hero() {
  const { isReady } = useLoading()
  const { language: cycleLanguage } = useCycleLanguage()
  const currentLanguage = tolgee.getLanguage() || tolgee.getInitialOptions().defaultLanguage
  const availableLanguages = tolgee.getAvailableLanguages?.() || []
  const otherLanguages = availableLanguages.filter((language) => language !== currentLanguage)

  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        {/* <div className={`hero-badge ${isReady ? 'animate' : ''}`}>
          <span>🗳️ <T keyName="hero.badge">Elecciones 2026</T></span>
        </div> */}
        {/* {otherLanguages.length > 0 && (
          <div className={`hero-languages ${isReady ? 'animate' : ''}`}>
            <span className="hero-languages-label">
              <T keyName="hero.languages.label">También en</T>
            </span>
            <span className="hero-languages-list">
              {otherLanguages.map((language, index) => (
                <span className="hero-language" key={language}>
                  <T keyName={`hero.languages.${language}`}>{language}</T>
                  {index < otherLanguages.length - 1 && (
                    <span className="hero-language-sep">•</span>
                  )}
                </span>
              ))}
            </span>
          </div>
        )} */}
        <h1 className="hero-title">
          <span className="title-discover">
            <LanguageCurtain className="lang-curtain--hero-discover">
              <T keyName="hero.title.discover" language={cycleLanguage}>Decide informado</T>
            </LanguageCurtain>
          </span>
          <br />
          <LanguageCurtain className="title-who-represents">
            <span className="title-who">
              <T keyName="hero.title.who" language={cycleLanguage}>en</T>
            </span>{' '}
            <span className="title-represents">
              <T keyName="hero.title.represents" language={cycleLanguage}>5 minutos</T>
            </span>
          </LanguageCurtain>
        </h1>
        <p className="hero-description">
          <T keyName="hero.description">
            Descubre qué partidos y candidatos políticos se
            alinean mejor con tus principios y prioridades.
          </T>
        </p>
        <div className="hero-cta">
          <a
            href={import.meta.env.VITE_ELECTOMETRO_URL}
            className="btn btn-primary"
          >
            <T keyName="hero.cta.start">Empezar</T>
          </a>
          {/* <a
            href="#caracteristicas"
            className="btn btn-secondary"
          >
            <T keyName="hero.cta.learnMore">Conocer Más</T>
          </a> */}
          {/* <Link
            to="/voluntariado"
            className="btn btn-volunteer"
          >
            <T keyName="hero.cta.volunteer">Voluntariado</T>
          </Link> */}
        </div>
        {/* Key names no longer match their content (e.g. questions_nr pairs with the "Candidatos" label) —
            keeping the existing Tolgee key names stable rather than touching qu/ay translation keys for a copy change. */}
        <div className={`hero-stats ${isReady ? 'animate' : ''}`}>
          <div className="stat">
            <div className="stat-number">
              <T keyName="hero.stats.questions_nr">5</T>
            </div>
            <div className="stat-label">
              <T keyName="hero.stats.necessary">Candidatos</T>
            </div>
          </div>
          <div className="stat">
            <div className="stat-number">
              <T keyName="hero.stats.candidates_nr">20</T>
            </div>
            <div className="stat-label">
              <T keyName="hero.stats.questions">Minutos</T>
            </div>
          </div>
          <div className="stat">
            <div className="stat-number">
              <T keyName="hero.stats.necessary_nr">15+</T>
            </div>
            <div className="stat-label">
              <T keyName="hero.stats.candidates">Preguntas</T>
            </div>
          </div>
        </div>
        <div className="hero-parties">
          <p className="hero-parties-description">
            {/*<T keyName="hero.parties.description">*/}
            {/*    Comparamos tus respuestas con las posiciones*/}
            {/*    públicas de estos partidos políticos:*/}
            {/*  </T>*/}
          </p>

          <PartyCarousel />

        </div>
      </div>
    </section>
  )
}

export default Hero
