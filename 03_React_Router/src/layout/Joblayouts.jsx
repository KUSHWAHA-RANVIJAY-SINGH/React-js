import React from 'react'
import { Outlet } from 'react-router-dom'

function Joblayouts() {
  return (
    <div>
        <h1>Job opening</h1>
        <p>List of current job opening in our company.</p>
-        <Outlet/>

    </div>
 
  )
}

export default Joblayouts