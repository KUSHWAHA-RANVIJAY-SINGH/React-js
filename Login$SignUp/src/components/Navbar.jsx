import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <nav className='nav'>
          <h3>Explore !</h3>
            <ul>
                <li><Link to='/home'>Home</Link></li>
                <li><Link to='/login'>Login</Link></li>
                <li><Link to='/'>Signup</Link></li>
            </ul>
        </nav>
        <Outlet/>
    </div>
  )
}

export default Navbar