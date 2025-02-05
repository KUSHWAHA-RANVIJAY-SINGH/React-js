import React from 'react'
import { useNavigate } from 'react-router-dom';

function Home() {
   const navigate = useNavigate();
  const handlelogout =(event)=>{
   event.preventDefault();
    navigate('/')
  }
  return (
    <div>
    <div>
    </div>
    <h3>Welcome Home page !</h3>
      <button onClick={handlelogout}>Logout</button>
    </div>
  )
}

export default Home