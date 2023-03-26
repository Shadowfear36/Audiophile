import React from 'react'
import '../Home/homecard.css';
import SongList from '../SongList';

export default function SongCard(props) {
  return (
    <div id="home-card-container">
      <div id="card-details">
        <h6>@{props.artist}</h6>
        <h6>Creating</h6>
      </div>
      <div id="home-card-wrapper">
        <img src="https://place-hold.it/200"/>
        <div id="card-info-display">
            <div id="info-top">
              <div id="artist-info">
                <h3>Song Name</h3>
                <h5>Artist Username</h5>
              </div>
              <div id="card-social-btns">
                <button>Comments</button>
                <button>Likes</button>
              </div>
            </div>
            <div id="card-song-container">
              <h5>Single</h5>
              {/* <SongList songs={songs}/> */}
            </div>
        </div>
      </div>
    </div>
  )
}
