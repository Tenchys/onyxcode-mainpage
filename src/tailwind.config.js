/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        onyx: {
          950: '#0a0a0b',
          900: '#111113',
          800: '#18181b',
          700: '#27272a',
          600: '#3f3f46',
        },
        violet: {
          onix: '#6b21a8',
          dark: '#581c87',
          deeper: '#3b0764',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
