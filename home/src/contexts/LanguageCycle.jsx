import { createContext, useContext, useEffect, useMemo, useRef, useState } from 'react'
import { useLoading } from '../components/LoadingScreen.jsx'
import { tolgee } from '../tolgee.js'

const LanguageCycleContext = createContext({ language: 'es', cycleId: 0 })

export function LanguageCycleProvider({ children }) {
  const { isReady } = useLoading()
  const [language, setLanguage] = useState('es')
  const [cycleId, setCycleId] = useState(0)
  const hasStartedCycle = useRef(false)

  useEffect(() => {
    if (!isReady || hasStartedCycle.current) return undefined
    hasStartedCycle.current = true

    const staticDataKeys = Object.keys(tolgee.getInitialOptions().staticData || {})
    const available = tolgee.getInitialOptions().availableLanguages
      || staticDataKeys
    const defaultLanguage = tolgee.getInitialOptions().defaultLanguage || 'es'
    const otherLanguages = available.filter((lang) => lang !== defaultLanguage)

    setLanguage(defaultLanguage)
    if (otherLanguages.length === 0) return undefined

    let intervalId = null
    const initialDelay = 2000
    let index = 0

    const timeoutId = setTimeout(() => {
      setLanguage(otherLanguages[index])
      setCycleId((prev) => prev + 1)
      intervalId = setInterval(() => {
        index += 1
        if (index >= otherLanguages.length) {
          setLanguage(defaultLanguage)
          setCycleId((prev) => prev + 1)
          clearInterval(intervalId)
          return
        }
        setLanguage(otherLanguages[index])
        setCycleId((prev) => prev + 1)
      }, 2000)
    }, initialDelay)

    return () => {
      clearTimeout(timeoutId)
      if (intervalId) clearInterval(intervalId)
    }
  }, [isReady])

  const value = useMemo(() => ({ language, cycleId }), [language, cycleId])

  return (
    <LanguageCycleContext.Provider value={value}>
      {children}
    </LanguageCycleContext.Provider>
  )
}

export function useCycleLanguage() {
  return useContext(LanguageCycleContext)
}
