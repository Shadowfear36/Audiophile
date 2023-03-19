import React, { useState, useContext } from 'react'
import { BsFillPlayFill, BsFillPauseFill } from "react-icons/bs";
import './songlist.css';
import { UserContext } from "../context/user";

export default function ({ song, i}) {

    // initialize User Context
    const { userState, setUserState } = useContext(UserContext);

    console.log(userState.queue);

    const handleClick = () => {
       setUserState({...userState, queue: [...userState.queue, song] })
    }

  return (
    <>
        <div id="song-wrapper">
            <h4 id="song-index">{i}</h4>
            <h4 id="song-list-title">{song.name}</h4>
            <h5>2:30</h5>
            <div id="song-list-play" onClick={handleClick}>
                <BsFillPlayFill size={25}/>
            </div>
        </div>
        <hr/>
    </>
  )
}
