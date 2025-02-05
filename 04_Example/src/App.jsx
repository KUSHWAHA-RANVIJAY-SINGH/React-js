import './App.css'
import { BrowserRouter, Routes, Route, Form } from "react-router-dom";
import Home from './pages/Home'
import Contact from './pages/Contact'
import Layout from './Layout/Layout';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Login_SignUp from './pages/From/Login_SignUp';


// import ApiExam from './components/ApiExam'
// import State_example from './components/State_example'
// import Conditional from './components/Conditional'
// import { Buttononclickexample } from './components/Events_ex'
// import List from './components/List'
function App() {

  return (    
  <div className='container'>
    {/* <Buttononclickexample/>
    {/* <Conditional/> */}
    {/* <List/> */}
    {/* <State_example/> */}
    {/* <ApiExam/>  */}

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="contact" element={<Contact />} />
          <Route path="/signup" element={<SignUp />} />  
          <Route path='/form' element={<Login_SignUp/>}/>
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  </div>
  )
}

export default App
