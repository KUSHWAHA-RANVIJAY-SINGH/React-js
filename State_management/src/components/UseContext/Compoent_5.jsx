import React, { useContext, useEffect } from 'react'
import {Raju} from './Compoent_1'
import { UserContext } from '../../App';
function Compoent_5() {
    const {user,setUser} = useContext(UserContext);
    const mohan= useContext(Raju);
    // const handlesetUser =()=>{
    //          setUser("mohan")
    // }
    useEffect(()=>{
        const timer = setTimeout(() => {
            setUser('Mohan')
        }, 3000);
        return () => clearTimeout(timer);
    },[setUser]);
    return (
    <div>
        <h1>Component 5</h1>

        <h3>{`Hello again ${user}`}</h3>
        <h3>{`Hello again ${mohan}`}</h3>
        {/* <button onClick={handlesetUser}>set user name is Mohan</button> */}
        <h2>{`Set user name is ${user}`}</h2>


        {/* <p>Username: {user}</p> */}
    </div>
  )
}

export default Compoent_5