# UI-UX-LANDING.md — Diseño Onyxcode: Landing Page

> **Instrucciones para IA:** Este archivo define exclusivamente la landing page de onyxcode.cl. La identidad visual (colores, tipografía, tokens) proviene del sistema de diseño base en `UI-UX.md`. No implementar light mode. Construir todos los componentes con clases Tailwind en JSX/TSX, sin librerías externas de componentes.

---

## 1. Stack

```
Framework:  React 18 + Vite
Estilos:    Tailwind CSS v3
Lenguaje:   TypeScript
Estrategia: Mobile-first
```

---

## 2. Tokens de Diseño

### Colores (definir en `tailwind.config.ts`)

```ts
colors: {
  onyx: {
    950: '#0a0a0b',  // fondo página
    900: '#111113',  // header, footer, secciones alternas
    800: '#18181b',  // cards
    700: '#27272a',  // inputs
    600: '#3f3f46',  // hover
  },
  violet: {
    onyx:  '#6b21a8',  // acento primario
    dark:  '#581c87',  // hover de primario
    deeper:'#3b0764',
  },
}
```

Acento secundario: `cyan-500` (#06b6d4) — built-in de Tailwind.

### Texto

| Uso | Clase |
|-----|-------|
| Principal | `text-gray-100` |
| Secundario | `text-gray-400` |
| Placeholder | `text-gray-600` |
| Acento / links | `text-violet-onyx` |

### Tipografía (`tailwind.config.ts`)

```ts
fontFamily: {
  sans: ['Inter', 'system-ui', 'sans-serif'],
}
```

Escala de headings en la landing:
```
text-3xl / md:text-4xl / lg:text-5xl  — Hero h1
text-2xl / md:text-3xl                — Títulos de sección h2
text-base / text-lg                   — Subtítulos y descripción
text-sm                               — Labels, texto de apoyo
```

### Body base (`index.css`)

```css
body {
  @apply bg-onyx-950 text-gray-100;
}
```

---

## 3. Estructura de la Página

Página única con navegación por scroll. Secciones en orden obligatorio:

```
Header (fijo) → Hero → Servicios → Clientes → Proyectos → Contacto → Footer
```

Las secciones alternan entre `bg-onyx-950` y `bg-onyx-900` con gradientes sutiles violeta para dar iluminación.

| Sección | Fondo |
|---------|-------|
| Hero | `bg-gradient-to-b from-violet-onyx/5 via-onyx-950 to-onyx-950` |
| Servicios | `bg-gradient-to-b from-violet-onyx/5 to-onyx-900` |
| Clientes | `bg-gradient-to-b from-violet-onyx/5 to-onyx-950` |
| Proyectos | `bg-gradient-to-b from-violet-onyx/5 to-onyx-900` |
| Contacto | `bg-gradient-to-b from-violet-onyx/5 to-onyx-950` |
| Footer | `bg-gradient-to-b from-violet-onyx/5 to-onyx-900` |

---

## 4. Componentes

### 4.1 Header

Fijo en la parte superior. Transparente en el tope de la página, con fondo al hacer scroll.

```tsx
<header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
  scrolled ? 'bg-onyx-900/80 backdrop-blur-sm border-b border-onyx-700' : 'bg-transparent'
}`}>
  <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between" aria-label="Navegación principal">
    {/* Logo — texto hasta definición de SVG */}
    <a href="/" className="text-xl font-bold text-gray-100">onyxcode</a>

    {/* Desktop nav */}
    <div className="hidden md:flex items-center gap-6">
      <a href="#hero" className="text-sm text-gray-400 hover:text-gray-100 transition-colors">Inicio</a>
      <a href="#servicios" className="text-sm text-gray-400 hover:text-gray-100 transition-colors">Servicios</a>
      <a href="#clientes"  className="text-sm text-gray-400 hover:text-gray-100 transition-colors">Clientes</a>
      <a href="#proyectos" className="text-sm text-gray-400 hover:text-gray-100 transition-colors">Proyectos</a>
      <a href="#contacto"  className="bg-violet-onyx hover:bg-violet-dark text-white font-medium px-4 py-2 rounded-md transition-colors">
        Contacto
      </a>
    </div>

    {/* Mobile: botón hamburguesa con aria-expanded y aria-label */}
  </nav>
