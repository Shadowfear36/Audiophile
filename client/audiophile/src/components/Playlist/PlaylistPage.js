import React, {useState, useEffect, useContext} from 'react'
import { UserContext } from '../../context/user';
import { useParams, useNavigate } from 'react-router-dom';
import SongList from '../SongList';
import './playlistpage.css'

export default function PlaylistPage() {
  let {id} = useParams();

  const navigate = useNavigate();

  const [playlist, setPlaylist] = useState([]);

  const [comments, setComments] = useState([]);

  const [songs, setSongs] = useState([]);

  const [userComment, setUserComment] = useState([]);


  const { userState, setUserState } = useContext(UserContext);

  useEffect(() => {
    fetch(`http://localhost:3000/playlists/${id}`)
    .then(res => res.json()).then((obj) => {
      setPlaylist(obj)
      setComments(obj.comments)
      setSongs(obj.songs)
    });
  },[])

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3000/poly_comments`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        commentable_type: "Playlist",
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
    <div>
      <div id="home-card-container">
      <div id="card-details">
        <h6>@{playlist.artist}</h6>
        <h6>{playlist.created_at}</h6>
      </div>
      <div id="home-card-wrapper">
        <img src={playlist.image_url} onClick={() => navigate(`/playlist/${playlist.id}`)}/>
        <div id="card-info-display">
            <div id="info-top">
              <div id="artist-info">
                <h3 onClick={() => navigate(`/playlist/${playlist.id}`)}>{playlist.name}</h3>
                <h5 onClick={() => navigate(`/profile/${playlist.artist}`)}>{playlist.artist}</h5>
              </div>
              <div id="card-social-btns">
                <button onClick={() => navigate(`/playlist/${playlist.id}`)}>Comments</button>
                <button>Likes: {playlist.likes}</button>
              </div>
            </div>
        </div>
      </div>
    </div>

    <SongList songs={songs} full={true}/>
    <div>
          <h4>Add A Comment</h4>
          <input type="text" onChange={(e) => setUserComment(e.target.value)}/>
          <button onClick={handleCommentSubmit}>Submit</button>
        </div>
    <div>
      <p>Comments</p>
      {renderComments}
    </div>

    </div>
  )
}
