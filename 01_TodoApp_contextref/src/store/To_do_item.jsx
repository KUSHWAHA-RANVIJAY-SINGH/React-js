import {  createContext, useReducer } from "react";
export const Todoitemconstext =createContext({todoitems: [],addnewitem :()=>{},DeleteItem:()=>{}});



const TodoItemsReducer =(Currval,action)=>{
    let newItemAction = Currval;
    if (action.type ==='NEW_ITEM') {
        newItemAction=[...Currval,{
            name: action.payload.itemname, duedate: action.payload.itemdate,
        },];
    }else if(action.type ==='DElETE_ITEM'){
        newItemAction = Currval.filter((item)=>{
            item.name !== action.payload.itemname
        });
    }
    return newItemAction;
}

export const TodoItemsContextProvider =({children}) =>{
    
  const [todoitems, dispatchtodoItems] = useReducer(TodoItemsReducer, []) 

  const addnewitem =(itemname ,itemdate) =>{
      const newItemAction ={
        type :"NEW_ITEM",
        payload :{
          itemname,
          itemdate,
        },
      }
      dispatchtodoItems(newItemAction);
  }

  const DeleteItem = (todoItemName) => {
    const deleteItemAction = {
      type :"DElETE_ITEM",
      payload :{
       itemname: todoItemName,
      }
    
  };
  dispatchtodoItems(deleteItemAction);
};
  return(
    <Todoitemconstext.Provider value={{todoitems,addnewitem,DeleteItem}}>
        {children}
    </Todoitemconstext.Provider>
  )

};
