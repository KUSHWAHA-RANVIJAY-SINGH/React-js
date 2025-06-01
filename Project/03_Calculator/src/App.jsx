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
     <h1 className="font-bold text-4xl mt-10">Calculator</h1>
      <div className="border border-black w-80 p-6 m-10">
       
          <Display calvalue ={calvalue} ></Display>
          <Buttoncontainer onbuttonClick ={onbuttonClick} />
      </div>
      <footer className="fixed bottom-0 w-full bg-slate-400 p-4 text-center ">
        <p className="text-[#f2e9e4] text-xl mt-4">Made with ❤️ by <a href="https://github.com/KUSHWAHA-RANVIJAY-SINGH" target="_blank" rel="noopener noreferrer">Ranvijay Singh</a></p>
      </footer>
    </center>
  );
}

export default App;
