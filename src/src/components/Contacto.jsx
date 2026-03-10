import { useState } from 'react'

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  })
  const [focused, setFocused] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Formulario enviado:', formData)
    alert('¡Gracias por contactarnos! Te responderemos pronto.')
    setFormData({ nombre: '', email: '', mensaje: '' })
  }

  const inputClasses = (field) => `
    w-full px-5 py-4 bg-onyx-800/50 border rounded-xl text-white placeholder-gray-500 
    focus:outline-none transition-all duration-300 backdrop-blur-sm
    ${focused === field 
      ? 'border-violet-onix bg-onyx-800 shadow-lg shadow-violet-onix/10' 
      : 'border-onyx-700 hover:border-onyx-600'
    }
  `

  return (
    <section id="contacto" className="py-24 px-4 bg-onyx-950 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-onix/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-6 py-2 mb-4 text-lg bg-violet-onix/10 text-violet-onix rounded-full border border-violet-onix/20">
            Hablemos
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Conta<span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-onix to-violet-dark">ctanos</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            ¿Tienes un proyecto en mente? Hablemos y hagámoslo realidad juntos.
          </p>
        </div>

        <div className="bg-onyx-900/50 backdrop-blur-sm rounded-3xl border border-onyx-700/50 p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="nombre" className="block text-sm font-medium text-gray-300 mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  id="nombre"
                  required
                  value={formData.nombre}
                  onFocus={() => setFocused('nombre')}
                  onBlur={() => setFocused(null)}
                  onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                  className={inputClasses('nombre')}
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onFocus={() => setFocused('email')}
                  onBlur={() => setFocused(null)}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={inputClasses('email')}
                  placeholder="tu@email.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="mensaje" className="block text-sm font-medium text-gray-300 mb-2">
                Mensaje
              </label>
              <textarea
                id="mensaje"
                required
                rows={5}
                value={formData.mensaje}
                onFocus={() => setFocused('mensaje')}
                onBlur={() => setFocused(null)}
                onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                className={`${inputClasses('mensaje')} resize-none`}
                placeholder="Cuéntanos sobre tu proyecto..."
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-violet-onix to-violet-dark hover:from-violet-dark hover:to-violet-deeper text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-violet-onix/30 hover:-translate-y-1"
            >
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
