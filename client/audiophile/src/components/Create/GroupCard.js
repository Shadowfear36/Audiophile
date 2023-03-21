import React, { useState, useContext } from 'react'
import '../Home/homecard.css';
import SongList from '../SongList';
import { UserContext } from "../../context/user";

export default function ({name, songs, image}) {
        // initialize User Context
        const { userState, setUserState } = useContext(UserContext);
  return (
    <div id="home-card-container">
      <div id="card-details">
        <h6>@{userState.username}</h6>
        <h6>Creating</h6>
      </div>
      <div id="home-card-wrapper">
        <img src={image}/>
        <div id="card-info-display">
            <div id="info-top">
              <div id="artist-info">
                <h3>{name}</h3>
                <h5>{userState.username}</h5>
              </div>
              <div id="card-social-btns">
                <button>Comments</button>
                <button>Likes</button>
              </div>
            </div>
            <div id="card-song-container">
              <h5>Songs</h5>
              <SongList songs={songs}/>
            </div>
        </div>
      </div>
    </div>
  )
}
