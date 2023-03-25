import React, { useState, useContext } from 'react'
import { BsFillPlayFill, BsFillPauseFill } from "react-icons/bs";
import './songlist.css';
import { UserContext } from "../context/user";
import { useNavigate } from 'react-router-dom';

export default function ({ song, i}) {

    // initialize User Context
    const { userState, setUserState } = useContext(UserContext);

    //allow navigation
    const navigate = useNavigate();


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

  return (
    <>
        <div id="song-wrapper">
            <h4 id="song-index">{i}</h4>
            <h4 onClick={() => navigate(`/song/${song.id}`)} id="song-list-title">{song.name}</h4>
            <div id="song-list-like" onClick={handleLike}>
              <p onClick={handleLike}>{"<3"}</p>
            </div>
            <div id="song-list-play" onClick={handleClick}>
                <BsFillPlayFill size={25}/>
            </div>
        </div>
        <hr/>
    </>
  )
}
