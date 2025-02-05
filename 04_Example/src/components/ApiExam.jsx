import React from 'react'
import { useEffect,useState } from 'react'
import axios from 'axios';
function ApiExam() {
    const [userdata, setUserdata] = useState([])
    useEffect(()=>{
        axios.get('https://randomuser.me/api/').then((response)=>{
            console.log(response);
            setUserdata(response.data.results)
        })
    },[])
  return (
    <div><h2>ApiExam</h2>
    {userdata.map((data)=>{
        return(
            <div key={data.id}>{data.name.first}
                <div>{data.gender}</div>
            </div>
        )
    })}
    </div>
  )
}

export default ApiExam