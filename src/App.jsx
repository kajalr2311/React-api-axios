
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './componenat/Home'
import About from './componenat/About'
import Gallery from './componenat/Gallery'
import Nav from './componenat/Nav'

const App = () => {
  return (
    <div>
    <Nav/>
<Routes>
<Route path="/" element={<Home/>} />
<Route path="/About" element={<About/>} />
<Route path="/Gallery" element={<Gallery/>} />
</Routes>

    </div>
  )
}

export default App