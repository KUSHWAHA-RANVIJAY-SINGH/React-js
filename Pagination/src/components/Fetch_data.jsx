import React, { useState, useEffect } from 'react'
import axios from 'axios';

function Fetch_data() {
   //  const [todo, setTodo] = useState([]);
    const [data, setdata] = useState(null);
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
    
    useEffect(() => {
      axios.get('https://picsum.photos/').then((res)=> console.log(res));
    }, [])
    
    
  return (
    <div>
        <h1>Fetch Data</h1>
        {/* {todo.map((todo)=>{
            return <div key={todo.id}></div>
            <p>{todo.todo}</p>
            <h1>{todo.completed ? "True" :'false' }</h1>
            </div>
        })} */}

        {data && <img src={data} alt="Random" />}
    </div>
  )
}

export default Fetch_data