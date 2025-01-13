import React, { useRef } from 'react'

function UseRef1() {
    const inputRef =useRef();
    const handlebackgroundcolor =()=>{
        inputRef.current.focus();
        inputRef.current.style.backgroundColor = "red";
    }
  return (
    <div><h1>Access the Dom element</h1>
     <input type="text" style={{height:'80px'}} ref={inputRef} />
     <br />
     <button onClick={handlebackgroundcolor}>Click</button>
    </div>
  )
}

export default UseRef1