import React from 'react'
import SongList from './SongList';
import './card.css';

export default function Card() {
  return (
    <div id="card-container">
        <div id="card-wrapper">
            <img src="http://placehold.it/250x250"/>
            <div id='card-content-container'>
                    <div id="card-top">
                        <div>
                            <h4>Playlist Name</h4>
                            <h6>@username</h6>
                        </div>
                        <div>
                            <h6>Top 3</h6>
                            {/* <SongList /> */}
                        </div>
                    </div>
            </div>
        </div>
    </div>
  )
}
