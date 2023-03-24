import React, { useState, useEffect } from 'react'
import './homecard.css';
import SongList from '../SongList';
import { useNavigate } from 'react-router-dom';

export default function HomeCard( {obj, isSong} ) {

  //allow navigation
  const navigate = useNavigate();

  const [songs, setSongs] = useState([]);



  useEffect(() => {
    if (obj.songs !== undefined && obj.songs.length - 1 >=3) {
      setSongs([obj.songs[0], obj.songs[1], obj.songs[2]]);
    } else if (obj.songs !== undefined) {
      setSongs([obj.songs[0]])
    }
    else {
      setSongs([obj])
    }
  }, []);

  const checkImageUrl = () => {
    if (obj.image_url != null) {
      console.log("true");
      return true
    } else {
      return false;
    }
  }

  console.log(songs)
  const placeholderURL = "https://place-hold.it/200";

  return (
    <div id="home-card-container">
      <div id="card-details">
        <h6 onClick={() => navigate(`/profile/${obj.artist}`)}>@{obj.artist}</h6>
        <h6>{obj.created_at}</h6>
      </div>
      <div id="home-card-wrapper">
        <img src={checkImageUrl ? obj.image_url : placeholderURL}/>
        <div id="card-info-display">
            <div id="info-top">
              <div id="artist-info">
                <h3 onClick={() => navigate(`/song/${obj.id}`)}>{obj.name}</h3>
                <h5 onClick={() => navigate(`/profile/${obj.artist}`)}>{obj.artist}</h5>
              </div>
              <div id="card-social-btns">
                <button>Comments</button>
                <button>Likes</button>
              </div>
            </div>
            <div id="card-song-container">
              <h5>{isSong ? "Single" : "Top 3"}</h5>
              <SongList songs={songs} card={true}/>
            </div>
        </div>
      </div>
    </div>
  )
}
