import './Features.css'

function Features() {
  const features = [
    {
      icon: '🎯',
      title: 'Precisión en el Matching',
      description: 'Algoritmo que compara tus respuestas con las posiciones reales de los partidos políticos.'
    },
    {
      icon: '🔒',
      title: 'Privacidad Garantizada',
      description: 'Tus respuestas no pueden ser usadas para identificarte.'
    },
    {
      icon: '⚖️',
      title: 'Objetivo',
      description: 'Metodología transparente basada en propuestas y posiciones públicas de los partidos.'
    },
    {
      icon: '📊',
      title: 'Resultados Detallados',
      description: 'Visualiza tu afinidad con cada partido y compara tus respuestas con sus posiciones.'
    },
    {
      icon: '🚀',
      title: 'Rápido y Fácil',
      description: 'Completa el cuestionario en menos de 10 minutos y obtén resultados instantáneos.'
    },
    {
      icon: '📱',
      title: 'Accesible en Cualquier Dispositivo',
      description: 'Funciona perfectamente en computadora, tablet o móvil. Usa cuando quieras, donde quieras.'
    }
  ]

  return (
    <section className="features" id="caracteristicas">
      <div className="features-container">
        <div className="features-header">
          <h2 className="section-title">¿Por qué usar el Electómetro?</h2>
          <p className="section-description">
            Una herramienta confiable y transparente para tomar decisiones informadas
          </p>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features