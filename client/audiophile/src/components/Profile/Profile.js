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
  const [albums, setAlbums] = useState([]);
  const [playlists, setPlaylists] = useState([]);
  const [image, setImage] = useState(null);
  const [pageState, setPageState] = useState(1);
  
  console.log(playlists)
  useEffect(() => {
    fetch(`http://localhost:3000/users/${username}`)
    .then(res => res.json()).then((obj)=> {
      setUser(obj)
      setSongs(obj.songs)
      setPlaylists(obj.playlists)
      setAlbums(obj.albums)
      setImage(obj.image_url)
    }
      );  
  }, [])

  const renderPage = () => {
    if (pageState === 1) {
      return <PSongs songs={songs}/>
    } else if (pageState === 2) {
     return <PAlbums albums={albums}/>
    } else if (pageState === 3) {
      return <PPlaylists playlists={playlists}/>
    }
  }

  const checkIfPfpAvailable = () => {
    if (image !== null) {
      return true
    } else {
      return false
    }
  }


  return (
    <div id="profile-page-container">
        <Navbar />
        <div id="profile-wrapper">
            <div id="profile-hdr">
              <img id="pfp-profile" src={checkIfPfpAvailable ? image : "https://place-hold.it/100"} />
              <div id="name-wrapper">
                <h2>{user.name}</h2>
                <h4>@{user.username}</h4>
              </div>
            </div>
            <div id="btn-cluster-profile">
                <button onClick={() => setPageState(1)}>Songs</button>
                <button onClick={() => setPageState(2)}>Albums</button>
                <button onClick={() => setPageState(3)}>Playlist</button>
            </div>
            <div id="profile-content-container">
                {renderPage()}
              <div className="audio-player-container">
                <AudioPlayer />
              </div>
            </div>
        </div>
    </div>
  )
}
