import React, { useState, useContext } from 'react'
import "./createpage.css";
import GroupCard from "./GroupCard";
import { UserContext } from "../../context/user";
import AudioUploadForm from '../AudioUploadForm';
import SongList from "../SongList";

/**
 * Component for showing the Create Playlist form.
 *
 * @component
 * @example
 * return (
 *   <CPlaylists />
 * )
 */

export default function CPlaylists() {
        // initialize User Context
        const { userState, setUserState } = useContext(UserContext);
    
        const [pageState, setPageState] = useState(1);
        const [playlistName, setPlaylistName] = useState(null);
        const [imageData, setImageData] = useState(null);

        const [playlistId, setPlaylistId] = useState(null);

        const uploadPlaylist = async (e) => {
          e.preventDefault();
    
          const formData = new FormData()
          formData.append('user_id', userState.user_id)
          formData.append("name", playlistName)
          formData.append("image", imageData)
    
          fetch('/api/playlists', {
            method: 'POST',
            body: formData
          }).then(res => res.json()).then(obj => console.log(obj))
        };

  return (
    <div id="CSongs-container">
       <div id="Songcard-wrapper">
            <GroupCard name="Playlist Name" image="https://place-hold.it/200" songs={[]}/>
       </div>
       <div id="upload_container">
            <label for="playlistname">Playlist Name</label>
            <input type="text" className="file" name="playlistname" onChange={(e) => setPlaylistName(e.target.value)} />
            <label className="file" for="image">Playlist Image
            <input type="file" name="image" onChange={(e) => setImageData(e.target.files[0])}/>
            </label>
               <button id="xtra-btn" onClick={uploadPlaylist}>Save Playlist</button>
            <div>
            </div>
       </div>
    </div>
  )
}
