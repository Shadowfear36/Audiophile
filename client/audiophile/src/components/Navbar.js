import React from 'react'
import './navbar.css';

export default function 
() {
  return (
    <div id="navbar-container">
        <div id="nav-top-wrapper">
            <button className="nav-btn">Create</button>
        </div>
        <div id="nav-mid-wrapper">
            <button className="nav-btn">Home</button>
            <button className="nav-btn">Search</button>
            <button className="nav-btn">Music</button>
            <button className="nav-btn">Profile</button>
            <button className="nav-btn">Settings</button>
        </div>
        <div id="nav-btm-wrapper">
         <button className="nav-btn">Logout</button>
        </div>
    </div>
  )
}