</header>
```

**Reglas:**
- El link "Contacto" siempre como botón primary (no link de texto).
- Botón "Contacto" solo visible en desktop (`hidden md:block`), en mobile aparece como link de texto.
- Incluir link "Inicio" (#hero) en la navegación.
- Mobile: mostrar menú desplegable con `bg-onyx-900/95 backdrop-blur-md`.
- Todos los links usan `href="#seccion"` (scroll interno, no rutas).

### 4.2 Hero

```tsx
<section id="hero" className="relative min-h-screen flex items-center justify-center pt-16 px-4 bg-gradient-to-b from-violet-onyx/5 via-onyx-950 to-onyx-950">
  <div className="max-w-4xl mx-auto text-center">
    {/* badge de categoría */}
    <div className="inline-block px-6 py-2 mb-6 text-sm bg-violet-onyx/20 text-white rounded-full border border-violet-onyx/30">
      Texto corto descriptivo
    </div>

    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-gray-100">
      Título principal con{' '}
      <span className="text-violet-onyx">palabra clave</span>{' '}
      destacada
    </h1>

    <p className="text-base md:text-lg text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
      Descripción breve y directa.
    </p>

    {/* CTA: máximo 2 botones, primary + secondary */}
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <a href="#contacto" className="bg-violet-onyx hover:bg-violet-dark text-white font-medium px-6 py-3 rounded-md transition-colors">
        Acción principal
      </a>
      <a href="#servicios" className="border border-violet-onyx text-violet-onyx hover:bg-violet-onyx hover:text-white font-medium px-6 py-3 rounded-md transition-colors">
        Acción secundaria
      </a>
    </div>
  </div>
</section>
```

**Reglas:**
- Máximo 2 CTAs: uno primary, uno secondary.
- La palabra clave del h1 va en `text-violet-onyx`.
- El `<section>` debe tener `relative` si tiene hijos con `absolute`.
- Badges de sección: texto en `text-white` (no `text-violet-onyx`) sobre fondo `bg-violet-onyx/10`.

### 4.3 Sección genérica (Servicios, Clientes, Proyectos)

Estructura base compartida por todas las secciones de contenido:

```tsx
<section id="[id]" className="py-20 px-4 bg-gradient-to-b from-violet-onyx/5 to-[fondo-según-tabla]">
  <div className="max-w-6xl mx-auto">
    {/* encabezado de sección */}
    <div className="text-center mb-12">
      <span className="inline-block px-6 py-2 mb-4 text-sm bg-violet-onyx/10 text-white rounded-full border border-violet-onyx/20">
        Etiqueta corta
      </span>
      <h2 className="text-2xl md:text-3xl font-bold text-gray-100 mb-4">Título</h2>
      <p className="text-gray-400 text-base max-w-2xl mx-auto">Descripción opcional.</p>
    </div>

    {/* contenido específico de la sección */}
  </div>
</section>
```

### 4.4 Cards de Servicio / Proyecto

```tsx
<article className="bg-onyx-800 rounded-lg border border-onyx-700 p-6 hover:border-violet-onyx/50 transition-colors">
  {/* ícono */}
  <div className="w-12 h-12 mb-4 rounded-lg bg-violet-onyx flex items-center justify-center text-white">
    {icono}
  </div>
  <h3 className="text-base font-semibold text-gray-100 mb-2">{titulo}</h3>
  <p className="text-sm text-gray-400 leading-relaxed">{descripcion}</p>
</article>
```

Grid recomendado:
```tsx
// Servicios (4 items)
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

// Proyectos (variable)
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
```

### 4.5 Sección Clientes (placeholder)

Sin contenido por ahora. Estructura lista para logos:

```tsx
<section id="clientes" className="py-20 px-4 bg-gradient-to-b from-violet-onyx/5 to-onyx-950">
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-100">Clientes</h2>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
      {/* logos de clientes: imágenes con filter brightness para unificar apariencia */}
    </div>
  </div>
</section>
```

### 4.6 Formulario de Contacto

```tsx
<section id="contacto" className="py-20 px-4 bg-gradient-to-b from-violet-onyx/5 to-onyx-950">
  <div className="max-w-4xl mx-auto">
    {/* encabezado — usar estructura de sección 4.3 */}

    <div className="bg-onyx-800 rounded-lg border border-onyx-700 p-8 md:p-12">
      <form className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          {/* input nombre */}
          <div className="flex flex-col gap-1">
            <label htmlFor="nombre" className="text-sm text-gray-400 font-medium">Nombre</label>
            <input
              type="text" id="nombre" required
              className="bg-onyx-700 border border-onyx-600 text-gray-100 text-sm rounded-md px-3 py-2 placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-violet-onyx focus:border-transparent transition"
              placeholder="Tu nombre"
            />
          </div>
          {/* input email — mismo patrón */}
        </div>

        {/* textarea mensaje — mismo patrón, rows={5} resize-none */}

        <button type="submit" className="w-full bg-violet-onyx hover:bg-violet-dark text-white font-medium px-4 py-3 rounded-md transition-colors">
          Enviar
        </button>
      </form>
    </div>
  </div>
</section>
```

**Reglas de formulario:**
- Labels siempre fijas encima del input, nunca flotantes.
- Label en `text-sm text-gray-400 font-medium`, sin dos puntos al final.
- Input base: `bg-onyx-700 border border-onyx-600`.
- Foco: `focus:ring-2 focus:ring-violet-onyx focus:border-transparent`.
- Error: cambiar borde a `border-red-500` y mostrar `<span className="text-xs text-red-500">` debajo.
- Feedback de envío exitoso: toast (top-right), nunca `alert()` nativo.

### 4.7 Footer

```tsx
<footer className="py-12 px-4 bg-gradient-to-b from-violet-onyx/5 to-onyx-900 border-t border-onyx-700">
  <div className="max-w-6xl mx-auto">
    {/* grid 3 columnas: marca / enlaces rápidos / contacto */}
    <div className="grid md:grid-cols-3 gap-8 mb-8">
      {/* col 1: logo + descripción + redes sociales */}
      {/* col 2: enlaces rápidos (mismas secciones del header) */}
      {/* col 3: datos de contacto con íconos en text-violet-onyx */}
    </div>
    {/* copyright */}
    <div className="border-t border-onyx-700 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-gray-500">
      <p>&copy; {año} OnyxCode.cl. Todos los derechos reservados.</p>
    </div>
  </div>
</footer>
```

**Reglas:**
- Íconos de redes sociales: `w-9 h-9 rounded-md bg-onyx-800 hover:bg-onyx-700 hover:text-violet-onyx` con `aria-label`.
- Los enlaces del footer deben coincidir exactamente con los del header.

### 4.8 Botones (referencia rápida)

```tsx
// Primary — CTA principal
className="bg-violet-onyx hover:bg-violet-dark text-white font-medium px-4 py-2 rounded-md transition-colors"

// Secondary — acción alternativa
className="border border-violet-onyx text-violet-onyx hover:bg-violet-onyx hover:text-white font-medium px-4 py-2 rounded-md transition-colors"

// Ghost — bajo peso visual
className="text-gray-400 hover:text-gray-100 hover:bg-onyx-700 font-medium px-4 py-2 rounded-md transition-colors"
```

Texto de botones siempre en **infinitivo**: Enviar, Ver, Contactar, Descargar.

---

## 5. Tono y Microcopy

- **Idioma:** Español.
- **Tono:** Amigable y directo. Sin tecnicismos innecesarios.
- Feedback de formulario exitoso: `"¡Listo! Te contactaremos pronto."` — no mensajes genéricos.
- Feedback de error: `"Algo salió mal. Intenta de nuevo."` — no códigos de error.

---

## 6. Accesibilidad

- Toda `<img>` con `alt` descriptivo.
- Todo `<input>` con `<label htmlFor>` asociado.
- Elementos interactivos alcanzables por teclado con `focus:ring-2 focus:ring-violet-onyx`.
- No usar color como único indicador de estado — acompañar siempre con texto o ícono.
- Botón hamburguesa con `aria-expanded` y `aria-label="Menú de navegación"`.

---

## 7. Pendientes

| Elemento | Estado |
|----------|--------|
| Logo SVG | Pendiente — usar texto `"onyxcode"` como placeholder |
| Sección Clientes | Sin contenido — estructura lista en sección 4.5 |
| Sección Proyectos | Sin contenido — usar grid de cards (sección 4.4) |
