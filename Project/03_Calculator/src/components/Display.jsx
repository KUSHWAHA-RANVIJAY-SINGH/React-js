import React from 'react'

function Display({calvalue}) {
  return (
    
    <input  value={calvalue} placeholder='0' type="text" id="display" className="border border-slate-600  p-4 m-4  "/>
  )
}

export default Display