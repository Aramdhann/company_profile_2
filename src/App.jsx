import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Product from './pages/Product'
import Event from './pages/Event'
import About from './pages/About'
import FAQ from './pages/FAQ'
import Contact from './pages/Contact'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/product' element={<Product/>} />
      <Route path='/event' element={<Event/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/faq' element={<FAQ/>} />
      <Route path='/contact' element={<Contact/>} />
    </Routes>
  )
}


export default App