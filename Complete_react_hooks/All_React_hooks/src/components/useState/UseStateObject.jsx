import React,{ useState } from "react";


const UseStateObject =()=>{
    const [person ,setPerson] = useState({
        name:"Ranvijay Singh",
        age:22,
        message :"State Management using useState Hook"
    });
    const handlechanage =()=>{
        setPerson({...person,message:"State Management using useState Hook is easy"});
    }
    const handlenamechange =()=>{
        setPerson({...person,name:"Ranvijay Bhai always be happy"});
    }
    return (
        <React.Fragment>
            <h2>{person.name}</h2>
            <h2>{person.age}</h2>
            <h3>{person.message}</h3>
            <button onClick={handlechanage}>Message Chanage</button>
            <div style={{marginTop:"20px"}}>
            <button onClick={handlenamechange}>Chanage Name</button>
            </div>
        </React.Fragment>
    );
}

export default UseStateObject;