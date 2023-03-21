import React, { useState, useEffect } from 'react'
import Card from '../Card';
import HomeCard from '../Home/HomeCard';
export default function PPlaylists({playlists}) {

  console.log(playlists);
    const renderPlaylists = playlists.map((playlist) => {
      return <HomeCard obj={playlist} />
      console.log(playlist);
    })
  return (
    <div id="pplaylist-container">
      {renderPlaylists}
    </div>
  )
}
