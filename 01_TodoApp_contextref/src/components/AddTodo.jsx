import React, { useContext, useRef } from 'react';  
import { Todoitemconstext } from '../store/To_do_item';  

function AddTodo() {  
  const { addnewitem } = useContext(Todoitemconstext);  
  const todoitemelement = useRef();  
  const tododuedate = useRef();  

  const handleonclick = () => {  
    const addtodoitem = todoitemelement.current.value;  
    const duedate = tododuedate.current.value;  
    todoitemelement.current.value = '';  
    tododuedate.current.value = '';  
    addnewitem(addtodoitem, duedate);  
  };  

  return (  
    <div className="flex flex-col items-center m-5 p-4 md:m-10">  
      <div className="flex flex-col md:flex-row items-center w-full space-y-4 md:space-y-0 md:space-x-4 border p-4 rounded-lg shadow-lg">  
        <input  
          className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-400 flex-1"  
          type="text"  
          ref={todoitemelement}  
          placeholder="Enter To do here"  
        />  
        <input  
          className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-400"  
          type="date"  
          ref={tododuedate}  
        />  
        <button  
          className="bg-green-500 text-white rounded-lg p-2 hover:bg-green-600 transition duration-200 flex-shrink-0"  
          onClick={handleonclick}  
        >  
          Add  
        </button>  
      </div>  
    </div>  
  );  
}  

export default AddTodo;