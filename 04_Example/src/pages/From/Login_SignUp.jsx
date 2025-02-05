import React, { useState } from 'react'
import '..//../App.css'

function Login_SignUp() {
  const [islogin,setIslogin] =useState(false);
  return (
    <div className='login-con'>
    <div className='login-text'>
        <button className={islogin ? 'active' : ''} onClick={()=>setIslogin(true)}>Login</button>
        <button className={!islogin ? 'active' : ''} onClick={()=>setIslogin(false)}>Sign Up</button>
    </div>
     {islogin ?<>
      <div className='login'>
      <h2 className='textupper'>Login Page</h2>
        UserName : <input type="text" />
        Password : <input type="text" name="" id="pass" />
        <a href="#">Forgot password</a>
        <button className='logsin'>Login</button>
        <p>Not a Member & <a href="#" onClick={()=>setIslogin(false)}>Signup</a></p>

    </div>
     </>:<>
  
        <div className='login'>
        <h2 className='textupper'>SignUp Page</h2>
            UserName  <input type="text" />
            Password  <input type="text" name="" id="pass" />
            Confirm Pass  <input type="text" />
            Email <input type="text" />
            <button className='logsin'>Sign Up</button>
        </div>
     </>}
</div>
  )
}

export default Login_SignUp