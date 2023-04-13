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

export default function Navbar({ page }) {

    //initialize navigation
    const navigate = useNavigate();

    // initialize User Context
    const { userState, setUserState } = useContext(UserContext);

    const handleLogout = () => {
      fetch('api/logout', {
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
    useEffect(() => {
      if (page !== undefined) {
        if (page === "home") {
          setHomeState(true)
        }
        if (page === "search") {
          setSearchState(true)
        }
        if (page === 'music') {
          setMusicState(true)
        }
        if (page === 'profile') {
          setProfileState(true)
        }
        if (page === 'settings') {
          setSettingsState(true)
        }
        if (page === 'create') {
          setCreateState(true)
        }
      }
    })

  return (
    <div id="navbar-container">
        <div id="nav-top-wrapper">
            <button id="nav-btn" className={createState ? "active" : null} onClick={() => navigate('/create')}>Create</button>
        </div>
        <div id="nav-mid-wrapper">
            <button name="home"  id="nav-btn" className={homeState ? "active" : null }onClick={() => navigate('/home')}>Home</button>
            <button name="search" className={searchState ? "active" : null} id="nav-btn" onClick={() => navigate('/search')}>Search</button>
            <button name="music" className={musicState ? "active" : null} id="nav-btn" onClick={() => navigate('/music')}>Music</button>
            <button name="profile"className={profileState ? "active" : null} id="nav-btn" onClick={() => navigate(`/profile/${userState.username}`)}>Profile</button>
            <button name="settings" className={settingsState ? "active" : null} id="nav-btn" onClick={() => navigate('/settings')}>Settings</button>
        </div>
        <div id="nav-btm-wrapper">
         <button onClick={handleLogout} id="nav-btn">Logout</button>
        </div>
    </div>
  )
}
