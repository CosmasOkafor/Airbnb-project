import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import Contact from './pages/Contact'
import About from './pages/About'

function App() {
    
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route  path='/' element={ <Home /> }/>
        <Route  path='/about' element={ <About /> }/>
        <Route  path='/contact' element={ <Contact /> }/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
