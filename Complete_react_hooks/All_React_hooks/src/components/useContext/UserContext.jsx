import { createContext } from "react";

const AppContext = createContext();

const AppProvider =({children})=>{
    const person ={
    name:'Ravijay Singh',
    age: 22,
  }

    return (
        <AppContext.Provider value={person}>{children}</AppContext.Provider>
    )
}
export {AppProvider, AppContext};