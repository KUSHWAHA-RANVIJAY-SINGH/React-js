import AddTodo from "./components/AddTodo"
import AppName from "./components/AppName"
import TodoItem1 from "./components/TodoItem1"

function App() {
  return (
  <center class='todo-container h-screen'>
       <AppName/>
        <AddTodo />
        <TodoItem1/>
  </center>
  )
}

export default App
