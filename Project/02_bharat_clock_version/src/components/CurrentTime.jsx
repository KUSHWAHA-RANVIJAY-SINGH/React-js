import React from 'react'

function CurrentTime() {
     const now =new Date();
    return (
    <div>
        <p className='text-2xl'>This is the current time: {now.toLocaleDateString()} -{now.toLocaleTimeString()}  </p>
    </div>
  )
}

export default CurrentTime