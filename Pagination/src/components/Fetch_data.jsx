import React, { useState, useEffect } from 'react'
import axios from 'axios';

function Fetch_data() {
    const [todo, setTodo] = useState([]);
    // const fethc_product = async() =>{
    //    const res=await fetch('https://dummyjson.com/todos')
    //    const data=await res.json();
    //    console.log(data.todos);
    //     if (data.todos && data) {
    //         setTodo(data.todos);            
    //     }
    // }
    // useEffect(() => {
    //    fethc_product();
    // }, []);
    
  const fethc_product = async()=>{
     try {
        const res =await axios.get('https://dummyjson.com/todos');
     const data = res.data;
        setTodo(data.todos)
     console.log(data.todos);   
     } catch (error) {
        console.error('Fetching problem..'+ error);
     }
  }
  fethc_product();
    
  return (
    <div>
        <h1>Fetch Data</h1>
        {todo.map((todo)=>{
            return <div key={todo.id}>
            <p>{todo.todo}</p>
            <h1>{todo.completed ? "True" :'false' }</h1>
            </div>
        })}
    </div>
  )
}

export default Fetch_data