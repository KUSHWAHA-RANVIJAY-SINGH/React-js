import React, { useState } from 'react'

function Random_color_gen() {
 const [typeofColor, setTypeofColor] = useState('hex')
  const [color, setColor] = useState('')

  const generateColor = () => {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16)
    setColor(randomColor)
  }

  function UtilityColor(length){
    return Math.floor(Math.random()*length);
  }
    const handleHexColor = () => {
        const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
        let hexColor = '#';
        for(let i =0 ;i<6;i++){
            hexColor += hex[UtilityColor(hex.length)];
        }
        setColor(hexColor);
        setTypeofColor('hex');
    }

    const handleRGBColor = () => {
        const r = UtilityColor(256);
        const g = UtilityColor(256);
        const b = UtilityColor(256);
        const rgbColor = `rgb(${r}, ${g}, ${b})`;
        setColor(rgbColor);
        setTypeofColor('rgb');
    }   

  return (
    <div style={{ textAlign: 'center', marginTop: '20px',  height: '100vh',width: '100vw', backgroundColor: color }}>
     <button onClick={() => handleHexColor()}>Create a Hex Color</button>
     <button onClick={() => handleRGBColor()}>Create a RGB Color</button>
        <button onClick={() => generateColor()}>Generate Random Color</button>
        <div style={{
            marginTop: '49px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <h3>{color}</h3>
            <h3>Type of Color: {typeofColor}</h3>

        </div>
    </div>
  )
}

export default Random_color_gen 