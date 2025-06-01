import React from "react";
function Buttoncontainer({onbuttonClick}){
  const button =['C','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0','.']
    return (
         
        <div className="grid grid-cols-3 gap-2 ">
        {button.map((item)=>{
           return (
            <button onClick={()=>onbuttonClick(item)} className="border border-slate-500 rounded p-2">{item}</button>
           )
        })}
   
      </div>
    )
}

export default Buttoncontainer;