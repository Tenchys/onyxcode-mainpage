export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16 px-4 bg-gradient-to-b from-violet-onyx/5 via-onyx-950 to-onyx-950">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-block px-6 py-2 mb-6 text-sm bg-violet-onyx/20 text-white rounded-full border border-violet-onyx/30">
          Desarrollo Web Moderno
        </div>
        
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-gray-100">
          Transformamos tu visión en{' '}
          <span className="text-violet-onyx">software</span>{' '}
          innovador
        </h1>
        
        <p className="text-base md:text-lg text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          Somos tu aliado estratégico en desarrollo web. Creamos soluciones personalizadas que potencian tu negocio y impulsan tu crecimiento digital.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contacto"
            className="bg-violet-onyx hover:bg-violet-dark text-white font-medium px-6 py-3 rounded-md transition-colors"
          >
            Contáctanos
          </a>
          <a
            href="#servicios"
            className="border border-violet-onyx text-violet-onyx hover:bg-violet-onyx hover:text-white font-medium px-6 py-3 rounded-md transition-colors"
          >
            Ver Servicios
          </a>
        </div>

        <div className="mt-16 flex items-center justify-center gap-8 text-gray-500">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-violet-onyx" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-sm">Sin costos ocultos</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-violet-onyx" fill="currentColor" viewBox="0 0 20 20">
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
