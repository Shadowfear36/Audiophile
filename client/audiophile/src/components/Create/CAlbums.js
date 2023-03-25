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
        const [albumName, setAlbumName] = useState(null);
        const [imageData, setImageData] = useState(null);

        const [albumId, setAlbumId] = useState(null);

        const uploadAlbum = async (e) => {
          e.preventDefault();
    
          const formData = new FormData()
          formData.append('user_id', userState.user_id)
          formData.append("name", albumName)
          formData.append("image", imageData)
    
          fetch('http://localhost:3000/albums', {
            method: 'POST',
            body: formData
          }).then(res => res.json()).then(obj => console.log(obj))
        };

  return (
    <div id="CSongs-container">
       <div id="Songcard-wrapper">
            <GroupCard name="Album 1Name" image="https://place-hold.it/200" songs={[]}/>
       </div>
       <div id="upload_container">
            <label for="albumname">Album Name</label>
            <input type="text" name="albumname" onChange={(e) => setAlbumName(e.target.value)} />
            <label for="image" className="file">Album Image
            <input type="file" name="image" onChange={(e) => setImageData(e.target.files[0])}/>
            </label> 
               <button id="xtra-btn" onClick={uploadAlbum}>Save Album</button>
       </div>
    </div>
  )
}
