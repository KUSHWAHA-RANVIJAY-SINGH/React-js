import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import SignUp from './components/SignUp'
import Login from './components/Login'
import Home from './components/Home'
import Navbar from './components/Navbar'

function App() {

  return (
    <div className='main'>

   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Navbar/>}>
      <Route index element={<SignUp />} />
      <Route path='login' element={<Login/>} />
      <Route path='home' element={<Home/>} />
   </Route>
    </Routes>
   </BrowserRouter>
   </div>

  )
}

export default App
