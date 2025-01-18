import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Projects from './pages/Product'
import { Routes,Route } from 'react-router-dom'
function App() {

  return (
    <div className='text-center '>
    
      <Navbar/>
      <Routes >
      <Route path='/' element={<Home/>}/>
      <Route path='/Product' element={<Projects/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/About' element={<About/>} />
</Routes>
    </div>
  )
}

export default App
