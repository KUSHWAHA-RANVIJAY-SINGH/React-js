import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Fetch_data from './components/Fetch_data'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Fetch_data/>
    </>
  )
}

export default App
