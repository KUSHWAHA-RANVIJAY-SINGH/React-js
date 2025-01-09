import React from 'react'

function Conditional() {
  const cars =['maruti','BMW','Audi','Alto'];
    return (
    <div>
        <h1>Garage</h1>
       {cars.length >0 && 
        <h2>You have {cars.length} cars in your Garage.</h2>
       }
    </div>
  )
}

export default Conditional