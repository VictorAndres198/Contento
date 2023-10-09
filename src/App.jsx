import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ComplexNavbar from './pages/components/NavBar'
import Home from './pages/Home'

function App() {
  return (
    <div >
      <ComplexNavbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </div>
  )
}

export default App
