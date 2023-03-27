import React, { useState, useEffect } from 'react'
import SongList from './SongList';
import { useNavigate } from 'react-router-dom';

/**
 * Component for showing details a playlist item
 *
 * @component
 * @example
 * return (
 *   <PlaylistItem playlist={array of playlist objects} />
 * )
 */

export default function PlaylistItem(playlist) {
    const [songs, setSongs] = useState([]);

    //allow navigation
    const navigate = useNavigate();

    useEffect(() => {
      if (playlist.playlist.songs !== undefined && playlist.playlist.songs.length - 1 >=3) {
        setSongs([playlist.playlist.songs[0], playlist.playlist.songs[1], playlist.playlist.songs[2]]);
      } else if (playlist.playlist.songs !== undefined) {
        setSongs([playlist.playlist.songs[0]])
      }
      else {
        setSongs([playlist.playlist.songs])
      }
    }, []);
  
    const checkImageUrl = () => {
      if (playlist.playlist.image_url != null) {
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
          <h6>@{playlist.playlist.artist}</h6>
          <h6>{playlist.playlist.created_at}</h6>
        </div>
        <div id="home-card-wrapper">
          <img src={checkImageUrl ? playlist.playlist.image_url : placeholderURL} onClick={() => navigate(`/playlist/${playlist.playlist.id}`)}/>
          <div id="card-info-display">
              <div id="info-top">
                <div id="artist-info">
                  <h3 onClick={() => navigate(`/playlist/${playlist.playlist.id}`)}>{playlist.playlist.name}</h3>
                  <h5 onClick={() => navigate(`/profile/${playlist.playlist.artist}`)}>{playlist.playlist.artist}</h5>
                </div>
                <div id="card-social-btns">
                  <button>Comments</button>
                  <button>Likes</button>
                </div>
              </div>
              <div id="card-song-container">
                <h5>{"Top 3"}</h5>
                <SongList songs={playlist.playlist.songs} card={true}/>
              </div>
          </div>
        </div>
      </div>
    )
}
