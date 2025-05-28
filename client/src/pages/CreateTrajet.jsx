import { useState } from 'react'
import axios from 'axios'

export default function CreateTrajet({ refreshTrajets }) {
  const [form, setForm] = useState({
    lieu_depart: '',
    lieu_arrivee: '',
    date: '',
    heure: '',
    places_disponibles: 1,
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.post('http://localhost:8081/api/trajets/', form, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access')}`,
        },
      })
      alert('Trajet créé avec succès !')
      setForm({
        lieu_depart: '',
        lieu_arrivee: '',
        date: '',
        heure: '',
        places_disponibles: 1,
      })
      if (refreshTrajets) refreshTrajets()
    } catch (err) {
      alert("Erreur lors de la création")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4 p-4 bg-white shadow-md rounded">
      <input name="lieu_depart" placeholder="Départ" value={form.lieu_depart} onChange={handleChange} className="w-full border p-2" />
      <input name="lieu_arrivee" placeholder="Arrivée" value={form.lieu_arrivee} onChange={handleChange} className="w-full border p-2" />
      <input type="date" name="date" value={form.date} onChange={handleChange} className="w-full border p-2" />
      <input type="time" name="heure" value={form.heure} onChange={handleChange} className="w-full border p-2" />
      <input type="number" name="places_disponibles" value={form.places_disponibles} onChange={handleChange} className="w-full border p-2" />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Créer Trajet</button>
    </form>
  )
}
