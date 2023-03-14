import React, { useState, useEffect, useContext } from 'react'
import './login.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { UserContext } from "../../context/user";

export default function Login() {

    // initialize User Context
    const { userState, setUserState } = useContext(UserContext);

    //initialize navigation
    const navigate = useNavigate();

    //initial state of form
    const initialFormState = {
        email: '',
        password: '',
    }

    //initialize form state
    const [formState, setFormState] = useState(initialFormState);

    // handle form input Change
    const handleChange = (e) => {
        setFormState({...formState, [e.target.name]: e.target.value});
    }

    //handle updating userState after successful login
    const handleUpdate = (obj) => {
        console.log('handleUpdate input:', obj);
        if (obj && obj.id) {
            setUserState({
                isLoggedIn: true,
                user_id: obj.id,
                page: 'home',
                name: obj.name,
                username: obj.username,
                email: obj.email
              })
              navigate('/home')
        } else {
            console.error("Invalid Object Fetched:", obj);
        }
    }

    //handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:3000/login', {
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formState)
        })
        .then(res => {
            if (res.ok) {
                res.json().then(data => handleUpdate(data));
            } else {
                res.json().then(obj => console.log(obj.error));
            }
        })
        .then(handleUpdate)
    }


  return (
    <div id="login-container">
        <div id="login-bg">
            <h1 className="logo" >AudioPhile</h1>
            <div id="login-form-container">
                <h3>Welcome Back</h3>
                <form id="login-form" onSubmit={handleSubmit}>
                    <label for="email">Email</label>
                    <input name="email" onChange={handleChange} type="text" value={formState.email}/>
                    <label for="password">Password</label>
                    <input name="password" onChange={handleChange} type="text" value={formState.password}/>
                    <button type="submit">Login</button>
                    <NavLink to="/signup"><h5>Not Signed Up? </h5></NavLink>
                </form>
            </div>
        </div>
    </div>
  )
}
