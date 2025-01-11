import React ,{useState,useEffect} from 'react'

function CleanUp() {
    const [widthcount, setWidthCount] = useState(window.screen.width);

    const currentWidth = () =>{
        setWidthCount(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener("resize", currentWidth);
        return ()=>{
            window.removeEventListener("resize", currentWidth);
        }
    })
  return (
    <div>
        <h1>The Size of Window is <span>{widthcount}</span></h1>
    </div>
  )
}

export default CleanUp