import React, { useState, useEffect } from 'react'
import './search.css';
import Navbar from '../Navbar.js';
import AudioPlayer from '../AudioPlayer';

export default function Search() {

const [searchTerm, setSearchTerm] = useState('');

useEffect(() => {
  fetch(`http://localhost:3000/search/${searchTerm}`)
  .then(res => res.json()).then(console.log)
},[searchTerm])
  
  return (
    <div id="search-container">
      <Navbar />
      <div id="search-wrapper">
          <h2>Search</h2>
          <input id="search-bar-input" placeholder="Find Users, Songs, Playlists, & Albums" onChange={(e) => setSearchTerm(e.target.value)}/>
          <section>
            <h4>Users</h4>
          </section>
          <section>
            <h4>Songs</h4>
          </section>
          <section>
            <h4>Albums</h4>
          </section>
          <section>
            <h4>Playlists</h4>
          </section>
          <div className="audio-player-container">
                <AudioPlayer />
          </div>
      </div>
    </div>
  )
}
