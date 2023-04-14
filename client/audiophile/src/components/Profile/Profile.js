import React, { useEffect, useState, useContext } from 'react'
import './profile.css';
import Navbar from '../Navbar';
import PSongs from './PSongs';
import { useParams } from 'react-router-dom';
import AudioPlayer from '../AudioPlayer';
import PAlbums from './PAlbums';
import PPlaylists from './PPlaylists';
import { UserContext } from '../../context/user';
import { useNavigate } from 'react-router-dom';

/**
 * Component for showing details of the users profile or other users profiles.
 *
 * @component
 * @example
 * return (
 *   <Profile />
 * )
 */

export default function Profile() {
  let { username } = useParams();
  const [user, setUser] = useState([]);
  const [songs, setSongs] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [playlists, setPlaylists] = useState([]);
  const [image, setImage] = useState(null);
  const [pageState, setPageState] = useState(1);

  const { userState, setUserState } = useContext(UserContext);
  
  const navigate = useNavigate();


  useEffect(() => {
    fetch(`/api/users/${username}`)
    .then(res => res.json()).then((obj)=> {
      setUser(obj)
      setSongs(obj.songs)
      setPlaylists(obj.playlists)
      setAlbums(obj.albums)
      setImage(obj.image_url)
      console.log(obj)
    }
      );  
  }, [])

  const [psongs, setPSongs] = useState(false);
  const [palbums, setPAlbums] = useState(false);
  const [pplaylist, setPPlaylists] = useState(false);

  useEffect(() => {
    if (pageState === 1) {
      setPSongs(true);
      setPAlbums(false);
      setPPlaylists(false);
    } else if (pageState === 2) {
      setPSongs(false);
      setPAlbums(true);
      setPPlaylists(false);
    } else if (pageState === 3) {
      setPSongs(false);
      setPAlbums(false);
      setPPlaylists(true);
    }
  }, [pageState])

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
    userState.isLoggedIn ? <div id="profile-page-container">
        <Navbar page={"profile"}/>
        <div id="profile-wrapper">
            <div id="profile-hdr">
              <img id="pfp-profile" src={checkIfPfpAvailable ? image : "https://place-hold.it/100"} />
              <div id="name-wrapper">
                <h2>{user.name}</h2>
                <h4>@{user.username}</h4>
              </div>
            </div>
            <div id="btn-cluster-profile">
                <button className={psongs ? "active" : null} onClick={() => setPageState(1)}>Songs</button>
                <button className={palbums ? "active" : null} onClick={() => setPageState(2)}>Albums</button>
                <button className={pplaylist ? "active" : null} onClick={() => setPageState(3)}>Playlist</button>
            </div>
            <div id="profile-content-container">
                {renderPage()}
              <div className="audio-player-container">
                <AudioPlayer />
              </div>
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
