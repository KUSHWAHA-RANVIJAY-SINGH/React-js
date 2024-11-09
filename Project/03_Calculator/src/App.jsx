import Buttoncontainer from "./components/Buttoncontainer";
import Display from "./components/Display";

function App() {

  const button =['C','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0','.',]
  return (
    <center>
      <div className="border border-black w-80 p-6 m-10">
       
          <Display ></Display>
          <Buttoncontainer value={button}/>
      </div>
    </center>
  );
}

export default App;
