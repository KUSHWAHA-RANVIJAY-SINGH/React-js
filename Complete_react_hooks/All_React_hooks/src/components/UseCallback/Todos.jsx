import React from 'react'

function Todos({todos, addTodo}) {
  return (
    <div>
        <h1>My Todos</h1>
        {todos.map((todo,index)=>{
            return <p key={index}>{todo +" "+index}</p>
        })}

        <button onClick={addTodo}>Add Todo</button>
    </div>
  )
}

export default Todos