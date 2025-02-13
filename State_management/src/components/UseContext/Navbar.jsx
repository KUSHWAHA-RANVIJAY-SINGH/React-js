import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Navbar() {
  return (
    <>
        <nav>
            <ul>
                <li>
                    <Link to='/compoent_1'>compoent_1</Link>
                </li>
                <li>
                    <Link to='/compoent_2'>compoent_2</Link>
                </li>
                <li>
                    <Link to='/compoent_3'>compoent_3</Link>
                </li>
                <li>
                    <Link to='/compoent_4'>compoent_4</Link>
                </li>
            </ul>
        </nav>
        <Outlet/>
    </>
  )
}

export default Navbar