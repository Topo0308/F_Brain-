import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [trajets, setTrajets] = useState([]);

  useEffect(() => {
    fetch('/api/trajets/')
      .then(res => res.json())
      .then(data => setTrajets(data));
  }, []);

  return (
    <div>
      <h2>Liste des trajets</h2>
      <ul>
        {trajets.map(trajet => (
          <li key={trajet.id}>
            {trajet.lieu_depart} ➔ {trajet.lieu_arrivee} le {trajet.date} à {trajet.heure} |
            <Link to={`/reserve/${trajet.id}`}> Réserver </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
