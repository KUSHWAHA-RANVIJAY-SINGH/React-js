// Definition: Props (short for properties) are read-only attributes passed from a parent component to a child component. They allow data to flow down the component tree.
// Usage: Props are used to pass data and event handlers to child components.

import React from 'react'

function Props({name}) {
  return (
    <div>
    <h1>Props</h1>
    <p>My name is {name}</p>
    </div>
  )
}

export default Props    