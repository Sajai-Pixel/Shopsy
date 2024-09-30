import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Wishlist from './pages/Wishlist'
import View from './pages/View'
import Cart from './pages/Cart'
import Pnf from './pages/Pnf'
import Footer from './components/Footer'
function App() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/wishlist' element={<Wishlist />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/:id/view' element={<View />} />
        <Route path='/*' element={<Pnf />} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
