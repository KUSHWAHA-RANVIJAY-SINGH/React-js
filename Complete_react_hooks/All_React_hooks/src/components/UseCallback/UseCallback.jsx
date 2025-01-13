import React from 'react'
import Todos from './Todos'

function UseCallback() {
    const [count, setCount] = React.useState(0);
    const [todos,setTodos] = React.useState([]);

    const addTodo = React.useCallback(()=>{
        setTodos((prev)=>[...prev,`New Entry`]
        )
    },[todos]);

  return (
    <div>
        <h1>UseCallback Hook</h1>
        {/* <p>UseCallback Hook is used to memoize a function so that it is not recreated every time the component re-renders. It is used to optimize the performance of the application.</p> */}

        <Todos todos={todos} addTodo={addTodo}/>

        <div style={{marginTop:"20px"}}>
            <button onClick={() => setCount(count + 1)}>Increment Count</button>
            <p>Count: {count}</p>
        </div>
        
    </div>
  )
}

export default UseCallback