import AddTodo from "./components/AddTodo"
import AppName from "./components/AppName"
import TodoItem1 from "./components/TodoItem1"
import Footer from "./components/Footer";
import { TodoItemsContextProvider} from "./store/To_do_item";


function App() {

  return (
    <TodoItemsContextProvider>
  <center className='todo-container h-screen'>
       <AppName/>
        <AddTodo  />
        <TodoItem1 />
        <Footer/>
  </center>
  </TodoItemsContextProvider>
  )
}

export default App
