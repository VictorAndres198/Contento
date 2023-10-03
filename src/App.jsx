import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ComplexNavbar from './pages/components/NavBar'

function App() {
  return (
    <div>
      <ComplexNavbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </div>
  )
}

export default App
