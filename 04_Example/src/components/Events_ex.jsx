import { useState } from 'react'


function Events_ex() {
    const [color, setColor] = useState('green');

  return (
    <div style={{backgroundColor:color ,height:500}}>
    <button onClick={()=>setColor('red')}>Red</button>
    <button onClick={()=>setColor('blue')}>Blue</button>
    <button onClick={()=>setColor('green')}>Green</button>
    </div>
  )
}

export function Buttononclickexample() {
    const [message, setMessage]=useState("Click the button")
   const [inputValue, setInputValue] = useState('Mohan');  
   const handleChange = (event) => {
    setInputValue(event.target.value);
    console.log('Input value changed:', event.target.value);
  };
    return (
        <div>
            <button onClick={()=>setMessage('Button was clicked!')}>Click me</button>
         <p>{message}</p>

<div>
         {/* onchange event for the input field */}
      
         <input type="text" 
          onChange={handleChange} value={inputValue} placeholder='Type something'/>
          </div>
         
         <div>
          <OnchangeExample/>
          <App/>
         </div>
         <div>
         <OnFocus_OnBlur/>
         </div>
        </div>
       
    )
}

  function OnchangeExample() {
  const [name, setname] = useState('ravimohan');

  const handleSubmit =(e)=>{
    e.preventDefault();
    alert(`Form submit! Name: ${ name}`);
    console.log(`form submit name is ${name}`);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={(e)=> setname(e.target.value)} />
      <button type='subimt'>Submit</button>
      </form>
    </div>
  )
}

function App() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ width: 400, height: 200, backgroundColor: isHovered ? 'lightblue' : 'lightgray' }}
    >
      Hover over me!
    </div>
  );
}

function OnFocus_OnBlur() {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = ()=>{
    setIsFocused(true)
  }

  const handleBlur = ()=>{
    setIsFocused(false)
  }
   return(
    <div>
      <input type="text" onFocus={handleFocus} onBlur={handleBlur}  style={{ margin:20,padding:32, backgroundColor: isFocused ? 'green' : 'gray',  color:isFocused ? 'white':'black'}} />
    </div>
   )
}
export default Events_ex