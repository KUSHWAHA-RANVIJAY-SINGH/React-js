import React, { useState } from 'react';  
import { useNavigate } from 'react-router-dom';  

function SignUp() {  
    const navigate = useNavigate();  
    const initialUserDetails = {  
        username: '',  
        email: '',  
        password: '',  
        confirm_password: '',  
    };  

    const [formData, setFormData] = useState(initialUserDetails);  
    const [errorMessage, setErrorMessage] = useState('');  

    const handleInput = (event) => {  
        const { name, value } = event.target;  
        setFormData((prevData) => ({ ...prevData, [name]: value }));  
    };  

    const handleSignUp = (event) => {  
        event.preventDefault();  

        if (formData.password !== formData.confirm_password) {  
            setErrorMessage('Passwords do not match');  
            return;  
        } else if (formData.password === formData.confirm_password) {
            setErrorMessage('');
        }

        // Proceed with signup logic, e.g., API call  
        alert(`${formData.username} Signup successfully`); 

        // Reset form fields after signup  
        setFormData(initialUserDetails);  
    };  

    const handleLogin = (event) => {  
        event.preventDefault();  
        navigate('/login');  
    };  

    return (  
        <div className='signup'>  
            <div className='signupchild'>  
                <h1>Sign Up</h1>  
                {errorMessage && <p style={{color: 'red'}}>{errorMessage}</p>} {/* Display error message */}  
                <div className='form'>  
                    <form onSubmit={handleSignUp}>  
                        <label htmlFor="username">Username:</label><br />  
                        <input type="text" id="username" name="username" value={formData.username} onChange={handleInput} required /><br />  
                        <label htmlFor="email">Email:</label><br />  
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleInput} required /><br />  
                        <label htmlFor="password">Password:</label><br />  
                        <input type="password" id="password" name="password" value={formData.password} onChange={handleInput} required /><br />  
                        <label htmlFor="confirm_password">Confirm Password:</label><br />  
                        <input type="password" id="confirm_password" name="confirm_password" value={formData.confirm_password} onChange={handleInput} required /><br />  
                        <div>  
                            <button type="submit">Signup</button>  
                            <button type="button" onClick={handleLogin}>Login</button>  
                        </div>  
                    </form>  
                </div>  
            </div>  
        </div>  
    );  
}  

export default SignUp;
