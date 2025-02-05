import React from 'react'
import '../App.css'
import { useNavigate } from 'react-router-dom'
function Login() {
    const navigate =useNavigate();

    const handleSignUpClick =()=>{
        navigate('/signup');
    }
  return (
    <div className='login-con'>
        <div className='login-text'>
            <button>Login</button>
            <button onClick={handleSignUpClick}>Sign Up</button>
        </div>
        <div>
        <h3 className='textupper'>Login Page</h3>
        <div className='login'>
            UserName : <input type="text" />
            Password : <input type="text" name="" id="pass" />
            <button>Login</button>
        </div>
        </div>
        
    </div>
  )
}

export default Login