import React, { useEffect, useState } from 'react'
import SongList from '../SongList'
import './profile.css'

export default function PSongs(songs) {

  return (
    <div id="psong-container">
        <SongList songs={songs} />
    </div>
  )
}
