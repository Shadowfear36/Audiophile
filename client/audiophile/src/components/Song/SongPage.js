import React, {useState, useEffect} from 'react'
import './songpage.css';
import '../Home/homecard.css';
import { useParams, useNavigate } from 'react-router-dom';
import SongCard from '../SongCard';

export default function SongPage() {
  let {id} = useParams();

  const navigate = useNavigate();

  const [song, setSong] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/songs/${id}`)
    .then(res => res.json()).then(obj=> setSong(obj));
  },[]);


  return (
    <div id="song-page-container">
      <SongCard song={song}/>
      <div id="comment-container">
        <h4>Comments</h4>
        <div>
          <p>This is a comment</p>
        </div>
      </div>
    </div>
  )
}
