import React from 'react'
function Fooditem(props) {
   
  return (
    <>
    <ul className=" m-6 ">
      
      {props.items.map((item)=>{
        return <li className="border m-2 p-4 text-xl" key={item}>{item}</li>
      })}
    </ul>
    </>
  )
}

export default Fooditem