import React, { useEffect, useState } from 'react'
import './profile.css'
import AlbumItem from '../AlbumItem';

/**
 * Component for showing details of the users created albums
 *
 * @component
 * @example
 * return (
 *   <PAlbums albums={array of album objects} />
 * )
 */

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
