import React, { useState } from 'react'
import './LoginFrom.css';
import { FaRegUserCircle } from "react-icons/fa";
import { CiLock , CiMail} from "react-icons/ci";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";


const LoginForm = () => {

    const [action , setAction] = useState("Login");
  return (
    <div className = 'wrapper'>
        <form action = "">
            <h1>{action}</h1>

            {action ==="Login"?<div></div>: <div className = "input-box">
                <input type = "text" placeholder='Name' required />
                <MdOutlineDriveFileRenameOutline  className='icon'/>
            </div> }
           {action==="Login"?<div></div>:
            <div className = "input-box">
                <input type = "email" placeholder='Mail' required />
                <CiMail  className='icon'/>
            </div>}
            

            

            <div className = "input-box">
                <input type = "text" placeholder='Username' required />
                <FaRegUserCircle className='icon'/>
            </div>

            

            <div className = "input-box">
                <input type = "password" placeholder='Password' required />
                <CiLock className='icon'/>
            </div>

            {action==="Sign Up"?<div></div>:<div className = "remember-forgot">
                <lable>
                    <input type='checkbox' />Remember me</lable>
                    <a href='#'>Forgot Password? </a>
            </div>}

            

            <button type = {action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</button>

            {action==="Sign Up"?<div className='register-link'>Already have an account? <a href='#'>Login</a></div>: <div className = {action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>
                <p>Don't have an account? <a href='#'>Sign Up</a></p>
            </div>}

            

        </form>

    </div>
  );
};

export default LoginForm;