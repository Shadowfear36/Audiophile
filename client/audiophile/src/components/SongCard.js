import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Home/homecard.css';
import SongList from './SongList';

/**
 * Component for showing details of an individual song
 *
 * @component
 * @example
 * return (
 *   <SongCard song={song object} />
 * )
 */

export default function SongCard({song}) {
    const navigate = useNavigate();
  return (
    <div id="home-card-container">
    <div id="card-details">
      <h6>@{song.artist}</h6>
      <h6>{song.created_at}</h6>
    </div>
    <div id="home-card-wrapper">
      <img src={song.image_url} onClick={() => navigate(`/album/${song.id}`)}/>
      <div id="card-info-display">
          <div id="info-top">
            <div id="artist-info">
              <h3 onClick={() => navigate(`/album/${song.id}`)}>{song.name}</h3>
              <h5 onClick={() => navigate(`/profile/${song.artist}`)}>{song.artist}</h5>
            </div>
            <div id="card-social-btns">
              <button>Comments</button>
              <button>Likes: {song.likes}</button>
            </div>
          </div>
          <div id="card-song-container">
            <h5>{"Single"}</h5>
            <SongList songs={[song]} card={true}/>
          </div>
      </div>
    </div>
  </div>
  )
}
