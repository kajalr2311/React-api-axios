import React from 'react'
import { Link } from 'react-router-dom'


const Nav = () => {
  return (
    <div>
         <nav className='my-5 flex' >
     <Link to="/" >Home</Link>
     <Link to="/About" >About</Link>
     <Link to="/Gallery" >Gallery</Link>
      </nav>
      </div>
  )
}


export default Nav