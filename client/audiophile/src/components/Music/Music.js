import React from 'react'
import './music.css';
import Navbar from '../Navbar';
import AudioUploadForm from '../AudioUploadForm';
import AudioPlayer from '../AudioPlayer';
export default function Music() {
  return (
    <div id="music-page-container">
      <Navbar/>
      <div id="music-page-wrapper">
        <AudioUploadForm/>
        <div className="audio-player-container">
                <AudioPlayer />
        </div>
      </div>
    </div>
  )
}
