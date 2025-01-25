import React from 'react'
import { useNavigate } from 'react-router-dom'
function Contact() {
  const navigate = useNavigate();
  return (
    <div><h1>Contact Page</h1>
      <div>
        <button onClick={()=>navigate('info')} className='bg-transparent hover:bg-blue-500 text-black font-bold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent  rounded mr-8'> Contact Info</button>
        <button onClick={()=>navigate('from')} className='border border-black px-2 py-2 rounded font-bold hover:bg-blue-500 hover:border-transparent hover:text-white text-black'> Contact From</button>
      </div>
    </div>
  )
}

export default Contact