import React, { useState, useEffect } from 'react'
import PlaylistItem from '../PlaylistItem';

/**
 * Component for showing details of the users playlists
 *
 * @component
 * @example
 * return (
 *   <PPlaylists playlists={array of playlist objects} />
 * )
 */

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
