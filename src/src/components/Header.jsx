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
    { href: '#contacto', label: 'Contacto' }
  ]

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-onyx-950/90 backdrop-blur-md shadow-lg shadow-violet-onix/10' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center" aria-label="Navegación principal">
        <a href="/" className="text-2xl font-bold text-white group">
          Onyx<span className="text-violet-onix group-hover:text-violet-dark transition-colors">Code</span>
          <span className="inline-block w-2 h-2 bg-violet-onix rounded-full ml-1 group-hover:animate-pulse"></span>
        </a>

        <button
          className="md:hidden p-2 text-gray-300 hover:text-violet-onix transition-colors"
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

        <ul className={`md:flex gap-8 ${isMenuOpen ? 'absolute top-full left-0 right-0 bg-onyx-900/95 backdrop-blur-md p-4 flex flex-col gap-4 shadow-lg' : 'hidden'}`}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a 
                href={link.href} 
                className="text-gray-300 hover:text-violet-onix transition-all duration-300 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-violet-onix after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
