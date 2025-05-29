import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleCreateTrajet = () => {
    navigate('/create');
  };

  return (
    <div>
      <h2>Bienvenue sur le Dashboard</h2>
      <p>Contenu réservé aux utilisateurs connectés</p>
      <button onClick={handleCreateTrajet}>
        Créer un trajet
      </button>
    </div>
  );
};

export default Dashboard;
