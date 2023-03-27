import React from 'react'
import './songlist.css';
import SongItem from './SongItem.js';

/**
 * Component for showing details of a list of songs and returns a song Item
 *
 * @component
 * @example
 * return (
 *   <SongList  songs={array of song objects} card={boolean} full={boolean}/>
 * )
 */

export default function SongList({songs, card, full}) {
    let i = 0;

    const renderSongs = songs.map((obj) => {
        i+=1

        if (i - 1  <= 2 && card === true) {
            return <SongItem song={obj} i={i}/>
        } if (card === false){
            return <SongItem song={obj} i={i}/>
        } if (full === true) {
            return <SongItem song={obj} i={i}/>
        }
        
        else {
            return null;
        }
    })

    // const isSongsFull = () => {
    //     if (songs.length > 0) {
    //         return true
    //     } else {
    //         return false
    //     }
    // }

    // console.log(songs.songs);

  return (
    <div id="song-list-container">
       {renderSongs}
    </div>
  )
}
