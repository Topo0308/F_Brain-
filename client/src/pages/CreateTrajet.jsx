import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function CreateTrajet() {
  const [form, setForm] = useState({
    lieu_depart: '',
    lieu_arrivee: '',
    date: '',
    heure: '',
    places_disponibles: '',
    conducteur: 1 // ID fictif si auth manuelle, à améliorer plus tard
  });

  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('/api/trajets/create/', form);
      navigate('/');
    } catch (err) {
      alert('Erreur lors de la création');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Créer un trajet</h2>
      <input placeholder="Lieu de départ" onChange={e => setForm({ ...form, lieu_depart: e.target.value })} />
      <input placeholder="Lieu d’arrivée" onChange={e => setForm({ ...form, lieu_arrivee: e.target.value })} />
      <input type="date" onChange={e => setForm({ ...form, date: e.target.value })} />
      <input type="time" onChange={e => setForm({ ...form, heure: e.target.value })} />
      <input type="number" placeholder="Places disponibles" onChange={e => setForm({ ...form, places_disponibles: e.target.value })} />
      <button type="submit">Créer</button>
    </form>
  );
}
