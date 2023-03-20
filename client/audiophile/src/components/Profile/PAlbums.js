import React, { useEffect, useState } from 'react'
import './profile.css'
import AlbumItem from '../AlbumItem';

export default function PAlbums({albums}) {

    const renderAlbums = albums.map(album => {
        return <AlbumItem album={album}/>
    })

  return (
    <div id="palbum-container">
        {renderAlbums}
    </div>
  )
}
