import React from 'react'
import './profile.css';
import Navbar from '../Navbar';

export default function Profile() {
  return (
    <div id="profile-page-container">
        <Navbar />
        <div id="profile-wrapper">
            <div id="profile-hdr">
              <img id="pfp-profile" src="https://place-hold.it/150x150" />
              <div id="name-wrapper">
                <h2>Name</h2>
                <h4>@username</h4>
              </div>
            </div>
            <div id="btn-cluster-profile">
                <button>Songs</button>
                <button>Albums</button>
                <button>Playlist</button>
            </div>
            <div>
              {/* render song list, album list, or playlist list */}
            </div>
        </div>
    </div>
  )
}
