 import React from "react";
import "./LoginForm.css";

import { MdOutlineEmail } from "react-icons/md";
import { LuLockKeyhole } from "react-icons/lu";

const LoginForm = () => {
  return (
    <div className="wrapper">
      <form action="">
        <button>Logo</button>
        <h1>Log In</h1>
        <p>Enter your login details</p>
        <div className="input-box">
          <p>Email</p>
          <MdOutlineEmail className="icon" />

          <input type="text" placeholder="Enter your email" required />
        </div>
        <div className="input-box">
          <p>Password</p>
          <LuLockKeyhole className="icon" />

          <input type="text" placeholder="Enter your password" />
        </div>
        <div className="remember-forgot">
          <label htmlFor="">
            <input type="checkbox" />
            Remember me
          </label>
          <a href="#">Forgot password?</a>
        </div>
        <button type="submit">Log In</button>
        <p>Guide Book</p>
        <div className="registr-link">
          <p>
            Don't have an account?<a href="#">Sign Up</a>
          </p>
        </div>

      </form>
    </div>
  );
};

export default LoginForm;
