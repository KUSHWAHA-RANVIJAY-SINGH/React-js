import {  createContext, useState } from 'react'
import './App.css'
import Compoent_1 from './components/UseContext/Compoent_1';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/UseContext/Navbar';
import Compoent_2 from './components/UseContext/Compoent_2';
import Compoent_3 from './components/UseContext/Compoent_3';

export const UserContext = createContext();

function App() {
  const [user, setUser] = useState('Ranvijay');

  return (
   <>
   <UserContext.Provider value={{user,setUser}}>
   <h1>{`Hello ${user}`}</h1> 
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Navbar/>}>
        
   
   <Route index element={<Compoent_1/>}/>
  
        <Route path='compoent_2' element={<Compoent_2/>}/>
        <Route path='component_3' element={<Compoent_3/>}/>
      </Route>
    </Routes>
   </BrowserRouter>
   </UserContext.Provider>
   

   </>
  )
}

export default App
