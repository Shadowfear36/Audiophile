import React, {useState, useEffect, useContext} from 'react'
import './songpage.css';
import '../Home/homecard.css';
import { useParams, useNavigate } from 'react-router-dom';
import SongCard from '../SongCard';
import AudioPlayer from '../AudioPlayer';
import { UserContext } from '../../context/user';
import Navbar from '../Navbar';

/**
 * Component for Displaying a Single Song and its Comments
 *
 * @component
 * @example
 * return (
 *   <SongPage />
 * )
 */

export default function SongPage() {
  let {id} = useParams();

  const { userState, setUserState } = useContext(UserContext);

  const navigate = useNavigate();

  const [song, setSong] = useState([]);
  const [comments, setComments] = useState([]);
  const [userComment, setUserComment] = useState('');

  useEffect(() => {
    fetch(`api/songs/${id}`)
    .then(res => res.json()).then((obj) => {
      setSong(obj)
      setComments(obj.comments)
    });
  },[]);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    fetch(`api/poly_comments`, {
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
    console.log(comment);
    return <div id="commentCard">
      <img onClick={() => navigate(`/profile/${comment.username}`)} src={comment.pfp_url}/>
      <div>
        <h4 onClick={() => navigate(`/profile/${comment.username}`)}>{comment.username}</h4>
        <p>{comment.content}</p>
      </div>
    </div>
  })
  return (
    userState.isLoggedIn ? <div id="song-page-container">
      <Navbar />
      <div id="song-page-wrapper">
        <SongCard song={song}/>
            <h4>Add A Comment</h4>
          <div id="add-comment">
            <input type="text" onChange={(e) => setUserComment(e.target.value)}/>
            <button onClick={handleCommentSubmit}>Submit</button>
          </div>
          <h4>Comments</h4>
        <div id="comment-container">
          {renderComments}
        </div>
        <div className="audio-player-container">
          <AudioPlayer />
        </div>
      </div>
    </div> : <div id="notloggedIn">
      <div>
        <h1>Audiophile</h1>
      </div>
      <div id="log-container">
        <h2>Uhh Ohh</h2>
        <p>You are not logged in. Please Log In Or Sign Up.</p>
        <div id="btn-log">
          <button onClick={() => navigate('/')}>Login</button>
          <button onClick={() => navigate('/signup')}>Sign Up</button>
        </div>
      </div>
    </div>
  )
}
