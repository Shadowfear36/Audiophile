import React from 'react'
import "./albumitem.css";

export default function AlbumItem(album) {

  return (
    <div id="album-card">
        <img src="https://place-hold.it/200X200" />
        <h3>{album.album.name}</h3>
    </div>
  )
}
