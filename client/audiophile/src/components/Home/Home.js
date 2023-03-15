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
            <HomeCard/>
        {/* <AudioPlayer src="https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3"/> */}
        </div>
    </div>
  )
}
