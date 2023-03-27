import React, { useState } from 'react'
import './createpage.css';
import AudioUploadForm from '../AudioUploadForm';
import Navbar from '../Navbar';
import HomeCard from '../Home/HomeCard';
import CAlbums from './CAlbums';
import CSongs from './CSongs';
import CPlaylists from './CPlaylists';

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
    <div id="create-page-container">
      <Navbar />
      <div id="create-wrapper">
        <div id="btn-wrapper-create">
          <button onClick={() => setPageState(1)}>Songs</button>
          <button onClick={() => setPageState(2)}>Albums</button>
          <button onClick={() => setPageState(3)}>Playlist</button>
        </div>
        {renderPage()}
      </div>
    </div>
  )
}
