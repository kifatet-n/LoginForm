import React, { useState } from "react";
import InputField from "./InputField";
import Checkbox from "./Checkbox";
import "./styles.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessages, setErrorMessages] = useState({});
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("login duymesine basildi");
    let errors = {};
    //email yoxlanisi
    if (!email.includes("@")) {
      errors.email = "Email duzgun deyil! '@' isaresinden istifade etmelisen";
    }
    //password yoxlanisi
    if (password.length < 6) {
      errors.password = "Sifre en azi 6 simvol olmalidir!";
    }
    console.log("Errors:", errors);
    //Eger error varsa onlari goster
    setErrorMessages(errors);

    if (Object.keys(errors).length === 0) {
      console.log("giris ugurlu oldu");
    }
  };

  return (
    <div className="login-container">
      <button className="logo-btn">Logo</button>
      <h2>Log In</h2>
      <p>Enter your login details</p>
      <form onSubmit={handleSubmit}>
        <InputField
          label="Email"
          type="email"
          value={email}
          OnChange={handleEmailChange}
          error={errorMessages.email}
          placeholder="Enter your email"
        />
        {/* {errorMessages.email && <p>{errorMessages.email}</p>} */}
        <InputField
          label="Password"
          type="password"
          value={password}
          OnChange={handlePasswordChange}
          error={errorMessages.password}
          placeholder="Enter your password"
        />
        {/* {errorMessages.password && <p>{errorMessages.password}</p>} */}
        <div className="options">
          <Checkbox label="Remember Me" />
          <a href="#">Forgot Password?</a>
        </div>
        <button type="submit">Log In</button>
      </form>
      <p>Guide book</p>
      <p>
        Dont have an account?<a href="#">Sign Up</a>
      </p>
    </div>
  );
};

export default Login;
