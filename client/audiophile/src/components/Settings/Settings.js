import React, { useState, useEffect, useContext } from 'react'
import './settings.css';
import Navbar from '../Navbar';
import { UserContext } from "../../context/user";
import AudioPlayer from '../AudioPlayer';
export default function Settings() {

  // initialize User Context
  const { userState, setUserState } = useContext(UserContext);
  
  const initialFormState = {
    name: userState.name,
    email: userState.email,
    username: userState.username,
    password: '',
    password_confirmation: '',
    age: userState.age,
    gender: userState.gender,
    user_type: userState.user_type,
  }

  //initialize form state
  const [formState, setFormState] = useState(initialFormState);
  
  // handle form input Change
  const handleChange = (e) => {
    setFormState({...formState, [e.target.name]: e.target.value});
  }

  return (
    <div id="settings-page-container">
      <Navbar/>
      <div id="settings-container">
        <h2>Settings</h2>
        <form id="settings-form">
          <label for="name">Name</label>
          <input type="text" name="name" value={formState.name} onChange={handleChange} />
          <label for="username">Username</label>
          <input type="text" name="username" value={formState.username} onChange={handleChange}/>
          <label for="email">Email</label>
          <input name="email" onChange={handleChange} type="text" value={formState.email}/>
          <label for="age">Age</label>
          <input id="num-inp2" type="number" name="age" min={0} onChange={handleChange} value={formState.age} />
          <label for="password">Password</label>
          <input name="password" onChange={handleChange} type="text" value={formState.password}/>
          <button id="settings-btn" type="submit">Save</button>
        </form>
        <button id="dlt-act">Delete Account</button>
      <div className="audio-player-container">
                <AudioPlayer />
      </div>
      </div>
    </div>
  )
}
