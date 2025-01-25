import React from 'react'
import img from '../assets/react.svg';
import {NavLink} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  const handleclick =()=>{
    navigate('/About');
  };
  return (
    <div>
    <div >
        <img src={img} alt="img" />
        <div className='flex shadow-gray-900  justify-center'>
       <ul className=' flex justify-center gap-8  border-gray-800 shadow  cursor-pointer' >
      
       <NavLink to='/'><li >Home</li></NavLink>
       <NavLink to='/Product'><li>Products</li></NavLink>
       <NavLink to='/Contact'><li>Contact</li></NavLink>
       <NavLink to='/About'><li>About</li></NavLink>
       <NavLink to='/jobs'><li>Jobs</li></NavLink>

  </ul>
  </div>
  </div>
  {/* <Link to='/Contact'> */}
       <button className='bg-black text-zinc-50 rounded-md m-8 ml-16' onClick={handleclick}>Get Started

       </button>
       {/* </Link> */}
    </div>
  )
}

export default Navbar