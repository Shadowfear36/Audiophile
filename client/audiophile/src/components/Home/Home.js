import React, { useEffect, useState } from 'react'
import './home.css';
import AudioPlayer from '../AudioPlayer'
import Navbar from '../Navbar.js';
import SongCard from '../SongCard'
import AlbumItem from '../AlbumItem';

export default function Home() {
  const [songs, setSongs] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/trending")
    .then(res => res.json())
    .then((obj) => {
      setSongs(obj.songs)
      setAlbums(obj.albums)
      setPlaylists(obj.playlists)
    })
  },[]);

  const renderSongs = songs.map((song) => {
      // console.log(song);
    return <div id="home-song">
        <p>{song.name}</p>
    </div>
  })
  const renderAlbums = albums.map((album) => {
    // console.log(album);
    return <div id="home-album">
      <p>{album.name}</p>
    </div>
  })

  const renderPlaylists = playlists.map((playlist) => {
      console.log(playlist);

    return <div id="home-playlist">
      <p>{playlist.name}</p>
    </div>
  });

  return (
    <div id="home-container">
        <Navbar/>
        <div id="home-wrapper">
            {/* <HomeCard/> */}
            {renderPlaylists}
            <div className="audio-player-container">
                <AudioPlayer />
            </div>
        </div>
    </div>
  )
}
