import { useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { T } from "@tolgee/react"
import { smoothScrollTo } from '../utils/smoothScroll'
import './Nav.css'

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleSectionClick = (e, sectionId) => {
    e.preventDefault()
    setIsMenuOpen(false)
    const element = document.getElementById(sectionId)
    if (element) {
      smoothScrollTo(element)
    }
    navigate(`/#${sectionId}`, { replace: true })
  }

  const handleLogoClick = (e) => {
    e.preventDefault()
    const heroElement = document.getElementById('hero')
    if (heroElement) {
      smoothScrollTo(heroElement)
    }
    if (location.hash) {
      setTimeout(() => navigate('/', { replace: true }), 600)
    } else {
      navigate('/')
    }
  }
  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="#hero" className="nav-logo" onClick={handleLogoClick}>
          <img src="/reverseLogo.svg" alt="Electómetro" />
          <span>Electómetro</span>
        </a>

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
            <a href="#caracteristicas" className="nav-link" onClick={(e) => handleSectionClick(e, 'caracteristicas')}>
              <T keyName="nav.features">Características</T>
            </a>
          </li>
          <li className="nav-item">
            <a href="#como-funciona" className="nav-link" onClick={(e) => handleSectionClick(e, 'como-funciona')}>
              <T keyName="nav.howItWorks">Cómo funciona</T>
            </a>
          </li>
          <li className="nav-item">
            <a href="#quienes-somos" className="nav-link" onClick={(e) => handleSectionClick(e, 'quienes-somos')}>
              <T keyName="nav.whoWeAre">Quiénes somos</T>
            </a>
          </li>
          <li className="nav-item">
            <a href="#kit-de-prensa" className="nav-link" onClick={(e) => handleSectionClick(e, 'kit-de-prensa')}>
              <T keyName="nav.pressKit">Kit de prensa</T>
            </a>
          </li>
          {/* <li className="nav-item">
            <Link to="/#colaboraciones" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              <T keyName="nav.collaborations">Colaboraciones</T>
            </Link>
          </li> */}
          <li className="nav-item">
            <a
              href={`${import.meta.env.VITE_ELECTOMETRO_URL}/#/metodologia`}
              className="nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              <T keyName="nav.methodology">Metodología</T>
            </a>
          </li>
          <li className="nav-item">
            <a
              href={import.meta.env.VITE_ELECTOMETRO_URL}
              className="nav-link nav-cta"
              onClick={() => setIsMenuOpen(false)}
            >
              <T keyName="nav.start">Empezar</T>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav