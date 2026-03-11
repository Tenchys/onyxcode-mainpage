# Changelog

Todos los cambios se documentan cronológicamente, del más reciente al más antiguo.

---

## [2026-03-10] Fix Tailwind CSS no generaba utilidades

### Problema
- Los estilos de Tailwind no se aplicaban correctamente en dev mode
- Iconos se veían gigantes y sin estilos

### Archivos afectados
- src/tailwind.config.ts
- src/tsconfig.json
- src/index.html

### Solución
- Corregido content path de `./src/**/*` a rutas absolutas
- Corregido tsconfig.json include de "src" a "."
- Cambiado src/index.html script de `/src/main.tsx` a `/main.tsx`

---

## [2025-03-09] Versión principal - iteracion2

### Problema
- Necesidad de establecer una versión principal del proyecto

### Archivos afectados
- iteracion1 (eliminado)
- iteracion2 → src

### Solución
- Eliminada iteracion1
- Renombrada iteracion2 a src (versión principal)

---

## [2025-03-09] iteracion2 - Optimización SEO para Google Ads

### Problema
- La página faltaba meta tags para SEO y Google Ads

### Archivos afectados
- iteracion2/index.html
- iteracion2/public/sitemap.xml
- iteracion2/public/robots.txt
- iteracion2/public/favicon.svg

### Solución
- Agregado: title, meta description, keywords, author, canonical
- Agregado: Open Graph tags (og:type, og:title, og:description, og:image)
- Agregado: Twitter Cards
- Agregado: Schema.org (Organization)
- Agregado: Theme color, favicon
- Creado: sitemap.xml y robots.txt
- Creado: favicon.svg

---

## [2025-03-09] iteracion2 - Título contactenos actualizado
- Cambiado a "Conta" en violeta y "ctanos" en blanco

---

## [2025-03-09] iteracion2 - Badges agrandados

### Problema
- Los badges "Desarrollo Web Moderno", "Lo que hacemos" y "Hablemos" eran muy pequeños

### Archivos afectados
- iteracion2/src/components/Hero.jsx
- iteracion2/src/components/Servicios.jsx
- iteracion2/src/components/Contacto.jsx

### Solución
- Aumentado tamaño de badges de text-sm a text-lg y padding de py-1.5 a py-2

---

## [2025-03-09] iteracion2 - Cambios menores

### Problema
- Los iconos de servicios tenían color violeta en lugar de blanco

### Archivos afectados
- iteracion2/src/components/Servicios.jsx

### Solución
- Cambiado color de iconos de servicios de violeta a blanco

---

## [2025-03-09] iteracion2 - Landing page v2.0.0 (Estilo moderno)

### Problema
- La iteracion1 tenía un diseño básico que necesitaba mejoras visuales

### Archivos afectados
- iteracion2/src/components/Header.jsx
- iteracion2/src/components/Hero.jsx
- iteracion2/src/components/Servicios.jsx
- iteracion2/src/components/Contacto.jsx
- iteracion2/src/components/Footer.jsx

### Solución
- **Header**: Efecto de scroll con blur, indicador de punto animado, underline en enlaces
- **Hero**: Gradientes decorativos, blur effects, animaciones de entrada, badge moderno, botones con shadow y hover effects, icons de beneficios
- **Servicios**: Gradientes de fondo, cards con hover -translate-y y rotate, border gradient effect, icons SVG en lugar de emojis
- **Contacto**: Input focus states con glow effect, backdrop blur, gradientes decorativos
- **Footer**: Icons SVG, efectos hover en enlaces, gradientes de fondo, redes sociales

---

## [2025-03-09] iteracion1 - Landing page v1.0.0

### Problema
- El proyecto no tenía una landing page para OnyxCode.cl
- AGENTS.md no incluía la paleta de colores con códigos hexadecimales

### Archivos afectados
- iteracion1/package.json
- iteracion1/vite.config.js
- iteracion1/tailwind.config.js
- iteracion1/postcss.config.js
- iteracion1/index.html
- iteracion1/src/main.jsx
- iteracion1/src/index.css
- iteracion1/src/App.jsx
- iteracion1/src/components/Header.jsx
- iteracion1/src/components/Hero.jsx
- iteracion1/src/components/Servicios.jsx
- iteracion1/src/components/Contacto.jsx
- iteracion1/src/components/Footer.jsx
- AGENTS.md

### Solución
- Creación completa de landing page con React + Tailwind CSS
- Paleta de colores: onyx (fondos) + violeta (acentos)
- Secciones: Header, Hero, Servicios, Contacto, Footer
- Diseño responsivo y accesible (ARIA, etiquetas semánticas)
- Formulario de contacto funcional (sin conexión a backend)
- Agregada paleta de colores en AGENTS.md con clases Tailwind y códigos hexadecimales
