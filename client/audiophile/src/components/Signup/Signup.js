import React from 'react';
import './signup.css';
import { NavLink } from 'react-router-dom';

export default function Signup() {
  return (
    <div id="signup-container">
        <div id="login-bg">
            <h1 className="logo">AudioPhile</h1>
            <div id="signup-form-container">
                <h3>Sign Up</h3>
                <form id="signup-form">
                    <label for="name">Name</label>
                    <input type="text" name="name"/>
                    <label for="username">Username</label>
                    <input type="text" name="username"/>
                    <label for="email">Email</label>
                    <input type="text" name="email"/>
                    <button type="submit">Next</button>
                    <NavLink to="/"><h5>Already Have An Account? </h5></NavLink>
                </form>
            </div>
        </div>
    </div>
  )
}
