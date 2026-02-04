import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <img src="/reverseLogo.svg" alt="Electómetro" />
          <span>Electómetro</span>
        </Link>

        <button
          className={`nav-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <a href="/#caracteristicas" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              Características
            </a>
          </li>
          <li className="nav-item">
            <a href="/#como-funciona" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              Cómo Funciona
            </a>
          </li>
          <li className="nav-item">
            <a
              href="https://demo.decide.pe"
              className="nav-link nav-cta"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
            >
              Empezar
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav