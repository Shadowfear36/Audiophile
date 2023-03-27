import React, { useState, useContext } from 'react'
import './createpage.css';
import AudioUploadForm from '../AudioUploadForm';
import Navbar from '../Navbar';
import HomeCard from '../Home/HomeCard';
import CAlbums from './CAlbums';
import CSongs from './CSongs';
import CPlaylists from './CPlaylists';
import { UserContext } from "../../context/user";
import { useNavigate } from 'react-router-dom';

/**
 * Component for showing create form for Songs, Albums, and Playlists.
 *
 * @component
 * @example
 * return (
 *   <CreatePage />
 * )
 */

export default function CreatePage() {

  const navigate = useNavigate();

  // initialize User Context
  const { userState, setUserState } = useContext(UserContext);

  const [pageState, setPageState] = useState(1)

  const renderPage = () => {
    if (pageState === 1) {
      return <CSongs />
    } else if (pageState === 2) {
     return <CAlbums />
    } else if (pageState === 3) {
      return <CPlaylists />
    }
  }


  return (
    userState.isLoggedIn ? <div id="create-page-container">
      <Navbar />
      <div id="create-wrapper">
        <div id="btn-wrapper-create">
          <button onClick={() => setPageState(1)}>Songs</button>
          <button onClick={() => setPageState(2)}>Albums</button>
          <button onClick={() => setPageState(3)}>Playlist</button>
        </div>
        {renderPage()}
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
