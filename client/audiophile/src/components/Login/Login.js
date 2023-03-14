import React from 'react'
import './login.css';

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
                </form>
            </div>
        </div>
    </div>
  )
}
