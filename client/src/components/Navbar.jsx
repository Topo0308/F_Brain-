import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/auth';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();          
    navigate('/'); 
  };

  return (
    <nav >
      {/* Logo section */}
      <div>
        <Link to="/">
          <img
            src="/logo.png"
            alt="Logo"
            style={{ height: '40px' }}
          />
        </Link>
      </div>
      {/* Navigation links */}
      <div>
        <Link to="/">Accueil</Link>
        {user ? (
          <>
            <Link to="/create">Créer un trajet</Link>
            <button onClick={handleLogout}>Se déconnecter</button>
          </>
        ) : (
          <>
            <Link to="/login">Connexion</Link>
            <Link to="/register">Inscription</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
