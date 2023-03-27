import React, { useEffect, useState } from 'react'
import './home.css';
import AudioPlayer from '../AudioPlayer'
import Navbar from '../Navbar.js';
import SongCard from '../SongCard'
import AlbumItem from '../AlbumItem';
import { useNavigate } from 'react-router-dom';

/**
 * Component for showing trending songs, albums, and playlists. Sorted by likes & comments length.
 *
 * @component
 * @example
 * return (
 *   <Home />
 * )
 */

export default function Home() {
  const [songs, setSongs] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [playlists, setPlaylists] = useState([]);

  const navigate = useNavigate();

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
    return <div id="home-song" onClick={() => navigate(`/song/${song.id}`)}>
        <img src={song.image_url} />
        <p>{song.name}</p>
    </div>
  })
  const renderAlbums = albums.map((album) => {
    return <div id="home-song" onClick={() => navigate(`/album/${album.id}`)}>
      <img src={album.image_url} />
      <p>{album.name}</p>
    </div>
  })

  const renderPlaylists = playlists.map((playlist) => {
    return <div id="home-song" onClick={() => navigate(`/playlist/${playlist.id}`)}>
      <img src={playlist.image_url} />
      <p>{playlist.name}</p>
    </div>
  });

  return (
    <div id="home-container">
        <Navbar/>
        <div id="home-wrapper">
          <h2>Trending</h2>
            <h4>Songs</h4>
            <div id="tren-songs">
              {renderSongs}
            </div>
            <h4>Albums</h4>
            <div id="tren-songs">
              {renderAlbums}
            </div>
            <h4>Playlists</h4>
            <div id="tren-songs">
              {renderPlaylists}
            </div>
            <div className="audio-player-container">
                <AudioPlayer />
            </div>
        </div>
    </div>
  )
}
