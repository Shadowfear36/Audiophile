import React, { useState, useRef, useEffect, useContext } from 'react';
import './audioplayer.css';
import { BsFillPlayFill, BsFillPauseFill } from "react-icons/bs"
import { UserContext } from "../context/user";


function AudioPlayer() {

  // initialize User Context
  const { userState, setUserState } = useContext(UserContext);

  const [index, setIndex] = useState(0)

  
  const checkIfQueueIsEmpty = () => {
    if (userState.queue.length === 0) {
      return false
    } else {
      return true
    }
  }

  const blankQueue = {
      "id": 1,
      "name": "Add A Song",
      "user_id": 1,
      "audio_url": null,
      "artist": "username",
      "album": {
        "id": 1,
        "name": "First Album",
        "user_id": 1,
        "likes": [],
        "created_at": "2023-03-20T15:48:48.446Z",
        "updated_at": "2023-03-20T15:48:48.446Z"
      }
  }

  
  const [currentSong, setCurrentSong] = useState(checkIfQueueIsEmpty()? userState.queue[index] : blankQueue)

  // console.log(currentSong2);

  //set states
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(0.5);
  const [duration, setDuration] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isEnded, setIsEnded] = useState();
  // create a reference to the Audio tag itself
  const audioRef = useRef(null);

  //useEffect to ensure it only attempts to fetch metadata once
  useEffect(() => {
    const audio = audioRef.current;

    //updates time location of song
    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    // updates song duration from file metadata
    const handleLoadedMetadata = () => {
      setDuration(audio.duration);
    };

    //event listeners to call on above functions
    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('loadedmetadata', handleLoadedMetadata);

    //once metadata retrieved quit listening for changes
    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
    };
  }, [audioRef.current]);

  //handle volume change on range
  const handleVolumeChange = (event) => {
    setVolume(event.target.value);
    audioRef.current.volume = event.target.value;
  };

  //handle time change on progress range
  const handleTimeChange = (event) => {
    setCurrentTime(event.target.value);
    audioRef.current.currentTime = event.target.value;
  };

  //play pause handler
  const handlePlayPauseClick = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  // useEffec
  // setIsEnded(audioRef.current.ended)

  // audioRef.current.ended ? setIndex(index + 1) : console.log('playing');


  const handleNext = (e) => {
    e.preventDefault();
    if (index < userState.queue.length - 1) {
      setIndex(index + 1)
      setCurrentSong(userState.queue[index]);
      setCurrentTime(0);
    }else {
      console.log("Nothing left to skip to");
    }
  }

  const handlePrev = (e) => {
    e.preventDefault();
    if (index > 1) {
      setIndex(index - 1)
      setCurrentSong(userState.queue[index]);
    }else {
      console.log("Nothing left to go back to");
    }
  }

  return (
    <div id="audio-player-container">
        <img id="album" src="https://place-hold.it/75"/>
        <div id="artist-info2">
            <h3>{currentSong.name}</h3>
            <h5>@{currentSong.artist}</h5>
        </div>
    <div className="audio-player">
      <audio ref={audioRef} src={currentSong.audio_url} />
            <div id="volume-container">
                <label id="volume-wrapper">
                    Volume
                    <input
                    id="volume-controller"
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={volume}
                    onChange={handleVolumeChange}
                    />
                </label>
            </div>
        <div id="top-player">
            <div id="audio-btn-container">
                <button onClick={handlePrev}>{'<<'}</button>
                <button id="audio-btn" onClick={handlePlayPauseClick}>
                {isPlaying ? <BsFillPauseFill size={30}/> : <BsFillPlayFill size={30}/>}
                </button>
                <button onClick={handleNext}>{'>>'}</button>
            </div>
        </div>
        <div id="bottom-player">
            <label id="time-scrub-wrapper">
                <input
                id="time-scrub"
                type="range"
                min="0"
                max={duration}
                value={currentTime}
                onChange={handleTimeChange}
                />
                {Math.floor(currentTime)}/{Math.floor(duration)}
            </label>
          </div>
      </div>
    </div>
  );
}

export default AudioPlayer;