import React, {useEffect, useState, useContext } from 'react'
import './music.css';
import Navbar from '../Navbar';
import AudioPlayer from '../AudioPlayer';
import SongList from '../SongList';
import { UserContext } from "../../context/user";

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

  // initialize User Context
  const { userState, setUserState } = useContext(UserContext);
  
  useEffect(() => {
    fetch(`http://localhost:3000/users/${userState.username}/likes`)
    .then(res => res.json()).then(obj => setSongs(obj))
  },[])

  console.log(songs);
  return (
    <div id="music-page-container">
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
    </div>
  )
}
