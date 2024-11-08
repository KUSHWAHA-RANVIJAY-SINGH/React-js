import React from 'react'

function AddTodo() {
  return (
    <div>
        <div className="m-10  columns-3 font-semibold ">
   <div className="border border-black">
   <input className="p-2" type="text" placeholder="Enter To do here" />  
   </div>  
      <div className="border border-black">
      <input type="date" className=" p-2 "/>
      </div>
      <div>
        <button className="border bg-green-400 rounded-lg p-2 w-32">Add</button>
      </div>
  </div>
    </div>
  )
}

export default AddTodo