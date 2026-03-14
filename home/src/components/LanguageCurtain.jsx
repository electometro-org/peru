import { useRef } from 'react'
import { useCycleLanguage } from '../contexts/LanguageCycle.jsx'

/**
 * LanguageCurtain wraps text that changes with the language cycle.
 * It stacks the previous and next children using CSS grid, animating
 * the outgoing text out (curtainFadeOut) and the incoming text in
 * (curtainReveal / curtainMaskReveal) — all driven by classes defined
 * in index.css.
 *
 * Props:
 *   className  – extra modifier classes, e.g. "lang-curtain--hero-discover"
 *                or "lang-curtain--mask title-who-represents"
 *   children   – the current text node (re-renders when language changes)
 */
function LanguageCurtain({ className = '', children }) {
  const { cycleId } = useCycleLanguage()
  const prevRef = useRef({ children, cycleId })

  const isNew = prevRef.current.cycleId !== cycleId
  const prevChildren = prevRef.current.children

  if (isNew) {
    prevRef.current = { children, cycleId }
  }

  return (
    <span className={`lang-curtain ${className}`}>
      {isNew && (
        <span key={`prev-${cycleId}`} className="lang-curtain-prev">
          {prevChildren}
        </span>
      )}
      <span key={`next-${cycleId}`} className="lang-curtain-next">
        {children}
      </span>
    </span>
  )
}

export default LanguageCurtain
