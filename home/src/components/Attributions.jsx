import { T, useTranslate } from "@tolgee/react"
import './Attributions.css'

function Attributions() {
  const { t } = useTranslate()

  const logos = [
    {
      name: 'PRIN',
      fullName: 'Partido Político PRIN (Partido Regionalista de Integración Nacional)',
      license: 'CC BY-SA 4.0',
      licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0',
      source: 'Wikimedia Commons',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Partido_Pol%C3%ADtico_PRIN_-_S%C3%ADmbolo.png'
    },
    {
      name: 'Somos Perú',
      fullName: 'Partido Político Somos Perú',
      license: 'CC BY-SA 4.0',
      licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0',
      source: 'Wikipedia',
      sourceUrl: 'https://de.wikipedia.org/wiki/Somos_Per%C3%BA#/media/Datei:Logo_Partido_Democr%C3%A1tico_Somos_Per%C3%BA.svg'
    },
    {
      name: 'Partido Morado',
      fullName: 'Partido Morado',
      license: 'Public Domain',
      licenseUrl: null,
      source: 'Facebook',
      sourceUrl: 'https://www.facebook.com/photo.php?fbid=2142292532557974&set=a.1177281969059040&id=100064561037326'
    },
    {
      name: 'Avanza País',
      fullName: 'Avanza País',
      license: 'Public Domain',
      licenseUrl: null,
      source: 'Wikimedia Commons',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Go_on_Country_2022.jpg'
    },
    {
      name: 'Fuerza Popular',
      fullName: 'Fuerza Popular',
      license: 'Public Domain',
      licenseUrl: null,
      source: 'Wikimedia Commons',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Logo_of_the_Popular_Force_(2024).svg'
    },
    {
      name: 'Ahora Nación',
      fullName: 'Ahora Nación',
      license: 'Public Domain',
      licenseUrl: null,
      source: 'Wikipedia',
      sourceUrl: 'https://en.wikipedia.org/wiki/File:Logo_of_the_Ahora_Naci%C3%B3n.png'
    },
    {
      name: 'Juntos por el Perú',
      fullName: 'Juntos por el Perú',
      license: 'CC BY-SA 4.0',
      licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0',
      source: 'Wikipedia',
      sourceUrl: 'https://es.wikipedia.org/wiki/Juntos_por_el_Per%C3%BA#/media/Archivo:Logo_juntos_por_el_Peru.svg'
    },
    {
      name: 'Renovación Popular',
      fullName: 'Renovación Popular',
      license: 'Public Domain',
      licenseUrl: null,
      source: 'Wikipedia',
      sourceUrl: 'https://es.wikipedia.org/wiki/Archivo:Renovaci%C3%B3n_Popular_logo.svg'
    },
    {
      name: 'Alianza para el Progreso',
      fullName: 'Alianza para el Progreso',
      license: 'Public Domain',
      licenseUrl: null,
      source: 'Wikipedia',
      sourceUrl: 'https://es.wikipedia.org/wiki/Archivo:Alianza_para_el_Progreso_Peru.svg'
    },
    {
      name: 'APRA',
      fullName: 'Alianza Popular Revolucionaria Americana',
      license: 'Public Domain',
      licenseUrl: null,
      source: 'Wikimedia Commons',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:APRA_Peru_logo.svg'
    },
    {
      name: 'Perú Libre',
      fullName: 'Partido Político Nacional Perú Libre',
      license: 'Public Domain',
      licenseUrl: null,
      source: 'Perú Libre',
      sourceUrl: 'http://perulibre.pe/wp-content/uploads/2021/11/lapiz-pl.png'
    },
    {
      name: 'Podemos Perú',
      fullName: 'Podemos Perú',
      license: 'Public Domain',
      licenseUrl: null,
      source: 'Wikipedia',
      sourceUrl: 'https://es.wikipedia.org/wiki/Podemos_Per%C3%BA#/media/Archivo:Logo_Podemos_Per%C3%BA.png'
    },
    {
      name: 'Fe en el Perú',
      fullName: 'Fe en el Perú',
      license: 'Public Domain',
      licenseUrl: null,
      source: 'Wikipedia',
      sourceUrl: 'https://es.wikipedia.org/wiki/Archivo:Fe_en_el_Per%C3%BA_%28logo%29.svg'
    },
    {
      name: 'Perú Primero',
      fullName: 'Perú Primero',
      license: 'Public Domain',
      licenseUrl: null,
      source: 'Wikimedia Commons',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Logo_de_Per%C3%BA_Primero.png'
    },
    {
      name: 'Partido Cívico OBRAS',
      fullName: 'Partido Cívico OBRAS',
      license: 'Public Domain',
      licenseUrl: null,
      source: 'Wikimedia Commons',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Partido_Civico_OBRAS.png'
    },
    {
      name: 'Primero La Gente',
      fullName: 'Primero La Gente',
      license: 'Public Domain',
      licenseUrl: null,
      source: 'Wikipedia',
      sourceUrl: 'https://es.wikipedia.org/wiki/Primero_la_Gente_(Per%C3%BA)#/media/Archivo:Primero_La_Gente_2022.jpg'
    },
    {
      name: 'Libertad Popular',
      fullName: 'Libertad Popular',
      license: 'Public Domain',
      licenseUrl: null,
      source: 'X (Twitter)',
      sourceUrl: 'https://x.com/PCaterianoB/status/1608283596694949889'
    },
    {
      name: 'Partido Patriótico del Perú',
      fullName: 'Partido Patriótico del Perú',
      license: 'Public Domain',
      licenseUrl: null,
      source: 'Wikipedia',
      sourceUrl: 'https://es.wikipedia.org/wiki/Archivo:Partido_Patri%C3%B3tico_del_Per%C3%BA_%28logo%29.svg'
    },
    {
      name: 'PTE Perú',
      fullName: 'Partido Tecnológico del Perú',
      license: 'Public Domain',
      licenseUrl: null,
      source: 'Wikipedia',
      sourceUrl: 'https://es.wikipedia.org/wiki/Archivo:Logo_PTE_PERU.jpg'
    }
  ]

  return (
    <section className="attributions" id="atribuciones">
      <div className="attributions-container">
        <h2 className="attributions-title">
          <T keyName="attributions.title">Atribuciones</T>
        </h2>
        <p className="attributions-intro">
          <T keyName="attributions.intro">Los logos de los partidos políticos mostrados en este sitio web provienen de Wikimedia Commons y están sujetos a las siguientes licencias:</T>
        </p>

        <div className="attributions-grid">
          {logos.map((logo, index) => (
            <div key={index} className="attribution-card">
              <h3 className="attribution-name">{logo.name}</h3>
              <p className="attribution-full-name">{logo.fullName}</p>

              {logo.author && (
                <p className="attribution-author">{t('attributions.author', 'Autor')}: {logo.author}</p>
              )}

              <div className="attribution-license">
                {logo.license === 'Public Domain' ? (
                  <span><T keyName="attributions.publicDomain">Dominio Público</T></span>
                ) : (
                  <>
                    {t('attributions.license', 'Licencia')}: <a href={logo.licenseUrl} target="_blank" rel="noopener noreferrer">
                      {logo.license}
                    </a>
                  </>
                )}
              </div>

              <p className="attribution-source">
                {t('attributions.source', 'Fuente')}: <a href={logo.sourceUrl} target="_blank" rel="noopener noreferrer">
                  {logo.source}
                </a>
              </p>

              {logo.note && (
                <p className="attribution-note">{logo.note}</p>
              )}
            </div>
          ))}
        </div>

        <div className="attributions-footer">
          <p>
            <T keyName="attributions.footer">Todos los logos son propiedad de sus respectivos partidos políticos. El uso de estos logos en este sitio es exclusivamente con fines informativos y educativos, conforme a las licencias bajo las cuales fueron publicados.</T>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Attributions