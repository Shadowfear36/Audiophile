import React, { useEffect, useState } from 'react'
import SongList from '../SongList'
import './profile.css'
import HomeCard from '../Home/HomeCard';

/**
 * Component for showing details of the users created songs.
 *
 * @component
 * @example
 * return (
 *   <PSongs songs={array of songs objects} />
 * )
 */

export default function PSongs(songs) {

    const renderCards = songs.songs.map( (obj) => {
      console.log(obj)
      return <HomeCard obj={obj} isSong={true}/>
    })

  return (
    <div id="psong-container">
        {renderCards}
    </div>
  )
}
