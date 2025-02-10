import React, { createContext, useState } from 'react'
import Compoent_2 from './Compoent_2'

export const Raju =createContext();

function Compoent_1() {
    const [nameR, setnameR] = useState('Ranvijay')
  return (
    <Raju.Provider value={nameR}>
 <div>
        <h5>Compoent_1 Hello:{nameR}</h5>
        <Compoent_2/>
    </div>
    </Raju.Provider>
   
  )
}

export default Compoent_1