import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Navbar.css'

const Navbar = () => {
  return (
    <div className='navBar'>
        <div className='navbar-brand'>
            <Link to='/'>Movie App</Link>
        </div>
        <div className='navbar-links'>
            <Link to='/' className='nav-link'>Home</Link>
            <Link to='/favorites' className='nav-link'>Favorite</Link>
            
        </div>
    </div>
  )
}

export default Navbar