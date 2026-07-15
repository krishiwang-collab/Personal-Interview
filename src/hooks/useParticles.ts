import { useEffect, useRef } from 'react'

export function useParticles() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const particles: HTMLDivElement[] = []
    const particleCount = 30

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div')
      particle.className = 'particle'
      particle.style.left = `${Math.random() * 100}%`
      particle.style.top = `${Math.random() * 100}%`
      particle.style.animationDelay = `${Math.random() * 6}s`
      particle.style.animationDuration = `${4 + Math.random() * 4}s`
      const size = 2 + Math.random() * 4
      particle.style.width = `${size}px`
      particle.style.height = `${size}px`
      particle.style.opacity = `${0.1 + Math.random() * 0.3}`
      container.appendChild(particle)
      particles.push(particle)
    }

    return () => {
      particles.forEach(p => p.remove())
    }
  }, [])

  return containerRef
}
