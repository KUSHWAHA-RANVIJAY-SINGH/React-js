import React from 'react'

function FoodInput({handlekeydown}) {
  

    return (
    
        <input className="p-4 w- mx-12 w-72 bg-slate-900 border-blue-300 border-4 rounded " type="text" placeholder="Enter To do here" 
            onKeyDown={handlekeydown}
        /> 
    
  )
}

export default FoodInput