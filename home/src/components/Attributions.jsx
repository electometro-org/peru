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
      name: 'FREPAP',
      fullName: 'Frente Popular Agrícola del Perú',
      license: 'Public Domain',
      licenseUrl: null,
      source: 'Wikimedia Commons',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Logo_of_the_Agricultural_People%27s_Front_of_Peru.png'
    },
    {
      name: 'Somos Perú',
      fullName: 'Partido Político Somos Perú',
      license: 'CC BY-SA 4.0',
      licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0',
      source: 'Wikimedia Commons',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Logo_Partido_Democr%C3%A1tico_Somos_Per%C3%BA.png'
    },
    {
      name: 'Partido Morado',
      fullName: 'Partido Morado',
      license: 'CC0',
      licenseUrl: 'https://creativecommons.org/publicdomain/zero/1.0/',
      source: 'Wikimedia Commons',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Logo_Partido_Morado.png',
      author: 'Rodolfo Pérez Osores, Secretario General'
    },
    {
      name: 'Avanza País',
      fullName: 'Avanza País',
      license: 'CC BY-SA 4.0',
      licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0',
      source: 'Wikimedia Commons',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Avanza_Pa%C3%ADs_Logo_2017-20.jpg',
      note: 'Published by the National Jury of Elections (Peru)'
    },
    {
      name: 'Fuerza Popular',
      fullName: 'Fuerza Popular',
      license: 'Public Domain',
      licenseUrl: null,
      source: 'Wikimedia Commons',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Fuerza_popular.jpg',
      author: 'OliverHoc'
    },
    {
      name: 'Acción Popular',
      fullName: 'Acción Popular',
      license: 'CC0',
      licenseUrl: 'https://creativecommons.org/publicdomain/zero/1.0/',
      source: 'Wikimedia Commons',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Acci%C3%B3n_Popular.png',
      author: 'Oficina Nacional de Procesos Electorales / Miguel Cruchaga Belaúnde'
    },
    {
      name: 'Ahora Nación',
      fullName: 'Ahora Nación',
      license: 'Public Domain',
      licenseUrl: null,
      source: 'Wikimedia Commons',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Ahora_Naci%C3%B3n.jpg',
      author: 'Alfonso López Chau Nava'
    },
    {
      name: 'Juntos por el Perú',
      fullName: 'Juntos por el Perú',
      license: 'CC BY-SA 4.0',
      licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0',
      source: 'Wikimedia Commons',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Logo_juntos_por_el_Peru.svg',
      author: 'Txolo'
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