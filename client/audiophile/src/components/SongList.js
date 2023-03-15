import React from 'react'
import './songlist.css';
import { BsFillPlayFill, BsFillPauseFill } from "react-icons/bs"

export default function SongList() {
  return (
    <div id="song-list-container">
        <div id="song-wrapper">
            <h4 id="song-index">1</h4>
            <h4 id="song-list-title">Song Title</h4>
            <h5>2:30</h5>
            <div id="song-list-play">
                <BsFillPlayFill size={25}/>
            </div>
        </div>
        <hr/>
        <div id="song-wrapper">
            <h4 id="song-index">1</h4>
            <h4 id="song-list-title">Song Title</h4>
            <h5>2:30</h5>
            <div id="song-list-play">
                <BsFillPlayFill size={25}/>
            </div>
        </div>
        <hr/>
        <div id="song-wrapper">
            <h4 id="song-index">1</h4>
            <h4 id="song-list-title">Song Title</h4>
            <h5>2:30</h5>
            <div id="song-list-play">
                <BsFillPlayFill size={25}/>
            </div>
        </div>
        <hr/>
    </div>
  )
}
