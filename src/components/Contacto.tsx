import { useState, type FormEvent } from 'react'

interface FormData {
  nombre: string
  email: string
  mensaje: string
}

type FocusedField = 'nombre' | 'email' | 'mensaje' | null

export default function Contacto() {
  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    email: '',
    mensaje: ''
  })
  const [focused, setFocused] = useState<FocusedField>(null)

  const [showToast, setShowToast] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    console.log('Formulario enviado:', formData)
    setShowToast(true)
    setTimeout(() => setShowToast(false), 3000)
    setFormData({ nombre: '', email: '', mensaje: '' })
  }

  const handleChange = (field: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [field]: e.target.value })
  }

  return (
    <section id="contacto" className="py-20 px-4 bg-gradient-to-b from-violet-onyx/5 to-onyx-950">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-6 py-2 mb-4 text-sm bg-violet-onyx/10 text-white rounded-full border border-violet-onyx/20">
            Hablemos
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-100 mb-4">
            Contáctanos
          </h2>
          <p className="text-gray-400 text-base max-w-xl mx-auto">
            ¿Tienes un proyecto en mente? Hablemos y hagámoslo realidad juntos.
          </p>
        </div>

        <div className="bg-onyx-800 rounded-lg border border-onyx-700 p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-1">
                <label htmlFor="nombre" className="text-sm text-gray-400 font-medium">
                  Nombre
                </label>
                <input
                  type="text"
                  id="nombre"
                  required
                  value={formData.nombre}
                  onFocus={() => setFocused('nombre')}
                  onBlur={() => setFocused(null)}
                  onChange={handleChange('nombre')}
                  className={`bg-onyx-700 border text-gray-100 text-sm rounded-md px-3 py-2 placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-violet-onyx focus:border-transparent transition ${
                    focused === 'nombre' ? 'border-violet-onyx' : 'border-onyx-600'
                  }`}
                  placeholder="Tu nombre"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="email" className="text-sm text-gray-400 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onFocus={() => setFocused('email')}
                  onBlur={() => setFocused(null)}
                  onChange={handleChange('email')}
                  className={`bg-onyx-700 border text-gray-100 text-sm rounded-md px-3 py-2 placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-violet-onyx focus:border-transparent transition ${
                    focused === 'email' ? 'border-violet-onyx' : 'border-onyx-600'
                  }`}
                  placeholder="tu@email.com"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="mensaje" className="text-sm text-gray-400 font-medium">
                Mensaje
              </label>
              <textarea
                id="mensaje"
                required
                rows={5}
                value={formData.mensaje}
                onFocus={() => setFocused('mensaje')}
                onBlur={() => setFocused(null)}
                onChange={handleChange('mensaje')}
                className={`bg-onyx-700 border text-gray-100 text-sm rounded-md px-3 py-2 placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-violet-onyx focus:border-transparent transition resize-none ${
                  focused === 'mensaje' ? 'border-violet-onyx' : 'border-onyx-600'
                }`}
                placeholder="Cuéntanos sobre tu proyecto..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-violet-onyx hover:bg-violet-dark text-white font-medium px-4 py-3 rounded-md transition-colors"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>

      {showToast && (
        <div className="fixed top-20 right-4 z-50 bg-violet-onyx text-white px-4 py-3 rounded-md shadow-lg animate-fade-in">
          <p>¡Listo! Te contactaremos pronto.</p>
        </div>
      )}
    </section>
  )
}
