import React, { useState, useEffect } from 'react'
import './homecard.css';
import SongList from '../SongList';

export default function HomeCard( {obj, isSong} ) {

  const [songs, setSongs] = useState([]);

  console.log(obj);

  useEffect(() => {
    if (obj.songs !== undefined && obj.songs.length - 1 >=3) {
      setSongs([obj.songs[0], obj.songs[1], obj.songs[2]]);
    } else {
      setSongs([obj])
    }
  }, []);
  console.log(obj.image_url);
  const checkImageUrl = () => {
    if (obj.image_url !=+ null) {
      console.log("true");
      return true
    } else {
      return false;
    }
  }

  const placeholderURL = "https://place-hold.it/200";

  return (
    <div id="home-card-container">
      <div id="card-details">
        <h6>@{obj.artist}</h6>
        <h6>{obj.created_at}</h6>
      </div>
      <div id="home-card-wrapper">
        <img src={checkImageUrl ? obj.image_url : placeholderURL}/>
        <div id="card-info-display">
            <div id="info-top">
              <div id="artist-info">
                <h3>{obj.name}</h3>
                <h5>{obj.artist}</h5>
              </div>
              <div id="card-social-btns">
                <button>Comments</button>
                <button>Likes</button>
              </div>
            </div>
            <div id="card-song-container">
              <h5>{isSong ? "Single" : "Top 3"}</h5>
              <SongList songs={songs}/>
            </div>
        </div>
      </div>
    </div>
  )
}
