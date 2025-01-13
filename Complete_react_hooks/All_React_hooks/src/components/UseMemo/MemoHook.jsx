import React from 'react'

function MemoHook() {
    const [count, setCount] = React.useState(0);
    const [show ,setShow] = React.useState(false);

    const countNumber =(num)=>{
        for(let i=0; i<1000000000; i++){}
        return num;
    }
    const Chekdata = React.useMemo(()=>{
        return countNumber(count)
    },[count]);
  return (
    <div>
        <h1>MemoHook</h1>
        <button onClick={() => setCount(count+1)}>Counter</button>
        <p>Count: {Chekdata}</p>

        <button onClick={()=> setShow(!show)}>{show ?"You Clicked Me":"Click me Plz"}</button>

    

    </div>
  )
}

export default MemoHook