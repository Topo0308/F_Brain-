import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


function Home() {
  const [trajets, setTrajets] = useState([]);

  useEffect(() => {
    const fetchTrajets = async () => {
      try {
        const res = await fetch('http://127.0.0.1:8000/api/trajets/');
        const data = await res.json();
        setTrajets(data);
      } catch (err) {
        console.error('Erreur lors du chargement des trajets', err);
      }
    };

    fetchTrajets();
  }, []);

  return (
    <div>
      <h1>Bienvenue sur la plateforme de covoiturage</h1>
      <h2>Trajets disponibles :</h2>
      {trajets.length === 0 ? (
        <p>Aucun trajet pour le moment.</p>
      ) : (
        <ul>
          {trajets.map((trajet) => (
            <li key={trajet.id}>
              <strong>{trajet.lieu_depart}</strong> ➜ <strong>{trajet.lieu_arrivee}</strong><br />
              {trajet.date} à {trajet.heure} — {trajet.places_disponibles} places
              <br />
              <Link to={`/reserve/${trajet.id}`}>Réserver</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Home;
