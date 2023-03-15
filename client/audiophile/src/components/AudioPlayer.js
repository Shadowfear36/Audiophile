import React, { useState, useRef, useEffect } from 'react';
import './audioplayer.css';
import { BsFillPlayFill, BsFillPauseFill } from "react-icons/bs"

function AudioPlayer(props) {
  //set states
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(0.5);
  const [duration, setDuration] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
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
  }, []);

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

  return (
    <div id="audio-player-container">
        <img id="album" src="https://place-hold.it/75"/>
        <div id="artist-info">
            <h3>SongName</h3>
            <h5>Artist Name</h5>
        </div>
    <div className="audio-player">
      <audio ref={audioRef} src={props.src} />
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
                <button>{'<<'}</button>
                <button id="audio-btn" onClick={handlePlayPauseClick}>
                {isPlaying ? <BsFillPauseFill size={30}/> : <BsFillPlayFill size={30}/>}
                </button>
                <button>{'>>'}</button>
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