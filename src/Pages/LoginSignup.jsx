import React from "react";
import "./CSS/LoginSignup.css";



function LoginSignup() {
    const and = "&";
    return(
        <div className="login-signup">
            <form className="login-signup-form">
                <h1>Sign Up</h1>
                <input type='text' placeholder='Your Name' />
                <input type='email' placeholder='Email Address' />
                <input type='password' placeholder='Password' />
                <button>continue</button>
            </form>
            <p>Already have an account? <span>Login here</span></p>
            <div className="login-signup-agree">
                <input type='checkbox' name="" id="" />
                <p>By continuing, I agree to the terms of use {and} privacy policy.</p>
            </div>
        </div>
    )
}

export default LoginSignup;