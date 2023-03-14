import React from 'react'
import './login.css';
import { NavLink } from 'react-router-dom';

export default function Login() {
  return (
    <div id="login-container">
        <div id="login-bg">
            <h1 className="logo" >AudioPhile</h1>
            <div id="login-form-container">
                <h3>Welcome Back</h3>
                <form id="login-form">
                    <label for="email">Email</label>
                    <input name="email" type="text"/>
                    <label for="password">Password</label>
                    <input name="password"type="text"/>
                    <button type="submit">Login</button>
                    <NavLink to="/signup"><h5>Not Signed Up? </h5></NavLink>
                </form>
            </div>
        </div>
    </div>
  )
}
