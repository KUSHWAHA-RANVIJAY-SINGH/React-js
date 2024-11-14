import { useState } from "react"
import AddTodo from "./components/AddTodo"
import AppName from "./components/AppName"
import TodoItem1 from "./components/TodoItem1"
import Footer from "./components/Footer";

function App() {
 


  const [todoitems,settoitems] = useState([]);


  const handleNewItem =(itemname ,itemdate) =>{
    // console.log(`New Item added : ${itemname} Date :${itemdate}`)

    const newitems =[...todoitems ,{ name:itemname,
      duedate: itemdate},];
      settoitems(newitems)
  };

  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoitems.filter((item) => item.name !== todoItemName);
    settoitems(newTodoItems);
  };
  return (
  <center className='todo-container h-screen'>
       <AppName/>
        <AddTodo onNewItem ={handleNewItem} />
        <TodoItem1 initialTodoitem={todoitems} onDeleteClick={handleDeleteItem}/>
        <Footer/>
  </center>
  )
}

export default App
