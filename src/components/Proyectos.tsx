interface Proyecto {
  titulo: string
  descripcion: string
  categoria: string
}

const proyectos: Proyecto[] = [
  {
    titulo: 'Plataforma E-commerce',
    descripcion: 'Tienda online completa con pasarela de pagos y gestión de inventario.',
    categoria: 'E-commerce'
  },
  {
    titulo: 'Dashboard Analytics',
    descripcion: 'Panel de control para visualización de datos en tiempo real.',
    categoria: 'Web App'
  },
  {
    titulo: 'Sistema de Reservas',
    descripcion: 'Plataforma de reservas online con calendario interactivo.',
    categoria: 'Web App'
  }
]

export default function Proyectos() {
  return (
    <section id="proyectos" className="py-20 px-4 bg-gradient-to-b from-violet-onyx/5 to-onyx-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-6 py-2 mb-4 text-sm bg-violet-onyx/10 text-white rounded-full border border-violet-onyx/20">
            Nuestro trabajo
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-100 mb-4">
            Proyectos
          </h2>
          <p className="text-gray-400 text-base max-w-xl mx-auto">
            Algunos de los proyectos que hemos desarrollado para nuestros clientes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {proyectos.map((proyecto, index) => (
            <article
              key={index}
              className="bg-onyx-800 rounded-lg border border-onyx-700 p-6 hover:border-violet-onyx/50 transition-colors"
            >
              <div className="w-full h-32 mb-4 rounded-md bg-onyx-700 flex items-center justify-center">
                <svg className="w-10 h-10 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="inline-block px-2 py-1 text-xs text-white bg-violet-onyx/10 rounded mb-2">
                {proyecto.categoria}
              </span>
              <h3 className="text-base font-semibold text-gray-100 mb-2">
                {proyecto.titulo}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {proyecto.descripcion}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
