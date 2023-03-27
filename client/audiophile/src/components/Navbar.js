import React, { useState, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { UserContext } from "../context/user";
import './navbar.css';

/**
 * Component for showing the navigation bar
 *
 * @component
 * @example
 * return (
 *   <Navbar />
 * )
 */

export default function Navbar() {

    //initialize navigation
    const navigate = useNavigate();

    // initialize User Context
    const { userState, setUserState } = useContext(UserContext);


    useEffect(() => { 
      checkPageState();
    },[]);

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

    const [homeState, setHomeState] = useState(false)
    const [searchState, setSearchState] = useState(false)
    const [musicState, setMusicState] = useState(false)
    const [settingsState, setSettingsState] = useState(false)
    const [createState, setCreateState] = useState(false)
    const [profileState, setProfileState] = useState(false)

    const checkPageState = () => {
      if (userState.page === 'home') {
       setHomeState(true)
      }
      if (userState.page === 'Search') {
        setSearchState(true)
      }
      if (userState.page === 'Music') {
        setMusicState(true)
      }
      if (userState.page === 'Settings') {
        setSettingsState(true)
      }
      if (userState.page === 'Profile') {
        setProfileState(true)
      }
      if (userState.page === 'Create') {
        setCreateState(true)
      }
    }

  return (
    <div id="navbar-container">
        <div id="nav-top-wrapper">
            <button id="nav-btn" className="nav-btn" onClick={() => navigate('/create')}>Create</button>
        </div>
        <div id="nav-mid-wrapper">
            <button name="home"  id="nav-btn" className={homeState ? "active" : null }onClick={() => navigate('/home')}>Home</button>
            <button name="search" className="nav-btn" id="nav-btn" onClick={() => navigate('/search')}>Search</button>
            <button name="music" className="nav-btn" id="nav-btn" onClick={() => navigate('/music')}>Music</button>
            <button name="profile"className="nav-btn" id="nav-btn" onClick={() => navigate(`/profile/${userState.username}`)}>Profile</button>
            <button name="settings" className="nav-btn" id="nav-btn" onClick={() => navigate('/settings')}>Settings</button>
        </div>
        <div id="nav-btm-wrapper">
         <button onClick={handleLogout} id="nav-btn">Logout</button>
        </div>
    </div>
  )
}
