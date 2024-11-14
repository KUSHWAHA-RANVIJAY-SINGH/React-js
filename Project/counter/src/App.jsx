import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <div className="card">
      <button onClick={()=>{
        if(count === 0){
        setCount(0)
      }else{
        setCount(count -1)
      }
      
      }}><h3>- Decrement</h3></button>
      <h1 className='display'>Count is {count}</h1>
        <button  onClick={() => setCount((count) => count + 1)}>
         <h3 >+ Increment</h3>
        </button>
      </div>
     </>
  )
}

export default App
