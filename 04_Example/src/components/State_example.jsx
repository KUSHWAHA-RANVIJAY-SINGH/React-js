import React, { useEffect, useState } from 'react'
function State_example() {
  const [count, setcount] = useState(0)
  return (
    <>
    <div> useState_example</div>
     <p>count : {count}</p>
     <button onClick={() => setcount(count + 1)}>Increment</button>
     <button style={{margin:10}} onClick={()=>{
      if(count ==0){
        setcount(0)
      }else{
        setcount(count - 1)
      }
     }}>Decrement</button>
     
    </>
  )

}
export default State_example



// import React from 'react'
// import { useEffect } from 'react';
// import { useState } from 'react'

// function State_example() {
//  const [showText,setShowText] =useState(false);
//  const [count, setcount] = useState(0); 
//  const [productList, setProductList] = useState([]);
//  useEffect(()=>{
//     if (count === 5) {
//       setShowText(true);
//     }
//  },[count])
 
 //dummy json data 
 
//  async function fetchAllProducts() {
//   try{
//   const res= await fetch('https://dummyjson.com/products/1');
//   const result = await res.json();

//   if (result && result.products) {
//     setProductList(result.products)
//   }
// }catch(error){
//  console.error(error);
    
// }
//  }
//  fetch('https://dummyjson.com/products/1')
// .then(res => res.json())
// .then(console.log);

//  useEffect(()=>{
//   fetchAllProducts();
//  },[])

//  return (
//     <>
//     <div>useEffect example</div>
//     <p>count is {count}</p>

//     {
//     showText ? <p>Hello world</p>:null
//     }
//     <button onClick={() => setcount(count + 1)}>Increment</button>

//     <ul>
//       {/* {productList.map(item=> <li>{item}</li>)} */ products.productList}
//     </ul>
//     </>
//   )
// }

// export default State_example