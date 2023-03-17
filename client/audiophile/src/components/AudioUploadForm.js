import React, { useState } from "react";

function AudioUploadForm() {
    const [name, setName] = useState("");
    const [album, setAlbum] = useState(null);
    const [audioData, setAudioData] = useState(null)
  
    const handleSubmit = async (e) => {
      e.preventDefault();

      const formData = new FormData()
      formData.append('user_id', 1)
      formData.append('name', name)
      formData.append('audio', audioData)
      formData.append('album_id', 1)

      fetch('http://localhost:3000/songs', {
        method: 'POST',
        body: formData
      }).then(res => res.json()).then(obj => console.log(obj))
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <input onChange={(e)=> setName(e.target.value)} type="text"/>
          <select onChange={(e) => setAlbum(e.target.value)}>
            <option value={0}>Choose Album</option>
            <option value={1}>Album 1</option>
            <option value={2}>Album 2</option>
            <option value={3}>Album 3</option>
            <option value={4}>Album 4</option>
          </select>
          <label htmlFor="file">Upload File:</label>
          <input type="file" accept="audio/*" id="file" name="file" onChange={(e) => setAudioData(e.target.files[0])} />
        </div>
        <button type="submit">Submit</button>
      </form>
    );
}

export default AudioUploadForm;
