import React from 'react'
import './home.css';
import AudioPlayer from '../AudioPlayer'

export default function Home() {
  return (
    <div id="home-container">
        <AudioPlayer src="https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3"/>
    </div>
  )
}
