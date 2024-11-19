import React,{useState} from 'react'
function Display({setupSpeechRecognition,listening}) {
    
  return (
    <div className="p-16 bg-slate-950 text-white flex justify-center items-center w-96 flex-col border rounded-xl bg-center m-56">
<h1>Your AI Assistant</h1>
<p>Press the button and say a command (e.g.,"Open Youtube")</p>
<button id="listen-btn" className="m-2" onClick={setupSpeechRecognition}> {listening ? "Listening...👂" : "🎙️ Start Listening"}</button>      
</div>
  )
}

export default Display