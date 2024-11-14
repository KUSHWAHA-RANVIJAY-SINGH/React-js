import React from "react";

function Todoitems({ tododate, todoname ,onDeleteClick}) {
  return (
    <div>
      <div className="m-10 columns-3 font-semibold">
        <div>{todoname}</div>
        <div>{tododate}</div>
        <div>
          <button className="border bg-red-600 rounded-lg p-2 w-32" onClick={() => onDeleteClick(todoname)}>
           Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Todoitems;
