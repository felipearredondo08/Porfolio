import { useState } from 'react'
import './App.css'
import Menu from './components/Menu'
import Portada from './components/Portada'
import Proyectos from './components/Proyectos'
import SobreMi from './components/SobreMi'
import Footer from './components/Footer'
import Contacto from './components/Contacto'


function App() {
  const [count, setCount] = useState(0)

  

  return (
    <>
      <Menu />
      <Portada />
      <SobreMi />
      <Proyectos />
      <Contacto />
      <Footer />
      
    </>
  )
}

export default App;