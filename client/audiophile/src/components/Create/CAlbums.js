import React, { useState, useContext } from 'react'
import "./createpage.css";
import GroupCard from "./GroupCard";
import { UserContext } from "../../context/user";
import AudioUploadForm from '../AudioUploadForm';
import SongList from "../SongList";

export default function CAlbums() {
        // initialize User Context
        const { userState, setUserState } = useContext(UserContext);
    
        const [pageState, setPageState] = useState(1);
        

  return (
    <div id="CSongs-container">
       <div id="Songcard-wrapper">
            <GroupCard name="Album 1Name" image="https://place-hold.it/200" songs={[]}/>
       </div>
       <div>
            <label for="albumname">Album Name</label>
            <input type="text" name="albumname" />
            <label for="image">Album Image</label>
            <input type="file" name="image"/>

            <div>
                <AudioUploadForm />
                <SongList songs={[]}/>
            </div>
       </div>
    </div>
  )
}
