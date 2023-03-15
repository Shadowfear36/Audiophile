import React from 'react'
import './homecard.css';
import SongList from '../SongList';

export default function HomeCard() {
  return (
    <div id="home-card-container">
      <div id="card-details">
        <h6>@username</h6>
        <h6>7:15 AM 12/12/23</h6>
      </div>
      <div id="home-card-wrapper">
        <img src="https://place-hold.it/200"/>
        <div id="card-info-display">
            <div id="info-top">
              <div id="artist-info">
                <h3>Album Name</h3>
                <h5>Artist Name</h5>
              </div>
              <div id="card-social-btns">
                <button>Comments</button>
                <button>Likes</button>
              </div>
            </div>
            <div id="card-song-container">
              <h5>Top 3</h5>
              <SongList/>
            </div>
        </div>
      </div>
    </div>
  )
}
