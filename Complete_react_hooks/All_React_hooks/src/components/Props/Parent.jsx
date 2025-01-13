import React from 'react'
import Child from './Child'

function Parent() {
  return (
    <div>Parent
    {/* <h1>This is Parent state {props.person.name} and {props.person.age}</h1> */}
    <Child  />
    </div>
  )
}

export default Parent


//destructureing
// import React from 'react'

// function Parent({person}) {
//   return (
//     <div>Parent
//     <h1>This is Parent state {person.name} and {person.age}</h1>
//     </div>
//   )
// }

// export default Parent