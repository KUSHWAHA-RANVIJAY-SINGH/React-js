import React, { useState,useRef, useEffect } from 'react'

function UseRef() {
    const [userInput,setUserInput] =useState("");

    const count = useRef(0);

    useEffect(()=>{
        count.current = count.current+1;
    });

  return (
    <div>
        <h3>UseRef</h3>
        {/* <p>UseRef is a Hook that allows you to persist values between renders.</p> */}
        <input type="text" value={userInput} onChange={(e)=> setUserInput(e.target.value)} />

        <p>The number of times comp render :{count.current}</p>
    </div>
  )
}

export default UseRef