import React, { useContext } from 'react'
import { AppContext } from '../useContext/UserContext'
AppContext;
function Child() {
  const per̥̥son = useContext(AppContext);
  return (
    <div>Child
    <h2>This is Child class {per̥̥son.name} and age is {per̥̥son.age}</h2>
    </div>
  )
}

export default Child