import React from 'react'
import Todos from './Todos'

function UseCallback() {
    // const [count, setCount] = React.useState(0);
    const [todos,setTodos] = React.useState([]);
    const [todos_1, settodos_1] = React.useState([]);


    const addTodo = ()=>{
        setTodos((prev)=>[...prev,`New Entry`]
        )
    };
    const addtodos= ()=>{
      settodos_1((prev) => [...prev] ,'New Entry');
    }

  return (
    <div>
        <h1>UseCallback Hook</h1>
        {/* <p>UseCallback Hook is used to memoize a function so that it is not recreated every time the component re-renders. It is used to optimize the performance of the application.</p> */}

        <Todos todos={todos} addTodo={addTodo}/>

        {/* <div style={{marginTop:"20px"}}>
            <button onClick={() => setCount(count + 1)}>Increment Count</button>
            <p>Count: {count}</p>
        </div> */}
        <div>
          <h3>My todos_1</h3>
            {todos_1.map((index,todo)=>{
              return <h4 key={index}>{todo +""+ index}</h4>
            })}
            <button onClick={addtodos}> Add todo</button>
        </div>

        
    </div>
  )
}

export default UseCallback