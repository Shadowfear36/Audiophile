import React from 'react'
import './songlist.css';
import SongItem from './SongItem.js';

export default function SongList({songs}) {

    let i = 0;

    const renderSongs = songs.songs.map((obj) => {
        i+=1
        return (
        <SongItem song={obj} i={i}/>
        )
    })

    // console.log(songs.songs);

  return (
    <div id="song-list-container">
       {renderSongs}
    </div>
  )
}
