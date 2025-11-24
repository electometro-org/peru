import './HowItWorks.css'

function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Responde las Preguntas',
      description: 'Contesta un cuestionario sobre temas políticos importantes. Puedes saltar preguntas si no estás seguro.'
    },
    {
      number: '02',
      title: 'Analiza tu Perfil',
      description: 'Nuestro algoritmo compara tus respuestas con las posiciones de todos los partidos políticos.'
    },
    {
      number: '03',
      title: 'Descubre tu Compatibilidad',
      description: 'Visualiza qué partidos se alinean mejor con tus ideas y conoce las diferencias clave.'
    },
    {
      number: '04',
      title: 'Decide Informado',
      description: 'Usa esta información como guía para tomar una decisión electoral más consciente y fundamentada.'
    }
  ]

  return (
    <section className="how-it-works" id="como-funciona">
      <div className="how-it-works-container">
        <div className="how-it-works-header">
          <h2 className="section-title">¿Cómo Funciona?</h2>
          <p className="section-description">
            En solo 4 pasos simples, encuentra el partido que mejor representa tus valores
          </p>
        </div>
        <div className="steps-container">
          {steps.map((step, index) => (
            <div key={index} className="step">
              <div className="step-number">{step.number}</div>
              <div className="step-content">
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="step-connector"></div>
              )}
            </div>
          ))}
        </div>
        <div className="cta-section">
          <h3 className="cta-title">¿Listo para empezar?</h3>
          <p className="cta-description">
            Descubre en minutos qué partido político representa mejor tus ideas
          </p>
          <a
            href="https://demo.decide.pe"
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Comenzar Ahora
          </a>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks