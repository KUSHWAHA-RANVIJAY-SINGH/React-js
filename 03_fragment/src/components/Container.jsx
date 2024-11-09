import React from 'react'

function Container({children}) {
  return (
    <div className='border border-red-50 w-1/2 m-14'>
    {children}
    </div>
  )
}

export default Container