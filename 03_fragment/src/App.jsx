import ErrorMessage from "./components/ErrorMessage";
import Fooditem from "./components/Fooditem";
function App() {
  let foodItems =['Dal',"Green Vegitable","Roti","Salad","Milk","Ghee" ,"Dry fruits"];
    // foodItems =[]
  return (
    <>
       
        <h1 className="font-semibold text-4xl m-6 ">Healthy Food</h1>
        <ErrorMessage items={foodItems}/>
        <Fooditem items={foodItems}/>
    </>
  )
}

export default App
