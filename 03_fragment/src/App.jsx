import { useState } from "react";
import Container from "./components/Container";
import ErrorMessage from "./components/ErrorMessage";
import Fooditem from "./components/Fooditem";
import FoodInput from "./components/FoodInput";
function App() {
  // let foodItems =['Dal',"Green Vegitable","Roti","Salad","Milk","Ghee" ,"Dry fruits"];
    // foodItems =[]

    let [foodItems,setfoodItems] =useState([])

    const handlekeydown =(event)=>{
      if (event.key === 'Enter') {
        let  newfoodItems = event.target.value;
        event.target.value ='';
        let newItems =[...foodItems,newfoodItems]
        setfoodItems(newItems);
        
      }
    }


  return (
    <>
    <Container>
       
        <h1 className="font-semibold text-4xl m-6 text-center">Healthy Food</h1>
        <FoodInput handlekeydown={handlekeydown} />
        <ErrorMessage items={foodItems}/>
        <Fooditem items={foodItems}/>
    </Container>

    {/* <Container>
      <p>Passing children element</p>
    </Container> */}
</>
  )
}

export default App
