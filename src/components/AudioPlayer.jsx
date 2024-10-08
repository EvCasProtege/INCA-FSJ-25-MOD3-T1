import { useRef } from 'react';
import PropTypes from 'prop-types';

function AudioPlayer({ src }) {
  const audioRef = useRef(null);

  const playAudio = () => {
    audioRef.current.play();
  };

  const pauseAudio = () => {
    audioRef.current.pause();
  };

  return (
    <div className="audio-player">
      <audio ref={audioRef} src={src} />
      <div className="controls">
        <button onClick={playAudio}>Play</button>
        <button onClick={pauseAudio}>Pause</button>
      </div>
    </div>
  );
}

AudioPlayer.propTypes = {
  src: PropTypes.string.isRequired,
};

export default AudioPlayer;
