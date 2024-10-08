import PropTypes from 'prop-types';
import AudioPlayer from './AudioPlayer';

function AlbumCard({ album }) {
  return (
    <div className="album-card">
      <img src={album.cover} alt={album.title} className="album-cover" />
      <h3 className="album-title">{album.title}</h3>
      <p className="album-artist">{album.artist}</p>
      <AudioPlayer src={album.mp3} />
    </div>
  );
}

AlbumCard.propTypes = {
  album: PropTypes.shape({
    cover: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    artist: PropTypes.string.isRequired,
    mp3: PropTypes.string.isRequired,
  }).isRequired,
};

export default AlbumCard;
