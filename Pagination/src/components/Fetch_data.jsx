import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";

function Fetch_data() {
   //  const [todo, setTodo] = useState([]);
    const [data, setdata] = useState([]);
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
      axios.get('https://dummyjson.com/posts').then((res)=> setdata(res.data.posts));
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
       <div className="main">        { data.map((post)=>{
          return (
           <div key={post.id} className="post">
            <h1>{post.id+"."}{post.title}</h1>
            <div className='body'>
            <p>{post.body}</p>
            <div className='reactions'>
            <button className='like'><AiFillLike/>{post.reactions.likes}</button>
            <button className='dislike'><AiFillDislike/>{post.reactions.dislikes}</button>
            </div>
            </div>
          </div>
          )
        })}

          {/* {data &&<> <h3>Title:{data.title}</h3>
            <p>body: {data.body}</p>
            <h4>tags:{data.tags+" "}</h4>
            {/* <h5>Likes:{data.reactions.likes}</h5>
            <h5>desl  ikes:{data.reactions.dislikes}</h5> 
           </>
          } */}
    </div>
    </div>
  )
}

export default Fetch_data