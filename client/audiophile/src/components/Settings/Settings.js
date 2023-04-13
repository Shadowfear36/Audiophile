import React, { useState, useEffect, useContext } from 'react'
import './settings.css';
import Navbar from '../Navbar';
import { UserContext } from "../../context/user";
import AudioPlayer from '../AudioPlayer';
import {useNavigate } from 'react-router-dom';

/**
 * Component for showing Settings Page
 *
 * @component
 * @example
 * return (
 *   <Settings />
 * )
 */

export default function Settings() {

  // initialize User Context
  const { userState, setUserState } = useContext(UserContext);

  //initialize navigation
  const navigate = useNavigate();
  
  const initialFormState = {
    name: userState.name,
    email: userState.email,
    username: userState.username,
    password: '',
    password_confirmation: '12345678',
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

  const handleDeleteAcc = (e) => {
    e.preventDefault();
    fetch(`api/users/${userState.user_id}`, {
      method: 'DELETE',
      headers:{
        'Content-Type': 'application/json'
    }
    }).then(res => res.json()).then((obj)=> {
      console.log(obj);
      setUserState({
        isLoggedIn: false,
        user_id: '',
        page: '',
        name: '',
        username: '',
        email: '',
        age: '',
        gender: '',
        password_digest: '',
        user_type: '',
        currentSong: [],
        queue: []
      })
      navigate('/')
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`api/users/${userState.user_id}`, {
      method: "PATCH",
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formState)
    }).then(res => res.json()).then(console.log)
  }

  const [imageData, setImageData] = useState(null);
  console.log(imageData);
  const handleUpload = async (e) => {
    e.preventDefault();

    const formData = new FormData()
    formData.append('image', imageData)

    console.log(formData);

    fetch(`api/users/${userState.user_id}`, {
      method: 'PATCH',
      body: formData
    }).then(res => res.json()).then(obj => console.log(obj))
  };

  return (
    userState.isLoggedIn ? <div id="settings-page-container">
      <Navbar page={"settings"}/>
      <div id="settings-container">
        <h2>Settings</h2>
        <input type="file" accept="image/*" id="file" name="image" onChange={(e) => setImageData(e.target.files[0])}/>
        <button onClick={handleUpload}>Upload</button>
        <form id="settings-form" onSubmit={(e) => handleSubmit(e)}>
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
        <button onClick={handleDeleteAcc}id="dlt-act">Delete Account</button>
      <div className="audio-player-container">
                <AudioPlayer />
      </div>
      </div>
    </div> : <div id="notloggedIn">
      <div>
        <h1>Audiophile</h1>
      </div>
      <div id="log-container">
        <h2>Uhh Ohh</h2>
        <p>You are not logged in. Please Log In Or Sign Up.</p>
        <div id="btn-log">
          <button onClick={() => navigate('/')}>Login</button>
          <button onClick={() => navigate('/signup')}>Sign Up</button>
        </div>
      </div>
    </div>
  )
}
