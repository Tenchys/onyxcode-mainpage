import { useEffect, useState } from 'react'

export default function Hero() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-onyx-950 via-onyx-900 to-violet-deeper/20"></div>
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-violet-onix/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-violet-dark/20 rounded-full blur-3xl"></div>
      
      <div className={`max-w-4xl mx-auto text-center relative z-10 transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="inline-block px-6 py-2 mb-6 text-lg bg-violet-onix/20 text-violet-onix rounded-full border border-violet-onix/30">
          ✨ Desarrollo Web Moderno
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Transformamos tu visión en{' '}
          <span className="relative">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-onix via-violet-dark to-violet-deeper">software</span>
            <span className="absolute -inset-1 bg-violet-onix/20 blur-xl"></span>
          </span>{' '}
          innovador
        </h1>
        
        <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          Somos tu aliado estratégico en desarrollo web. Creamos soluciones personalizadas que potencian tu negocio y impulsan tu crecimiento digital.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contacto"
            className="group px-8 py-4 bg-gradient-to-r from-violet-onix to-violet-dark hover:from-violet-dark hover:to-violet-deeper text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-violet-onix/30 hover:-translate-y-1"
          >
            Contáctanos
            <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">→</span>
          </a>
          <a
            href="#servicios"
            className="group px-8 py-4 border border-onyx-600 hover:border-violet-onix text-gray-300 hover:text-white font-semibold rounded-lg transition-all duration-300 hover:bg-violet-onix/10"
          >
            Ver Servicios
          </a>
        </div>

        <div className="mt-16 flex items-center justify-center gap-8 text-gray-500">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-violet-onix" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-sm">Sin costos ocultos</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-violet-onix" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-sm">Soporte continuo</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
