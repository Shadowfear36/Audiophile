import React from 'react'
import './createpage.css';
import AudioUploadForm from '../AudioUploadForm';
import Navbar from '../Navbar';
import HomeCard from '../Home/HomeCard';

export default function CreatePage() {
  return (
    <div id="create-page-container">
      <Navbar />
      <div id="create-wrapper">
        <div id="btn-wrapper-create">
          <button>Songs</button>
          <button>Albums</button>
          <button>Playlist</button>
        </div>
        <HomeCard />
        {/* add logic to display content */}
      </div>
    </div>
  )
}
