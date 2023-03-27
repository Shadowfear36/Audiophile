import React, { useState, useEffect } from 'react';
import SongList from './SongList';
import "./albumitem.css";
import { useNavigate } from 'react-router-dom';

/**
 * Component for showing details of an album item
 *
 * @component
 * @example
 * return (
 *   <AlbumItem album={album object} />
 * )
 */

export default function AlbumItem(album) {
  const [songs, setSongs] = useState([]);

  const navigate = useNavigate();


  useEffect(() => {
    if (album.album.songs !== undefined && album.album.songs.length - 1 >3) {
      setSongs([album.album.songs[0], album.album.songs[1], album.album.songs[2]]);
    } else if (album.album.songs !== undefined) {
      setSongs([album.album.songs[0]])
    }
    else {
      setSongs([album.album.songs])
    }
  }, []);

  const checkImageUrl = () => {
    if (album.album.image_url != null) {
      return true
    } else {
      return false;
    }
  }

  const placeholderURL = "https://place-hold.it/200";

  return (
    <div id="home-card-container">
      <div id="card-details">
        <h6>@{album.album.artist}</h6>
        <h6>{album.album.created_at}</h6>
      </div>
      <div id="home-card-wrapper">
        <img src={checkImageUrl ? album.album.image_url : placeholderURL} onClick={() => navigate(`/album/${album.album.id}`)}/>
        <div id="card-info-display">
            <div id="info-top">
              <div id="artist-info">
                <h3 onClick={() => navigate(`/album/${album.album.id}`)}>{album.album.name}</h3>
                <h5 onClick={() => navigate(`/profile/${album.album.artist}`)}>{album.album.artist}</h5>
              </div>
              <div id="card-social-btns">
                <button onClick={() => navigate(`/album/${album.album.id}`)}>Comments</button>
                <button>Likes: {album.album.likes}</button>
              </div>
            </div>
            <div id="card-song-container">
              <h5>{"Top 3"}</h5>
              <SongList songs={album.album.songs} card={true}/>
            </div>
        </div>
      </div>
    </div>
  )
}
