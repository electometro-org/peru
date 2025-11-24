import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">Electómetro</h3>
            <p className="footer-description">
              Herramienta imparcial para descubrir qué partido político
              representa mejor tus ideas y valores.
            </p>
          </div>
          <div className="footer-section">
            <h4 className="footer-heading">Acerca de</h4>
            <ul className="footer-links">
              <li><a href="#caracteristicas">Características</a></li>
              <li><a href="#como-funciona">Cómo Funciona</a></li>
              <li><a href="https://demo.decide.pe" target="_blank" rel="noopener noreferrer">Empezar Test</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4 className="footer-heading">Información</h4>
            <ul className="footer-links">
              <li><a href="#atribuciones">Atribuciones</a></li>
              <li><a href="#privacidad">Política de Privacidad</a></li>
              <li><a href="#metodologia">Metodología</a></li>
              <li><a href="#contacto">Contacto</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          {/*<p className="footer-copyright">*/}
          {/*  © {currentYear} Electómetro. Todos los derechos reservados.*/}
          {/*</p>*/}
          <p className="footer-disclaimer">
            Herramienta informativa. No constituye consejo electoral oficial.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer