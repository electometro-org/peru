import { T } from "@tolgee/react"
import './Features.css'
import VideoSection from './VideoSection'

function Features() {
  const features = [
    {
      icon: '🎯',
      titleKey: 'features.matching.title',
      titleDefault: 'Precisión en el Matching',
      descKey: 'features.matching.description',
      descDefault: 'Algoritmo que compara tus respuestas con las posiciones reales de los partidos políticos.'
    },
    {
      icon: '🔒',
      titleKey: 'features.privacy.title',
      titleDefault: 'Privacidad Garantizada',
      descKey: 'features.privacy.description',
      descDefault: 'Tus respuestas no pueden ser usadas para identificarte.'
    },
    {
      icon: '⚖️',
      titleKey: 'features.objective.title',
      titleDefault: 'Objetivo',
      descKey: 'features.objective.description',
      descDefault: 'Metodología transparente basada en propuestas y posiciones públicas de los partidos.'
    },
    {
      icon: '📊',
      titleKey: 'features.results.title',
      titleDefault: 'Resultados Detallados',
      descKey: 'features.results.description',
      descDefault: 'Visualiza tu afinidad con cada partido y compara tus respuestas con sus posiciones.'
    },
    {
      icon: '🚀',
      titleKey: 'features.fast.title',
      titleDefault: 'Rápido y Fácil',
      descKey: 'features.fast.description',
      descDefault: 'Completa el cuestionario en menos de 10 minutos y obtén resultados instantáneos.'
    },
    {
      icon: '📱',
      titleKey: 'features.accessible.title',
      titleDefault: 'Accesible en Cualquier Dispositivo',
      descKey: 'features.accessible.description',
      descDefault: 'Funciona perfectamente en computadora, tablet o móvil. Usa cuando quieras, donde quieras.'
    }
  ]

  return (
    <section className="features" id="caracteristicas">
      <div className="features-container">
        <div className="features-header">
          <h2 className="section-title">
            <T keyName="features.title">¿Por qué usar el Electómetro?</T>
          </h2>
          <p className="section-description">
            <T keyName="features.subtitle">Una herramienta confiable y transparente para tomar decisiones informadas</T>
          </p>
        </div>
        <VideoSection />
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">
                <T keyName={feature.titleKey}>{feature.titleDefault}</T>
              </h3>
              <p className="feature-description">
                <T keyName={feature.descKey}>{feature.descDefault}</T>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features