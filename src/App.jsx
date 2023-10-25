import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ComplexNavbar from './pages/components/NavBar'
import Footer from './pages/components/footer'
import Home from './pages/Home'
import Productos from './pages/Productos'
import PreguntaFrecuente from './pages/PreguntaFrecuente'
import Contactanos from './pages/Contactanos'
import Nosotros from './pages/Nosotros'


function App() {
  return (
    <div >
      <ComplexNavbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='Productos' element={<Productos/>}/>
        <Route path='PreguntaFrecuente' element={<PreguntaFrecuente/>}/>
        <Route path='Contactanos' element={<Contactanos/>}/>
        <Route path='Nosotros' element={<Nosotros/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
