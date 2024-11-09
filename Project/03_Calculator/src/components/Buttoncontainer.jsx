import React from "react";
function Buttoncontainer(props){
    return (
         
        <div className="grid grid-cols-3 gap-2">
        {props.value.map((item)=>{
           return (
            <button className="border border-slate-500 rounded p-2">{item}</button>
           )
        })}
   
      </div>
    )
}

export default Buttoncontainer;