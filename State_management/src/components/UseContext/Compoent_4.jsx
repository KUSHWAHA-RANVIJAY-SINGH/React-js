import React, { useContext } from 'react'
import Compoent_5 from './Compoent_5'
import { UserContext } from '../../App'

function Compoent_4() {
  const {user} = useContext(UserContext);
  return (
    <div>
        <h4>Compoent_4</h4>
        <Compoent_5/>
        <h3>Hello {user} </h3>
    </div>
  )
}

export default Compoent_4