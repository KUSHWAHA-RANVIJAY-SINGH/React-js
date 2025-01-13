import React,{useState,useEffect} from 'react'

function CustomHook() {
    const [data, setData] = useState(null);
    

    useEffect(() => {
        fetch('https://official-joke-api.appspot.com/jokes/10')
  .then(response => response.json())
  .then(data => console.log(data));
    }, [data]);
  return (
    <div>
        <h1>Custom Hook</h1>
        {data ? <p>{data}</p> : <p>Loading...</p>}
        {data &&
        data.map((item) => {
          return <p key={item.id}>{item.title}</p>;
        })}
    </div>
  )
}

export default CustomHook