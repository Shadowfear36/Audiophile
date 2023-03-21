import React from 'react'
import './songlist.css';
import SongItem from './SongItem.js';

export default function SongList({songs}) {
    let i = 0;

    const renderSongs = songs.map((obj) => {
        i+=1
        return (
        <SongItem song={obj} i={i}/>
        )
    })

    const isSongsFull = () => {
        if (songs.length > 0) {
            return true
        } else {
            return false
        }
    }

    // console.log(songs.songs);

  return (
    <div id="song-list-container">
       {renderSongs}
    </div>
  )
}
