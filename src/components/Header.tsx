import { useState, useEffect } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#hero', label: 'Inicio' },
    { href: '#servicios', label: 'Servicios' },
    { href: '#clientes', label: 'Clientes' },
    { href: '#proyectos', label: 'Proyectos' }
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-onyx-900/80 backdrop-blur-sm border-b border-onyx-700' : 'bg-transparent'
    }`}>
      <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between" aria-label="Navegación principal">
        <a href="/" className="text-xl font-bold text-gray-100">
          onyxcode
        </a>

        <button
          className="md:hidden p-2 text-gray-400 hover:text-gray-100 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-label="Menú de navegación"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        <div className={`md:flex items-center gap-6 ${isMenuOpen ? 'absolute top-full left-0 right-0 bg-onyx-900/95 backdrop-blur-md p-4 flex flex-col gap-4 border-b border-onyx-700' : 'hidden'}`}>
          {navLinks.map((link) => (
            <a 
              key={link.href}
              href={link.href} 
              className="text-sm text-gray-400 hover:text-gray-100 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="hidden md:block bg-violet-onyx hover:bg-violet-dark text-white font-medium px-4 py-2 rounded-md transition-colors"
          >
            Contacto
          </a>
        </div>
      </nav>
    </header>
  )
}
