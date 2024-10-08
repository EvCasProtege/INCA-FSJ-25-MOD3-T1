import { useState, useEffect } from 'react';
import AlbumCard from '../components/AlbumCard';

function Home() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    // Simula una llamada a una API para obtener los álbumes
    setAlbums([
      { id: 1, title: 'Album 1', artist: 'Jose Fertando Alvares', cover: 'cover1.jpeg', mp3: '/dawnofchange.mp3' },
      { id: 2, title: 'Album 2', artist: 'Gerardo Jose Montaner', cover: 'cover2.jpeg', mp3: '/yesterday.mp3' },
      // Añade más álbumes según sea necesario
    ]);
  }, []);

  return (
    <div>
      <h1>Bienvenido a Kodigo Music</h1>
      <div className="album-list">
        {albums.map(album => (
          <AlbumCard key={album.id} album={album} />
        ))}
      </div>
    </div>
  );
}

export default Home;
