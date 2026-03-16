import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Disable browser's automatic scroll restoration
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual'
}

// Remove URL fragment on page load/refresh
if (window.location.hash) {
  window.history.replaceState(null, '', window.location.pathname + window.location.search)
}

// Force scroll to top repeatedly to win any race conditions
document.documentElement.style.scrollBehavior = 'auto'
window.scrollTo(0, 0)
const scrollAttempts = [0, 10, 50, 100, 150]
scrollAttempts.forEach(delay => {
  setTimeout(() => window.scrollTo(0, 0), delay)
})
setTimeout(() => {
  document.documentElement.style.scrollBehavior = ''
}, 200)
import './App.css'
import ScrollToTop from './components/ScrollToTop.jsx'
import Nav from './components/Nav.jsx'
import Home from './pages/Home.jsx'
import { LanguageCycleProvider } from './contexts/LanguageCycle.jsx'

function HomeWithRedirect() {
  useEffect(() => {
    window.history.replaceState(null, '', '/')
  }, [])
  return <Home />
}
import AttributionsPage from './pages/AttributionsPage.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <LanguageCycleProvider>
        <div className="App">
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/atribuciones" element={<AttributionsPage />} />
            <Route path="*" element={<HomeWithRedirect />} />
          </Routes>
          <Footer />
        </div>
      </LanguageCycleProvider>
    </Router>
  )
}

export default App
