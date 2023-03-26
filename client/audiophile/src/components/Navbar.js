import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { UserContext } from "../context/user";
import './navbar.css';

export default function () {

    //initialize navigation
    const navigate = useNavigate();

    // initialize User Context
    const { userState, setUserState } = useContext(UserContext);

    // //page state for .active button class
    // const [activeState, setActiveState] = useState({active: "home"})

    const handleLogout = () => {
      fetch('http://localhost:3000/logout', {
        method: 'POST',
        headers:{
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({user_id: userState.user_id})
      }).then(res => res.json()).then(console.log).then(() => {
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
        
      })
    }

  return (
    <div id="navbar-container">
        <div id="nav-top-wrapper">
            <button className="nav-btn" onClick={() => navigate('/create')}>Create</button>
        </div>
        <div id="nav-mid-wrapper">
            <button name="home" className="nav-btn" onClick={() => navigate('/home')}>Home</button>
            <button name="search" className="nav-btn" onClick={() => navigate('/search')}>Search</button>
            <button name="music" className="nav-btn" onClick={() => navigate('/music')}>Music</button>
            <button name="profile"className="nav-btn" onClick={() => navigate(`/profile/${userState.username}`)}>Profile</button>
            <button name="settings" className="nav-btn" onClick={() => navigate('/settings')}>Settings</button>
        </div>
        <div id="nav-btm-wrapper">
         <button onClick={handleLogout} className="nav-btn">Logout</button>
        </div>
    </div>
  )
}
