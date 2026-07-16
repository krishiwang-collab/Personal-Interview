import { Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './contexts/LanguageContext'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Experience from './pages/Experience'
import Certificates from './pages/Certificates'
import Contact from './pages/Contact'

function App() {
  return (
    <LanguageProvider>
      <Layout>
        <Routes>
          <Route path="/Personal-Interview/" element={<Home />} />
          <Route path="/Personal-Interview/about" element={<About />} />
          <Route path="/Personal-Interview/experience" element={<Experience />} />
          <Route path="/Personal-Interview/certificates" element={<Certificates />} />
          <Route path="/Personal-Interview/contact" element={<Contact />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </LanguageProvider>
  )
}

export default App
