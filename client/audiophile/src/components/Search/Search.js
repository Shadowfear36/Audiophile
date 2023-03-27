import React, { useState, useEffect } from 'react'
import './search.css';
import Navbar from '../Navbar.js';
import AudioPlayer from '../AudioPlayer';
import { useNavigate } from 'react-router-dom';

/**
 * Component for Allowing Users To Search other Users, Albums, Songs, & Playlists.
 *
 * @component
 * @example
 * return (
 *   <Search />
 * )
 */

export default function Search() {

const navigate = useNavigate();

const [searchTerm, setSearchTerm] = useState('');
const [users, setUsers] = useState([]);
const [songs, setSongs] = useState([]);
const [albums, setAlbums] = useState([]);
const [playlists, setPlaylists] = useState([]);

useEffect(() => {
  fetch(`http://localhost:3000/search/${searchTerm}`)
  .then(res => res.json()).then((obj) => {
    setUsers(obj.users)
    setAlbums(obj.albums)
    setSongs(obj.songs)
    setPlaylists(obj.playlists)
  })
},[searchTerm]);

const renderUsers = users.map(user => {
  let url = user.image_url
  return <div id="user-card" onClick={()=> navigate(`/profile/${user.username}`)}>
     <img src={url}/>
    <h4>@{user.username}</h4>
  </div>
});

const renderSongs = songs.map(song => {
  console.log(song);
  return <div id="song-card" onClick={()=> navigate(`/song/${song.id}`)}>
    <img src={song.image_url}/>
    <h4>{song.name}</h4>
    {/* <h6>{song.artist}</h6> */}
  </div>
});

const renderAlbums = albums.map(album => {
  return <div id="album-card-s" onClick={()=> navigate(`/album/${album.id}`)}>
    <img src={album.image_url}/>
    <h4>{album.name}</h4>
  </div>
});

const renderPlaylists = playlists.map(playlist => {
  console.log(playlist)
  return <div id="album-card-s" onClick={()=> navigate(`/playlist/${playlist.id}`)}>
    <img src={playlist.image_url}/>
    <h4>{playlist.name}</h4>
  </div>
});

  return (
    <div id="search-container">
      <Navbar />
      <div id="search-wrapper">
          <h2>Search</h2>
          <input id="search-bar-input" placeholder="Find Users, Songs, Playlists, & Albums" onChange={(e) => setSearchTerm(e.target.value)}/>
          <section id="user-section">
            <h4>Users</h4>
            <div id="render-container">
              {renderUsers}
            </div>
          </section>
          <section>
            <h4>Songs</h4>
            <div id="render-container">
              {renderSongs}
            </div>
          </section>
          <section>
            <h4>Albums</h4>
            <div id="render-container">
              {renderAlbums}
            </div>
          </section>
          <section>
            <h4>Playlists</h4>
            <div id="render-container">
              {renderPlaylists}
            </div>
          </section>
          <div className="audio-player-container">
                <AudioPlayer />
          </div>
      </div>
    </div>
  )
}
