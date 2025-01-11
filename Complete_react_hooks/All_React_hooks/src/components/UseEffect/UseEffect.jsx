import React, { useState, useEffect } from 'react';
function UseEffect() {
    const [count, setCount] = useState(0);

    // Runs on Every rende and after every update
    // useEffect(() => {
    //     document.title =`You clicked ${count} times`;
    // },);

    // Runs only on first render
    // useEffect(() => {
    //     document.title =`You clicked ${count} times`;
    // },[]);

    // Runs on Props or State Value Change
    useEffect(() => {
        document.title =`You clicked ${count} times`;
    },[count]);
    const handleclick = (val) =>{
        if(val ==='Inc'){
            setCount(count +1);
        }
        if(val ==='Dec'){
            count === 0? 0: setCount(count -1);
        }
    }
    return (
        <div>
        <h1>UseEffect</h1>
        <p>The Effect Hook lets you perform side effects in function components.</p>
        <div>
            <h2>Example:</h2>
            <div>
                <h2>{count}</h2>
                <button onClick={()=>handleclick('Inc')}>Increment</button>
                <button onClick={()=>handleclick('Dec')}>Decrement</button>
            </div>
        </div>
        </div>
    );
}
export default UseEffect;