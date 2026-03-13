import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
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
