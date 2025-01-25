import React from 'react'
import { useNavigate } from 'react-router-dom'

function NotFound() {
    const navigate = useNavigate();
  return (
    <div>
        <h1>404 | page not found</h1>
        <button onClick={()=>navigate('/')}>GO to Home page</button>
    </div>
  )
}

export default NotFound