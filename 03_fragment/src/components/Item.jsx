import React from 'react'

function Item({fooditems ,handleBuyButtonclicked}) {
  
    return (
        <>
        <ul className=" m-6 ">          
          <li className="border m-2 p-4 text-xl active:bg-slate-300 " key={fooditems}>{fooditems}
          <button className='float-end border bg-indigo-600 group-active:bg-black active:bg-blue-600 rounded-lg' onClick={handleBuyButtonclicked}>Buy</button>
          </li>
          
        </ul>
        </>
      )
}

export default Item
