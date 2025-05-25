import { useEffect, useState } from 'react'
import axios from 'axios'
import CreateTrajet from './CreateTrajet'

export default function Dashboard() {
  const [trajets, setTrajets] = useState([])
  const token = localStorage.getItem('access')

  // Récupérer les trajets à chaque chargement
  useEffect(() => {
    if (!token) return

    axios.get('http://localhost:8081/api/trajets/', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => setTrajets(res.data))
      .catch(err => console.error('Erreur auth:', err))
  }, [token])

  // Fonction pour rafraîchir la liste des trajets après création
  const refreshTrajets = () => {
    if (!token) return
    axios.get('http://localhost:8081/api/trajets/', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => setTrajets(res.data))
      .catch(err => console.error('Erreur auth:', err))
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Mes Trajets</h1>
      <ul className="mb-8">
        {trajets.length === 0 && <li>Aucun trajet pour le moment.</li>}
        {trajets.map(trajet => (
          <li key={trajet.id} className="border-b py-2">
            {trajet.lieu_depart} → {trajet.lieu_arrivee} - {trajet.date} à {trajet.heure} ({trajet.places_disponibles} places)
          </li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mb-4">Créer un nouveau trajet</h2>
      <CreateTrajet refreshTrajets={refreshTrajets} />
    </div>
  )
}
