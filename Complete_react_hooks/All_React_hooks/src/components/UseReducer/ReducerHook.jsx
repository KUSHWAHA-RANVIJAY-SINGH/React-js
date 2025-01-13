import React, { useReducer } from 'react'
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import Reducer from './Reducer'
Reducer
const initialValue =0;
function ReducerHook() {
    const [state,dispatch] = useReducer(Reducer,initialValue);
  return (
    <div>
        <h1>UseReducer</h1>
        <button style={{background:"yellow", color:"black"}} onClick={() => dispatch({type: 'INCREMENT'})}><FaPlus/></button>
        <h3>{state}</h3>
        
        <button style={{background:"orange", color:"black"}} onClick={() => dispatch({type: 'DECREMENT'})}><FaMinus/></button>

    </div>
  )
}

export default ReducerHook