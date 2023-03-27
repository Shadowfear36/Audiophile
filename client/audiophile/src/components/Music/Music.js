import React, {useEffect, useState, useContext } from 'react'
import './music.css';
import Navbar from '../Navbar';
import AudioPlayer from '../AudioPlayer';
import SongList from '../SongList';
import { UserContext } from "../../context/user";
import { useNavigate } from 'react-router-dom';
/**
 * Component for showing Users Liked Music
 *
 * @component
 * @example
 * return (
 *   <Music />
 * )
 */

export default function Music() {
  const [songs, setSongs] = useState([]);

  const navigate = useNavigate();

  // initialize User Context
  const { userState, setUserState } = useContext(UserContext);
  
  useEffect(() => {
    fetch(`http://localhost:3000/users/${userState.username}/likes`)
    .then(res => res.json()).then(obj => setSongs(obj))
  },[])

  console.log(songs);
  return (
    userState.isLoggedIn ? <div id="music-page-container">
      <Navbar/>
      <div id="music-page-wrapper">
        <h2>Liked Songs</h2>
        <div id="song-list-cont">
          <div id="song-list-wrapper">
            <SongList songs={songs} full={true}/>
          </div>
        </div>
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
