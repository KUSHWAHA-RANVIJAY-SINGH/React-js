import React, { useContext } from "react";
import { Todoitemconstext } from "../store/To_do_item";

function Todoitems({ tododate, todoname}) {
 
  const {DeleteItem} =useContext(Todoitemconstext);
  return (
    <div>
      <div className="m-10 columns-3 font-semibold">
        <div>{todoname}</div>
        <div>{tododate}</div>
        <div>
          <button className="border bg-red-600 rounded-lg p-2 w-32" onClick={() => DeleteItem(todoname)}>
           Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Todoitems;
