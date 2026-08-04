import { T } from "@tolgee/react"
import './HowItWorks.css'

function HowItWorks() {
  const steps = [
    {
      number: '1',
      titleKey: 'howItWorks.step1.title',
      titleDefault: 'Responde las Preguntas',
      descKey: 'howItWorks.step1.description',
      descDefault: 'Contesta un cuestionario sobre temas políticos importantes. Puedes saltar preguntas si no estás seguro.'
    },
    {
      number: '2',
      titleKey: 'howItWorks.step2.title',
      titleDefault: 'Analiza tu Perfil',
      descKey: 'howItWorks.step2.description',
      descDefault: 'Nuestro algoritmo compara tus respuestas con las posiciones de todos los partidos políticos.'
    },
    {
      number: '3',
      titleKey: 'howItWorks.step3.title',
      titleDefault: 'Descubre tu Compatibilidad',
      descKey: 'howItWorks.step3.description',
      descDefault: 'Visualiza qué partidos se alinean mejor con tus ideas y conoce las diferencias clave.'
    },
    {
      number: '4',
      titleKey: 'howItWorks.step4.title',
      titleDefault: 'Decide Informado',
      descKey: 'howItWorks.step4.description',
      descDefault: 'Usa esta información como guía para tomar una decisión electoral más consciente y fundamentada.'
    }
  ]

  return (
    <section className="how-it-works" id="como-funciona">
      <div className="how-it-works-container">
        <div className="how-it-works-header">
          <h2 className="section-title">
            <T keyName="howItWorks.title">¿Cómo Funciona?</T>
          </h2>
        </div>
        <div className="steps-container">
          {steps.map((step, index) => (
            <div key={index} className="step">
              <div className="step-number">{step.number}</div>
              <div className="step-content">
                <h3 className="step-title">
                  <T keyName={step.titleKey}>{step.titleDefault}</T>
                </h3>
                <p className="step-description">
                  <T keyName={step.descKey}>{step.descDefault}</T>
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="step-connector"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks