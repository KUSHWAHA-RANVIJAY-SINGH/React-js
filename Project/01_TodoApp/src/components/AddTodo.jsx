import React, { useState } from 'react'

function AddTodo({onNewItem}) {
     const [addtodoitem, setaddtodoitem] = useState();
   const [duedate, setduedate] = useState();

    const handleNameChange =(event)=>{
      setaddtodoitem(event.target.value)
    }
    const handleDateChange =(event)=>{
      setduedate(event.target.value)
    }

    const handleonclick =()=>{
      onNewItem(addtodoitem,duedate);
      setaddtodoitem('');
      setduedate('');
    }
  
  return (
    <div>
        <div className="m-10 border border-b-gray-600  columns-3 font-semibold ">
   <div className="">
   <input className="p-2" type="text" placeholder="Enter To do here" onChange={handleNameChange} value={addtodoitem} />  
   </div>  
      <div className="">
      <input type="date" className=" p-2 " onChange={handleDateChange} value={duedate}/>
      </div>
      <div>
        <button className="border bg-green-400 rounded-lg p-2 w-32" onClick={handleonclick}>Add</button>
      </div>
  </div>
    </div>
  )
}

export default AddTodo