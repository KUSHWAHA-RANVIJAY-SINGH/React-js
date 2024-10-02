import { useState } from 'react';
import './App.css';
import TodoItem from "./TodoItem";
function TodoList()
{
    const tasks=[
        {id:1,title:"Learn React",completed:false},
        {id:2,title:"C Programming",completed:true},
        {id:3,title:"Object oriented concepts",completed:true},
        {id:4,title:"Speaking English",completed:false}
    ];
    const [todo,setTodo]=useState(tasks);
    const todoDelete=(keyId)=>
    {
        const newTodo=todo.filter(val=>val.id!=keyId);
        setTodo(newTodo);
    }
    return(
        <div className="TodoList">
           {todo.map(row=>(
            <TodoItem task={row} onDelete={()=>todoDelete(row.id)}/>
           ))}       
        </div>
    );
}
export default TodoList;