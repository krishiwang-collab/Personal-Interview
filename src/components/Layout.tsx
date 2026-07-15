import { type ReactNode } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { useParticles } from '../hooks/useParticles'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const particlesRef = useParticles()

  return (
    <div className="relative min-h-screen" style={{ background: 'var(--gradient-hero)' }}>
      {/* Particle Background */}
      <div ref={particlesRef} className="particles-bg" />

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="relative z-10 pt-16">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
