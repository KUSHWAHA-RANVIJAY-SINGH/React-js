import React from 'react'

function ErrorMessage({items}) {
    let error = "You have not added any food item";
  return (
    <>
      {items.length === 0 && <h1 className="m-6">I am still Hungry! {error}</h1> }
    </>
  )
}

export default ErrorMessage