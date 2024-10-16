import React, { useState } from 'react';

const App = () => {
  const [color, setColor] = useState("olive");

  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-3 rounded-2xl">
          <button onClick={()=>{setColor("red")}} className="outline-none px-4 py-1 rounded-full text-white shadow-lg font-bold" style={{backgroundColor:"red", color:"white"}}>Red</button>
          <button onClick={()=>{setColor("blue")}}  className="outline-none px-4 py-1 rounded-full font-bold"style={{backgroundColor:"blue" , color:"white"}}>Blue</button>
          <button onClick={()=>{setColor("yellow")}}  className="outline-none px-4 py-1 rounded-full font-bold "style={{backgroundColor:"yellow"}}>Yellow</button>
          <button onClick={()=>{setColor("green")}}  className="outline-none px-4 py-1 rounded-full font-bold "style={{backgroundColor:"green", color:"white"}}>Green</button>
          <button onClick={()=>{setColor("black")}}  className="outline-none px-4 py-1 rounded-full font-bold "style={{backgroundColor:"black", color:"white"}}>Black</button>

        
        </div>
      </div>
    </div>
  );
}

export default App;
