import { useState } from 'react'
import { T } from "@tolgee/react"
import './Volunteering.css'

const faqItems = [
  {
    question: "¿Qué es decide.pe?",
    answer:
      "El Electómetro decide.pe es una herramienta digital que ayuda a las personas a tomar decisiones informadas en las elecciones. No te dice por quién votar: te permite comparar tus posiciones políticas con las posturas y propuestas de partidos y candidatos/as para identificar afinidades de manera transparente. ¿Todavía no lo conoces? ¡Pruébalo y descubre cómo funciona! Haz click en el botón 'Empezar' en la parte superior de la página."
  },

  {
    question: "¿Quiénes están detrás del proyecto?",
    answer:
      "Somos una iniciativa ciudadana, apartidaria y sin fines de lucro. Nuestro objetivo es ayudar a los/as peruanosas a votar de manera más informada mediante datos abiertos, metodologías transparentes y análisis verificables. Puedes revisar a nuestro equipo y colaboradores en la sección 'Quiénes Somos' en la parte superior de la página."
    },

  {
    question: "¿El voluntariado es remunerado?",
    answer:
      "No. El Electómetro es una iniciativa ciudadana, apartidaria y sin fines de lucro. La participación es completamente voluntaria y busca contribuir al acceso a información política más transparente y de mejor calidad. Nadie en la organización recibe remuneración por su trabajo en el proyecto, y todos los recursos se destinan exclusivamente a cubrir costos operativos, tecnológicos y de difusión."
  },

    {
    question: "¿Cómo puedo ayudar como voluntario/a?",
    answer:
      "Los/as voluntarios/as colaboran en distintas etapas del proceso de elaboración y actualización del Electómetro. Entre sus tareas se encuentran: proponer nuevas tesis políticas, monitorear declaraciones, entrevistas, propuestas y otras fuentes públicas de partidos y candidatos/as, registrar y codificar sus posiciones políticas y verificar que la información publicada sea precisa, actualizada y verificable. Además, todo el trabajo es revisado mediante un sistema de doble chequeo entre voluntarios/as, con el fin de asegurar la objetividad, consistencia y calidad de los datos."  },
  {
    question: "¿Recibiré una constancia por participar?",
    answer:
      "Sí. Al finalizar tu participación podremos emitir una constancia que acredite tu colaboración en el proyecto, incluyendo el período de participación y las horas de trabajo realizadas."
  },

  {
    question: "¿Las reuniones y capacitaciones son presenciales?",
    answer:
      "No. Todas las reuniones, capacitaciones y coordinaciones se realizan de manera virtual, por lo que podrás participar desde cualquier lugar con acceso a internet."
  },

  {
    question: "¿Cuánto tiempo debo aportar?",
    answer:
      "Valoramos cualquier aporte, pero para las actividades de codificación y seguimiento buscamos un compromiso mínimo de aproximadamente 4 horas por semana durante dos meses (entre julio y agosto). Sabemos que cada persona tiene una disponibilidad distinta y procuraremos adaptarnos en la medida de lo posible."
  },

  {
    question: "¿Debo vivir en Lima o ser peruano/a para participar?",
    answer:
      "No. Puedes participar desde cualquier parte del mundo y no es necesario tener nacionalidad peruana. Nuestro trabajo se realiza de manera colaborativa y cuenta con mecanismos de revisión cruzada entre voluntarios para asegurar la objetividad, consistencia y calidad de la información."
  },

  {
    question: "¿Necesito experiencia previa?",
    answer:
      "No es necesario contar con experiencia previa. Buscamos personas con interés en política y asuntos públicos, capacidad de análisis, responsabilidad y compromiso con la objetividad. Nosotros te brindaremos la capacitación y las herramientas necesarias para colaborar."
  },

  {
    question: "Me interesa colaborar en otras áreas. ¿También puedo ayudar?",
    answer:
      "¡Claro! Además del equipo de codificación política, contamos con áreas como comunicaciones, desarrollo Full Stack, análisis de datos, relaciones públicas, contenido y otras funciones de apoyo. Si deseas colaborar en alguna de ellas, puedes indicarlo en el formulario de inscripción o escribirnos directamente por correo (info@decide.pe). Todas las personas con ganas de aportar son bienvenidas."
  },

    {
    question: "¿Cómo me inscribo?",
    answer:
      "Haz clic en el botón 'Quiero participar' de esta página para rellenar el formulario o escríbenos a info@decide.pe. Indícanos tu nombre completo, edad, si eres escolar, universitario/a o profesional, tu correo electrónico y tu número de WhatsApp."
  },

  {
    question: "¿Qué buscan en un/a voluntario/a?",
    answer:
      "Buscamos personas responsables, con disposición para aprender y compromiso con el proyecto. El período de trabajo para la codificación y búsqueda de datos es relativamente corto —principalmente entre julio y agosto—, por lo que valoramos especialmente la constancia, la organización y las ganas de contribuir a fortalecer la democracia mediante información de calidad."
  }
]

function Volunteering() {
  // const [open, setOpen] = useState(null)
  const [open, setOpen] = useState([])

  const toggleFAQ = (index) => {
    if (open.includes(index)) {
      setOpen(open.filter(i => i !== index))
    } else {
      setOpen([...open, index])
    }
  }

  return (
    <section className="volunteering">
      <div className="volunteering-container">
        <p className="volunteering-eyebrow">
          Elecciones regionales y municipales  2026
        </p>

        <h1 className="volunteering-title">
          <T keyName="volunteering.title">Convocatoria de voluntarios/as</T>
        </h1>

        <p className="volunteering-text">
          <T keyName="volunteering.text">
            Somos una iniciativa ciudadana, apartidaria y sin fines de lucro que busca
            ayudar a los/as peruanos/as a votar de manera más informada. Para lograrlo, te necesitamos. 
            Estamos buscando escolares (de secundaria), estudiantes universitarios y profesionales con interés
            en la política que quieran ayudarnos a monitorear declaraciones,
            propuestas y posiciones de candidatos/as regionales y municipales. No necesitas experiencia
            previa: solo compromiso con la objetividad y ganas de aportar. Nosotros te capacitaremos y acompañaremos en el proceso.
          </T>
        </p>

        <button
          className="volunteering-button"
          onClick={() => window.open('https://forms.gle/f2zuTcydfhUSAHgZ7', '_blank')}
        >
          <T keyName="volunteering.button">
            ¡Quiero inscribirme!
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
                onClick={() => toggleFAQ(index)}
              >
                {item.question}
                <span>{open.includes(index) ? "−" : "+"}</span>
              </button>

              {open.includes(index) && (
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