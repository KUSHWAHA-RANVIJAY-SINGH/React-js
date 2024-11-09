// import React from 'react'
import Item from './Item'

function Fooditem({items}) {
    // const handleBuyButtonclicked = (e)=>{
    //     console.log(e);
    //     console.log(`${Item} beign bought`)
  
// }
 return(
  <>
   {items.map((item)=>{ 
    return( 
    <Item fooditems={item } handleBuyButtonclicked ={()=> console.log(`${item } bought`)} />
    )
   })}
  </>
 )
  
}

export default Fooditem