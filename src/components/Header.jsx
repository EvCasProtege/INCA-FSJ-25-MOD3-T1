import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <div className="logo">
        <h1>Kodigo Music</h1>
      </div>
      <nav>
        <ul className="flex space-x-4">
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/profile">Perfil</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
