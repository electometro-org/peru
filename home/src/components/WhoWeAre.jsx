import { T } from "@tolgee/react"
import './WhoWeAre.css'

function WhoWeAre() {
  const members = [
    { image: '/static/team/elazo.jpeg', nameKey: 'whoWeAre.member1.name', nameDefault: 'Esteban Lazo', roleKey: 'whoWeAre.member1.role', roleDefault: 'Director del proyecto (elazo@decide.pe)' },
    { image: '/static/team/jvalqui.jpeg', nameKey: 'whoWeAre.member2.name', nameDefault: 'José Valqui', roleKey: 'whoWeAre.member2.role', roleDefault: 'Responsable de investigación (jvalqui@decide.pe)' },
    { image: '/static/team/nleon.webp', nameKey: 'whoWeAre.member3.name', nameDefault: 'Nicolás León', roleKey: 'whoWeAre.member3.role', roleDefault: 'Responsable de comunicaciones (nleon@decide.pe)' },
    { image: '/static/team/fsaba.jpeg', nameKey: 'whoWeAre.member8.name', nameDefault: 'Fernando Saba', roleKey: 'whoWeAre.member8.role', roleDefault: 'Responsable de desarrollo e infraestructura web (fsaba@decide.pe)' },
    { image: '/static/team/sfernandez.jpeg', nameKey: 'whoWeAre.member4.name', nameDefault: 'Sebastián Fernández', roleKey: 'whoWeAre.member4.role', roleDefault: 'Responsable de redes sociales' },
    { image: '/static/team/asasieta.jpeg', nameKey: 'whoWeAre.member6.name', nameDefault: 'Ariana Sasieta', roleKey: 'whoWeAre.member6.role', roleDefault: 'Responsable de alianzas y comunicación institucional' },
    { image: '/static/team/sgaitan.jpeg', nameKey: 'whoWeAre.member7.name', nameDefault: 'Sophia Gaitán', roleKey: 'whoWeAre.member7.role', roleDefault: 'Responsable de alianzas y comunicación institucional e Imagen pública' },
    { image: '/static/team/lhaberle.jpeg', nameKey: 'whoWeAre.member5.name', nameDefault: 'Luka Haberle', roleKey: 'whoWeAre.member5.role', roleDefault: 'Investigador principal' },
    { image: '/static/team/grios.jpeg', nameKey: 'whoWeAre.member9.name', nameDefault: 'Gabriel Ríos', roleKey: 'whoWeAre.member9.role', roleDefault: 'Desarrollador UX/UI y Creador de contenido en redes sociales' },
    { image: '/static/team/isar.jpeg', nameKey: 'whoWeAre.member10.name', nameDefault: 'Ignacio Sar Chávez', roleKey: 'whoWeAre.member10.role', roleDefault: 'Asesor de métodos' },
    { image: '/static/team/dabanto.jpeg', nameKey: 'whoWeAre.member11.name', nameDefault: 'Daniel Abanto', roleKey: 'whoWeAre.member11.role', roleDefault: 'Analista de datos y Creador de contenido en redes sociales' },
    { image: '/static/team/mgalvez.jpeg', nameKey: 'whoWeAre.member12.name', nameDefault: 'Mariana Gálvez', roleKey: 'whoWeAre.member12.role', roleDefault: 'Imagen pública y Creadora de contenido en redes sociales' },
    { image: '/static/team/acereceda.jpeg', nameKey: 'whoWeAre.member13.name', nameDefault: 'Ángel Cereceda', roleKey: 'whoWeAre.member13.role', roleDefault: 'Imagen pública y Creador de contenido en redes sociales' },
  ]

  return (
    <section className="who-we-are" id="quienes-somos">
      <div className="who-we-are-container">
        <div className="who-we-are-header">
          <h2 className="section-title">
            <T keyName="whoWeAre.title">¿Quiénes Somos?</T>
          </h2>
          <p className="section-description">
            <T keyName="whoWeAre.subtitle">
              Somos un equipo de más de 10 ciudadanas y ciudadanos con experiencia en informática, política, historia, economía e IA, comprometidos con la democracia y con la visión de fortalecer la participación ciudadana.
            </T>
          </p>
        </div>

        <div className="who-we-are-body">
          <p className="who-we-are-description">
            <T keyName="whoWeAre.description">
              Garantizamos total independencia y transparencia a través de nuestro código abierto (en proceso) y auditorías externas. El Electómetro es una plataforma informativa e independiente. No es financiada por ningún partido político, institución pública o privados.
            </T>
          </p>

          <div className="who-we-are-team">
            {members.map((member, index) => (
              <div key={index} className="team-card">
                <img src={member.image} alt={member.nameDefault} className="team-avatar" />
                <h3 className="team-name">
                  <T keyName={member.nameKey}>{member.nameDefault}</T>
                </h3>
                <p className="team-role">
                  <T keyName={member.roleKey}>{member.roleDefault}</T>
                </p>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  )
}

export default WhoWeAre