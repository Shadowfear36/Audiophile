import React, { useState, useContext } from 'react'
import SongCard from './SongCard';
import "./createpage.css";
import { UserContext } from "../../context/user";
import AudioUploadForm from '../AudioUploadForm';

export default function CSongs() {

    // initialize User Context
    const { userState, setUserState } = useContext(UserContext);

  return (
    <div id="CSongs-container">
        <div id="Songcard-wrapper">
            <SongCard artist={userState.username} />    
        </div>
        <div id="create-form-container">
            <AudioUploadForm />
        </div>
    </div>
  )
}
