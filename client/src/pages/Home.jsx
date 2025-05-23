import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Home() {
  const [trajets, setTrajets] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Ne plus bloquer si pas de token
    axios.get('http://localhost:8081/api/trajets/')
      .then(res => setTrajets(res.data))
      .catch(err => {
        setError("Erreur lors du chargement des trajets.");
        console.error(err);
      });
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Liste des trajets</h1>

      {error ? (
        <div className="text-red-600">{error}</div>
      ) : (
        <>
          {trajets.length === 0 ? (
            <p>Aucun trajet disponible pour le moment.</p>
          ) : (
            trajets.map(t => (
              <div key={t.id} className="border p-4 rounded shadow mb-4 bg-white">
                <div className="font-bold text-lg">{t.lieu_depart} ➡ {t.lieu_arrivee}</div>
                <div>{t.date} à {t.heure} — {t.places_disponibles} place(s)</div>
                <Link to={`/reserve/${t.id}`} className="text-blue-600 hover:underline mt-2 inline-block">
                  Réserver
                </Link>
              </div>
            ))
          )}
        </>
      )}
    </div>
  );
}
