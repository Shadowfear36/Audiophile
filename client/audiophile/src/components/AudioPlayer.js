import React, { useState, useRef, useEffect } from 'react';

export default function AudioPlayer(props) {

  // create states
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  // create reference to audio
  const audioRef = useRef(null);

  // update current time and duration on mount and on song change
  useEffect(() => {
    const handleLoadedMetadata = () => {
      setDuration(audioRef.current.duration);
    };

    const handleTimeUpdate = () => {
      setCurrentTime(audioRef.current.currentTime);
    };

    audioRef.current.addEventListener('loadedmetadata', handleLoadedMetadata);
    audioRef.current.addEventListener('timeupdate', handleTimeUpdate);

    return () => {
      audioRef.current.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audioRef.current.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, [props.src]);

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  // skip forwards by 30 seconds
  const handleSkipForward = () => {
    audioRef.current.currentTime += 30;
  };

  // skip backwards by 30 seconds
  const handleSkipBackward = () => {
    audioRef.current.currentTime -= 30;
  };

  // update volume based on range update
  const handleVolumeChange = (event) => {
    const newVolume = event.target.value;
    setVolume(newVolume);
    audioRef.current.volume = newVolume;
  };

  // calculate progress percentage
  const progress = (currentTime / duration) * 100;

  return (
    <div>
      <audio src={props.src} ref={audioRef} />
      <button onClick={handlePlayPause}>{isPlaying ? 'Pause' : 'Play'}</button>
      <button onClick={handleSkipBackward}>Skip Backward</button>
      <button onClick={handleSkipForward}>Skip Forward</button>
      <br />
      <label>
        Volume:
        <input
          type="range"
          min="0"
          max="1"
          step="0.1"
          value={volume}
          onChange={handleVolumeChange}
        />
      </label>
      <br />
      <div className="progress-bar-container">
        <div className="progress-bar"></div>
      </div>
    </div>
  );
}
