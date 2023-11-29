import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ComplexNavbar from './pages/components/NavBar'
import Footer from './pages/components/footer'
import Login from './pages/components/login'
import Registrate from './pages/components/registro'
import Home from './pages/Home'
import Productos from './pages/Productos'
import PreguntaFrecuente from './pages/PreguntaFrecuente'
import Contactanos from './pages/Contactanos'
import Nosotros from './pages/Nosotros'
import Carrito from './pages/Carrito'


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
        <Route path='Login' element={<Login/>}/>
        <Route path='Registrate' element={<Registrate/>}/> 
        <Route path='Carrito' element={<Carrito/>}/> 
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
