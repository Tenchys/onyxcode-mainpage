import Header from './components/Header'
import Hero from './components/Hero'
import Servicios from './components/Servicios'
import Contacto from './components/Contacto'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Servicios />
        <Contacto />
      </main>
      <Footer />
    </>
  )
}

export default App
