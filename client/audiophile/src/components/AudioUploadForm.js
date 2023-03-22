import React, { useState, useContext, useEffect} from "react";
import AudioPlayer from "./AudioPlayer";
import { UserContext } from "../context/user";

function AudioUploadForm() {

    // initialize User Context
    const { userState, setUserState } = useContext(UserContext);

    const [name, setName] = useState("");
    const [album, setAlbum] = useState(null);
    const [audioData, setAudioData] = useState(null)
    const [imageData, setImageData] = useState(null)
    const [songUrl, setSongUrl] = useState('')
    const [albumList, setAlbumList] = useState([])

    const handleSubmit = async (e) => {
      e.preventDefault();

      const formData = new FormData()
      formData.append('user_id', 1)
      formData.append('name', name)
      formData.append('audio', audioData)
      formData.append('image', imageData)
      formData.append('album_id', album)

      fetch('http://localhost:3000/songs', {
        method: 'POST',
        body: formData
      }).then(res => res.json()).then(obj => console.log(obj))
    };

    useEffect(()=> {
      fetch(`http://localhost:3000/users/${userState.user_id}/albums`)
      .then(res =>res.json()).then(obj => setAlbumList(obj))
    },[])

    const renderAlbumList = albumList.map((album) => {
            return <option value={album.id}>{album.name}</option>
    })

    return (
      <>
      <form onSubmit={handleSubmit}>
        <div>
          <input onChange={(e)=> setName(e.target.value)} type="text"/>
          <select onChange={(e) => setAlbum(e.target.value)}>
            <option value={""}>Choose Album</option>
            {renderAlbumList}
          </select>
          <label htmlFor="audio">Upload Audio File:</label>
          <input type="file" accept="audio/*" id="file" name="audio" onChange={(e) => setAudioData(e.target.files[0])} />
          <label htmlFor="image">Uploade Cover Image:</label>
          <input type="file" accept="image/*" id="file" name="image" onChange={(e) => setImageData(e.target.files[0])} />
        </div>
        <button type="submit">Submit</button>
      </form>
      </>
      
    );
}

export default AudioUploadForm;
