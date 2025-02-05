// SignUp.js  
import React from 'react';  
import {  useNavigate } from 'react-router-dom';

function SignUp() {  
    const navigate = useNavigate();
    const handleLoginupclick = ()=>{
        navigate('/login')
    }
  return (  
    <div className='login-con'>
        <div className='login-text'>
            <button onClick={handleLoginupclick}>Login</button>
            <button >Sign Up</button>
        </div>
        <div className='login'>
            UserName  <input type="text" />
            Password  <input type="text" name="" id="pass" />
            Confirm Pass  <input type="text" />
            Email <input type="text" />
            <button >Sign Up</button>
        </div>
    </div>
  );  
}  

export default SignUp;