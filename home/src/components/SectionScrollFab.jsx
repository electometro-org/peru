import { useCallback, useEffect, useState } from 'react'
import { T } from '@tolgee/react'
import './SectionScrollFab.css'

function isInHeroSection() {
  const nextSection = document.getElementById('caracteristicas')
  if (!nextSection) return false
  const scrollMarker = window.scrollY + window.innerHeight * 0.3
  return scrollMarker < nextSection.offsetTop
}

function SectionScrollFab() {
  const [visible, setVisible] = useState(false)

  const updateVisibility = useCallback(() => {
    setVisible(isInHeroSection())
  }, [])

  useEffect(() => {
    updateVisibility()

    let ticking = false
    const handleScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        updateVisibility()
        ticking = false
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [updateVisibility])

  if (!visible) return null

  return (
    <button
      type="button"
      className="section-scroll-fab"
      onClick={() => document.getElementById('caracteristicas')?.scrollIntoView({ behavior: 'smooth' })}
    >
      <span className="section-scroll-fab-icon" aria-hidden="true">↓</span>
      <T keyName="nav.scrollHint">Desliza para ver más</T>
    </button>
  )
}

export default SectionScrollFab
