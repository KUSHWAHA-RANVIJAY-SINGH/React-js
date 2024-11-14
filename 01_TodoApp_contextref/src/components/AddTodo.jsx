import React, { useContext, useRef} from 'react'
import { Todoitemconstext } from '../store/To_do_item';

function AddTodo() {
  const {addnewitem} =useContext(Todoitemconstext)
  const todoitemelement =useRef();
    const tododuedate =useRef();

    const handleonclick =()=>{
      const addtodoitem =todoitemelement.current.value;
      const duedate =tododuedate.current.value;
       todoitemelement.current.value ='';
       tododuedate.current.value ='';
      addnewitem(addtodoitem,duedate);
    }
  
  return (
    <div>
        <div className="m-10 border border-b-gray-600  columns-3 font-semibold ">
   <div className="">
   <input className="p-2" type="text" ref={todoitemelement} placeholder="Enter To do here"  />  
   </div>  
      <div className="">
      <input type="date" ref={tododuedate} className=" p-2 "  />
      </div>
      <div>
        <button className="border bg-green-400 rounded-lg p-2 w-32" onClick={handleonclick}>Add</button>
      </div>
  </div>
    </div>
  )
}

export default AddTodo