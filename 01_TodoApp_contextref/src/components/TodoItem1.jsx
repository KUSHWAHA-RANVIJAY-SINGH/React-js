import React, { useContext } from 'react'
import Todoitems from './Todoitems'
import WelcomeMessage from './WelcomeMessage'
import { Todoitemconstext } from '../store/To_do_item'

function TodoItem1({ onDeleteClick }) {

  const {todoitems} = useContext(Todoitemconstext)
  // const todoitems =currentobj.todoitems
  
  return (
    <div>
      <div className="h-screen">
        <h1 className="font-bold text-4xl">To Do List</h1>
        {todoitems.length === 0 && <WelcomeMessage/>}
        {todoitems.map((item) => (
          <Todoitems
          key={item.name}
            todoname={item.name}
            tododate={item.duedate}
            onDeleteClick ={onDeleteClick}
          />
        ))}
      </div>
    </div>
  )
}

export default TodoItem1
