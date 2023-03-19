import React, { useEffect, useState } from 'react'
import './profile.css';
import Navbar from '../Navbar';
import PSongs from './PSongs';
import { useParams } from 'react-router-dom';
import AudioPlayer from '../AudioPlayer';

export default function Profile() {
  let { username } = useParams();
  const [user, setUser] = useState([]);
  const [songs, setSongs] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/users/${username}`)
    .then(res => res.json()).then((obj)=> setUser(obj));

    fetch(`http://localhost:3000/users/${username}/songs`)
    .then(res => res.json()).then((obj)=> setSongs(obj));

    fetch(`http://localhost:3000/users/${username}/albums`)
    .then(res => res.json()).then((obj)=> setAlbums(obj));

    fetch(`http://localhost:3000/users/${username}/playlists`)
    .then(res => res.json()).then((obj)=> setPlaylists(obj));    
  }, [])

  return (
    <div id="profile-page-container">
        <Navbar />
        <div id="profile-wrapper">
            <div id="profile-hdr">
              <img id="pfp-profile" src="https://place-hold.it/150x150" />
              <div id="name-wrapper">
                <h2>{user.name}</h2>
                <h4>@{user.username}</h4>
              </div>
            </div>
            <div id="btn-cluster-profile">
                <button>Songs</button>
                <button>Albums</button>
                <button>Playlist</button>
            </div>
            <div id="profile-content-container">
              <PSongs songs={songs}/>
              <div className="audio-player-container">
                <AudioPlayer />
              </div>
            </div>

        </div>
    </div>
  )
}
