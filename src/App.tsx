import Header from './components/Header'
import Hero from './components/Hero'
import Servicios from './components/Servicios'
import Clientes from './components/Clientes'
import Proyectos from './components/Proyectos'
import Contacto from './components/Contacto'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Servicios />
        <Clientes />
        <Proyectos />
        <Contacto />
      </main>
      <Footer />
    </>
  )
}

export default App
