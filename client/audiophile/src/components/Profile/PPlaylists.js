import React, { useState, useEffect } from 'react'
import PlaylistItem from '../PlaylistItem';

export default function PPlaylists({playlists}) {

    const renderPlaylists = playlists.map((playlist) => {
      return <PlaylistItem playlist={playlist} />
    })
  return (
    <div id="pplaylist-container">
      {renderPlaylists}
    </div>
  )
}
