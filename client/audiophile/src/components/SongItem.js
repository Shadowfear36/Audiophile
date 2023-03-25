import React, { useState, useContext, useEffect } from 'react'
import { BsFillPlayFill, BsFillPauseFill } from "react-icons/bs";
import './songlist.css';
import { UserContext } from "../context/user";
import { useNavigate } from 'react-router-dom';

export default function ({ song, i}) {

    // initialize User Context
    const { userState, setUserState } = useContext(UserContext);

    //allow navigation
    const navigate = useNavigate();

    const [showPlaylists, setShowPlaylists] = useState(false);

    const [playlists, setPlaylists] = useState([]);

    const handleClick = () => {
       setUserState({...userState, queue: [...userState.queue, song] })
    }

    const handleLike = () => {
      fetch(`http://localhost:3000/poly_likes`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          likeable_type: "Song",
          likeable_id: song.id,
          user_id: userState.user_id
        })
      }).then(res => res.json()).then(console.log)
    }

    useEffect(() => {
      fetch(`http://localhost:3000/users/${userState.user_id}/playlists`)
      .then(res => res.json()).then((obj) => setPlaylists(obj))
    },[])

    const handleAddToPlayList = () => {
      setShowPlaylists(true);
    }

    const renderOptions = playlists.map((playlist) => {
      return <option value={playlist.id}>{playlist.name}</option>
    })

    const renderPlaylists = () => {
      return showPlaylists ? <div id="playlist-modal">
        <div>
        <h2> Song: {song.name}</h2>
        <select>
          <option>Select A Playlist</option>
          {renderOptions}
        </select>
        <button>Add To Playlist</button>
      </div>
      </div> : null
    }

  return (
    <>
        {renderPlaylists()}
        <div id="song-wrapper">
            <h4 id="song-index">{i}</h4>
            <h4 onClick={() => navigate(`/song/${song.id}`)} id="song-list-title">{song.name}</h4>
            <div id="song-list-like" onClick={handleLike}>
              <p onClick={handleLike}>{"<3"}</p>
            </div>
            <div id="song-list-add">
              <p onClick={handleAddToPlayList}>[+]</p>
            </div>
            <div id="song-list-play" onClick={handleClick}>
                <BsFillPlayFill size={25}/>
            </div>
        </div>
        <hr/>
    </>
  )
}
