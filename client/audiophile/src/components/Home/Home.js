import React from 'react'
import './home.css';
import AudioPlayer from '../AudioPlayer'
import Navbar from '../Navbar.js';
import HomeCard from './HomeCard'

export default function Home() {
  return (
    <div id="home-container">
        <Navbar/>
        <div id="home-wrapper">
            {/* <HomeCard/> */}
            <div className="audio-player-container">
                <AudioPlayer />
            </div>
        </div>
    </div>
  )
}
