import React from 'react'

function TodoItem1() {
  return (
    <div><div className="h-screen">
    <h1 className="font-bold text-4xl">To Do List</h1>
    <div className="m-10 columns-3 font-semibold">
    <div >
      Buy Milk
    </div>
    <div>
      8/11/24
    </div>
    <div>
       <button className="border bg-red-600 rounded-lg p-2 w-32">Delete</button>
    </div>
    </div>

    <div className="m-10 columns-3 font-semibold">
    <div >
      Go to college
    </div>
    <div>
     8/11/2024
    </div>
    <div>
       <button className="border bg-red-600 rounded-lg p-2 w-32">Delete</button>
    </div>
    </div>
  </div>

</div>
  )
}

export default TodoItem1