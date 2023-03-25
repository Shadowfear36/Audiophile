import React, {useState, useEffect, useContext} from 'react'
import './songpage.css';
import '../Home/homecard.css';
import { useParams, useNavigate } from 'react-router-dom';
import SongCard from '../SongCard';
import AudioPlayer from '../AudioPlayer';
import { UserContext } from '../../context/user';

export default function SongPage() {
  let {id} = useParams();

  const { userState, setUserState } = useContext(UserContext);

  const navigate = useNavigate();

  const [song, setSong] = useState([]);
  const [comments, setComments] = useState([]);
  const [userComment, setUserComment] = useState('');

  useEffect(() => {
    fetch(`http://localhost:3000/songs/${id}`)
    .then(res => res.json()).then((obj) => {
      setSong(obj)
      setComments(obj.comments)
    });
  },[]);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3000/poly_comments`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        commentable_type: "Song",
        commentable_id: id,
        user_id: userState.user_id,
        content: userComment
      })
    }).then(res => res.json()).then(obj => console.log(obj));
  }

  const renderComments = comments.map((comment) => {
    return <div id="commentCard">
      <img src={comment.pfp_url}/>
      <div>
        <h4>{comment.username}</h4>
        <p>{comment.content}</p>
      </div>
    </div>
  })
  return (
    <div id="song-page-container">
      <SongCard song={song}/>
      <div id="comment-container">
        <div>
          <h4>Add A Comment</h4>
          <input type="text" onChange={(e) => setUserComment(e.target.value)}/>
          <button onClick={handleCommentSubmit}>Submit</button>
        </div>
        <h4>Comments</h4>
        {renderComments}
      </div>
      <AudioPlayer />
    </div>
  )
}
