import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Home() {
  const [trajets, setTrajets] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8081/api/trajets/', {
      headers: { Authorization: `Bearer ${localStorage.getItem('access')}` }
    }).then(res => setTrajets(res.data))
  }, [])

  return (
    <div>
      <h1>Liste des trajets</h1>
      <ul>
        {trajets.map(t => (
          <li key={t.id}>{t.lieu_depart} ➡ {t.lieu_arrivee} ({t.places_disponibles} places)</li>
        ))}
      </ul>
    </div>
  )
}
