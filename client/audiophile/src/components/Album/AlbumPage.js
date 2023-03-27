import React, { useState, useEffect, useContext} from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import './albumpage.css';
import SongList from '../SongList';
import { UserContext } from '../../context/user';
import Navbar from '../Navbar';
import AudioPlayer from '../AudioPlayer';
import { BsFillHeartFill } from "react-icons/bs";

/**
 * Component for showing details of an individual album
 *
 * @component
 * @example
 * return (
 *   <AlbumPage />
 * )
 */

export default function AlbumPage() {
  
  let { id } = useParams();

  const { userState, setUserState } = useContext(UserContext);

  const navigate = useNavigate();
  const [album, setAlbum] = useState([]);
  const [comments, setComments] = useState([]);
  const [songs, setSongs] = useState([]);
  const [userComment, setUserComment] = useState('');

  useEffect(() => {
    fetch(`http://localhost:3000/albums/${id}`)
    .then(res => res.json()).then((obj) => {
      setAlbum(obj)
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
        commentable_type: "Album",
        commentable_id: id,
        user_id: userState.user_id,
        content: userComment
      })
    }).then(res => res.json()).then(obj => console.log(obj));
  }

  const renderComments = comments.map((comment) => {
    console.log(comment);
    return <div id="commentCard">
      <img src={comment.pfp_url}/>
      <div>
        <h4>{comment.username}</h4>
        <p>{comment.content}</p>
      </div>
    </div>
  })

  const handleLike = () => {
    fetch(`http://localhost:3000/poly_likes`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        likeable_type: "Album",
        likeable_id: album.id,
        user_id: userState.user_id
      })
    }).then(res => res.json()).then(console.log)
  }

  return (
  userState.isLoggedIn ?  <div id="album-page-container">
      <Navbar />
      <div id="album-page-wrapper">
          <div id="home-card-container">

            <div id="card-details">
              <h6>@{album.artist}</h6>
              <h6>{album.created_at}</h6>
            </div>

            <div id="home-card-wrapper">
              <img src={album.image_url} onClick={() => navigate(`/album/${album.id}`)}/>
              
              <div id="card-info-display">
                  <div id="info-top">
                    <div id="artist-info">
                      <h3 onClick={() => navigate(`/album/${album.id}`)}>{album.name}</h3>
                      <h5 onClick={() => navigate(`/profile/${album.artist}`)}>{album.artist}</h5>
                    </div>
                    <div id="card-social-btns">
                      <button onClick={handleLike}><BsFillHeartFill/></button>
                      <button onClick={() => navigate(`/album/${album.id}`)}>Comments</button>
                      <button>Likes: {album.likes}</button>
                    </div>
                  </div>
              </div>

          </div>
        </div>
        <div id="content_wrapper">

        <div id="left-container">
          <SongList songs={songs} full={true}/>
        </div>

        <div id="right-container">

          <div id="add-comment">
            <h4>Add A Comment</h4>
            <input type="text" onChange={(e) => setUserComment(e.target.value)}/>
            <button onClick={handleCommentSubmit}>Submit</button>
          </div>

            <p>Comments</p>
          <div id="comment-container">
              {renderComments}
          </div>

        </div>

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
