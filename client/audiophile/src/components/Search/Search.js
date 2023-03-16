import React from 'react'
import './search.css';
import Navbar from '../Navbar.js';

export default function Search() {
  return (
    <div id="search-container">
      <Navbar />
      <div id="search-wrapper">
          <h2>Search</h2>
          <input id="search-bar-input" placeholder="Find Users, Songs, Playlists, & Albums"/>
      </div>
    </div>
  )
}
