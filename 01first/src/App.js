import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const removevalue =()=>{
    if (count>0) {
      setCount(count-1);
    }
  }
  const reset=()=>{
    setCount(0);
  }
  const addvalue=()=>{
    if (count<20) {
      setCount(count+1);
    }
  }
  return (
    <>
      
      <div className="card">
      <h1>Counter Example</h1>
        <h3>Counter Value {count}</h3>
        <button onClick={addvalue}>
          Add Value{count}
        </button><br></br>
        <button onClick={removevalue}>
        Remove Value {count}
        </button><br></br>
        <button onClick={reset}>Reset :{count}</button>
       
    </div>
    </>
  )
}

export default App
