import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Dashboard() {
  const [trajets, setTrajets] = useState([]);

  useEffect(() => {
    axios.get('/api/trajets/').then(res => setTrajets(res.data));
  }, []);

  return (
    <div>
      <h2>Tableau de bord</h2>
      <ul>
        {trajets.map(t => (
          <li key={t.id}>
            {t.lieu_depart} → {t.lieu_arrivee} ({t.date} à {t.heure}) — {t.places_disponibles} places
          </li>
        ))}
      </ul>
    </div>
  );
}
