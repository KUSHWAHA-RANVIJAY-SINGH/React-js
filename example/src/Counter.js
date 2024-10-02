import React,{useState} from 'react';

const Counter =()=>{
    const [count,setCount]=useState(0);

    const increment =()=>{
        setCount(count+1);
    };

    const decrement =() =>{
        setCount(count-1);
    };
    const rest=()=>{
        setCount(0);
    }


    return(
        <div>
            <h2>Counter</h2>

            <div>
                <button onClick={decrement} > - </button>
                  <h1>{count}</h1>
                <button onClick={increment}> + </button><br></br>
                <button onClick={rest}> Rest </button>

            </div>
        </div>
    );
};

export default Counter;