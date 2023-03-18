import React from 'react'
import './music.css';
import Navbar from '../Navbar';
import AudioUploadForm from '../AudioUploadForm';
export default function Music() {
  return (
    <div id="music-page-container">
      <Navbar/>
      <div id="music-page-wrapper">
        <AudioUploadForm/>
      </div>
    </div>
  )
}
