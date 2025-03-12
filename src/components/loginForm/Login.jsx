import React from 'react'
import InputField from './InputField';
import Checkbox from './Checkbox';
import Button from './Button';
import "./styles.css";


const Login = () => {
    const handleSubmit =(event)=>{
        event.preventDefault();
        console.log("Form submitted!");
    };
    

  return (
    <div className="login-container">
        <button className="logo-btn">Logo</button>
        <h2>Log In</h2>
        <p>Enter your login details</p>
        <form onSubmit={handleSubmit}>
            

            <InputField label="Email" type="email" placeholder="Enter your email" />
            
            <InputField label="Password" type="password" placeholder="Enter your password"/>
            <div className="options">
                <Checkbox label="Remember Me"/>
                <a href="#">Forgot Password?</a>
            </div>
            <Button text="Log In"/>
        </form>
        <p>Guide book</p>
        <p>
            Dont have an account?<a href="#">Sign Up</a>
        </p>

    </div>
  );
};

export default Login;