import React, { useState } from 'react'

function UseState() {
    const [count,setCount] = useState(0);
  return (
    <div>
        <h1>useState Hook</h1>
        <p>useState is a Hook that lets you add state to function components.</p>
        <p>When you call useState, it returns a pair: the current state value and a function that lets you update it.</p>
        <div>
            <h2>Example:</h2>
            
            <div>
                <h2>{count}</h2>
                <button onClick={()=> setCount(count+1)}>Increment</button>
                <button onClick={()=> {count === 0 ?0 :setCount(count-1)}}>Decrement</button>
            </div>
        </div>        
    </div>
  )
}

export default UseState