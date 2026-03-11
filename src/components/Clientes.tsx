const clientes = [
  { nombre: 'Empresa A', industria: 'Tecnología' },
  { nombre: 'Empresa B', industria: 'Retail' },
  { nombre: 'Empresa C', industria: 'Salud' },
  { nombre: 'Empresa D', industria: 'Finanzas' },
]

export default function Clientes() {
  return (
    <section id="clientes" className="py-20 px-4 bg-gradient-to-b from-violet-onyx/5 to-onyx-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-6 py-2 mb-4 text-sm bg-violet-onyx/10 text-white rounded-full border border-violet-onyx/20">
            Confían en nosotros
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-100 mb-4">
            Clientes
          </h2>
          <p className="text-gray-400 text-base max-w-xl mx-auto">
            Empresas que han transformado su negocio con nuestras soluciones
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {clientes.map((cliente, index) => (
            <div
              key={index}
              className="bg-onyx-800 rounded-lg border border-onyx-700 p-6 flex items-center justify-center hover:border-violet-onyx/50 transition-colors"
            >
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-onyx-700 flex items-center justify-center">
                  <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-sm font-medium text-gray-100">{cliente.nombre}</h3>
                <p className="text-xs text-gray-500 mt-1">{cliente.industria}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
