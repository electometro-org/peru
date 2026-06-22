import { useState } from 'react'
import { T } from "@tolgee/react"
import './Volunteering.css'

const faqItems = [
  {
    question: "Pregunta frecuente 1",
    answer: "Este es un texto de ejemplo para la primera respuesta."
  },
  {
    question: "Pregunta frecuente 2",
    answer: "Este es un texto de ejemplo para la segunda respuesta."
  },
  {
    question: "Pregunta frecuente 3",
    answer: "Este es un texto de ejemplo para la tercera respuesta."
  }
]

function Volunteering() {
  const [open, setOpen] = useState(null)

  return (
    <section className="volunteering">
      <div className="volunteering-container">

        <h1 className="volunteering-title">
          <T keyName="volunteering.title">
            Voluntariado
          </T>
        </h1>

        <p className="volunteering-text">
          <T keyName="volunteering.text">
            Este es un texto provisional sobre el programa de voluntariado.
            Aquí podrás explicar cómo participar y colaborar con el proyecto.
          </T>
        </p>

        <button
          className="volunteering-button"
          onClick={() => window.open('https://google.com', '_blank')}
        >
          <T keyName="volunteering.button">
            Quiero participar
          </T>
        </button>

        <div className="faq-section">
          <h2 className="faq-title">
            Preguntas frecuentes
          </h2>

          {faqItems.map((item, index) => (
            <div className="faq-item" key={index}>

              <button
                className="faq-question"
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
              >
                {item.question}
                <span>{open === index ? "−" : "+"}</span>
              </button>

              {open === index && (
                <div className="faq-answer">
                  {item.answer}
                </div>
              )}

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Volunteering