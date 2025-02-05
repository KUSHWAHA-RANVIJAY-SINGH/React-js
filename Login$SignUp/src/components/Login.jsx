import React from 'react'
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const constusername = 'RanvijaySingh';
  const constpassword = '123456';
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handlesubmit = (event)=>{
    event.preventDefault();
    if(username === constusername && password === constpassword){
        navigate('/home');   
    }else{
      alert('Invalid username or password');
    }
  }

  return (
    <div>
     <div>
     </div>
     <h2 className='loginheader'>Login Page</h2>
     <div className='loginform'>
        <form className='login' onSubmit={handlesubmit}>
            <label>Username:</label>
            <input type="text" name="username" onChange={(e)=>setUsername(e.target.value)} required/>
            <br/>
            <label>Password:</label>
            <input type="password" name="password" onChange={(e)=>setPassword(e.target.value)} required/>
            <br/>
            <button type="submit">Login</button>
        </form>
     </div>
    </div>
  )
}

export default Login