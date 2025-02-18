import React from 'react'
import Todoitems from './Todoitems'
import WelcomeMessage from './WelcomeMessage'

function TodoItem1({ initialTodoitem,onDeleteClick }) {
  return (
    <div>
      <div className="h-screen">
        <h1 className="font-bold text-4xl">To Do List</h1>
        {initialTodoitem.length === 0 && <WelcomeMessage/>}
        {initialTodoitem.map((item) => (
          <Todoitems
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
