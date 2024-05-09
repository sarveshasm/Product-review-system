import React from 'react';
import './LoginPage.css';
import bit from "../assets/bit.png";
import google from "../assets/google.svg";

function LoginPage() {
  return (
    <div className="background">
      <div className="inner-container">
        <div className="welcome-logo">
          <h1>Welcome</h1>
          <img src={bit} alt="Logo" className='bit' />
        </div>
        <div className="product-portal">
          <p>Product Portal</p>
        </div>
        <div className="form-container">
          <form> 
            <input type="email" placeholder="Email" className="input-field" />
            <input type="password" placeholder="Password" className="input-field" />
            <button type="submit" className="button">Login</button>
          </form>
        </div>
        <hr />
        <div className="google-login-button">
          <button className="google-button">
            <img src={google} alt="Google Logo" className="google-logo" />
            Login with Google
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;


