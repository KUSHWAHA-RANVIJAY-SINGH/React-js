import { useState } from "react";
import Buttoncontainer from "./components/Buttoncontainer";
import Display from "./components/Display";

function App() {

    const [calvalue, setCalvalue] = useState("");
    const onbuttonClick = (buttonclick) =>{
      if (buttonclick === 'C') {
        setCalvalue("");
      }else if( buttonclick === '='){
        const result = eval(calvalue);
        setCalvalue(result);
      }else{
        setCalvalue(calvalue + buttonclick);
      }
    }

  
 
  return (
    <center>
      <div className="border border-black w-80 p-6 m-10">
       
          <Display calvalue ={calvalue} ></Display>
          <Buttoncontainer onbuttonClick ={onbuttonClick} />
      </div>
    </center>
  );
}

export default App;
