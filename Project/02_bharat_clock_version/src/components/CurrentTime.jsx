import React, { useEffect, useState } from 'react'

function CurrentTime() {
    const [date, setDate] = useState(new Date());
    useEffect(() => {
      const timer = setInterval(() => {
        setDate(new Date());
      },1000)
    
      return () => {
         clearInterval(timer)
      }
    }, [])
    
    return (
    <div>
        <p className='text-2xl'>This is the current time: {date.toLocaleDateString()} -{date.toLocaleTimeString()}  </p>
    </div>
  )
}

export default CurrentTime