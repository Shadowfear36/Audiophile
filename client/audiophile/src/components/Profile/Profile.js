import React, { useEffect, useState } from 'react'
import './profile.css';
import Navbar from '../Navbar';
import PSongs from './PSongs';
import { useParams } from 'react-router-dom';
import AudioPlayer from '../AudioPlayer';
import PAlbums from './PAlbums';
import PPlaylists from './PPlaylists';

export default function Profile() {
  let { username } = useParams();
  const [user, setUser] = useState([]);
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/users/${username}`)
    .then(res => res.json()).then((obj)=> {
      setUser(obj)
      setSongs(obj.songs)
    }
      );  
  }, [])


  return (
    <div id="profile-page-container">
        <Navbar />
        <div id="profile-wrapper">
            <div id="profile-hdr">
              <img id="pfp-profile" src="https://place-hold.it/150" />
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
              {/* <PAlbums albums={user.albums}/> */}
              {/* <PPlaylists playlists={user.playlists}/> */}
              <div className="audio-player-container">
                <AudioPlayer />
              </div>
            </div>
        </div>
    </div>
  )
}
