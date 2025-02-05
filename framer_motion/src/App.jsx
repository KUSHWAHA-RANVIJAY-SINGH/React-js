import React from 'react'
import {motion} from 'motion/react'
function App() {
  return (
    <div>
        <motion.div 
        // animate={{
        //   x:[0,800,800,0,0],
        //   y:[0,0,300,300,0]
        // }}
        // transition={{
        //   duration:2,
        //   delay:1
        // }}

        drag
        whileDrag={{
          scale:0.8
        }}
        dragConstraints={{
          top:0,
          left:0,
          bottom:400,
          right:1000
        }}
        dragDirectionLock='true'
        className='box'>
          hello 
        </motion.div>
        <motion.div 
        animate={{x:700
        ,y:300}} 
        transition={{delay:2,duration:3}} className='circle'>

        </motion.div>
        <marquee behavior="scroll" direction="right">Ranvijay</marquee>
    </div>
  )
}

export default App