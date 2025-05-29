import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Home() {
  const [trajets, setTrajets] = useState([]);

  useEffect(() => {
    axios.get('/api/trajets/').then(res => setTrajets(res.data));
  }, []);

  return (
    <div>
      <h1>Liste des trajets</h1>
      <ul>
        {trajets.map(t => (
          <li key={t.id}>
            {t.lieu_depart} - {t.lieu_arrivee} ({t.places_disponibles} places)
            <Link to={`/reserve/${t.id}`}>Réserver</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}