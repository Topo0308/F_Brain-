import { useParams } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

export default function Reserve() {
  const { id } = useParams();
  const [form, setForm] = useState({ nom: '', email: '', telephone: '' });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post(`/api/trajets/${id}/reserve/`, form);
      alert('Réservation réussie');
    } catch (err) {
      alert('Erreur de réservation');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Réserver un trajet</h2>
      <input placeholder="Nom" onChange={e => setForm({ ...form, nom: e.target.value })} />
      <input placeholder="Email" type="email" onChange={e => setForm({ ...form, email: e.target.value })} />
      <input placeholder="Téléphone" onChange={e => setForm({ ...form, telephone: e.target.value })} />
      <button type="submit">Réserver</button>
    </form>
  );
}
