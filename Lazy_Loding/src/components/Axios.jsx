import axios from 'axios';
import React, { useEffect } from 'react'

function Axios() {
    useEffect(()=>{

        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            console.log(response.data);
            })
            .catch(error => {
                console.error(error);
                });
                }, []);
  return (
    <div>
            <h3>Axios data </h3>
    </div>
  )
}

export default Axios