import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Reserve = () => {
  const { id } = useParams();
  const [trajet, setTrajet] = useState(null);
  const [form, setForm] = useState({
    nom: '',
    email: '',
    telephone: '',
    places_souhaitees: 1
  });

  // Récupère les infos du trajet pour afficher les places restantes
  useEffect(() => {
    fetch(`/api/trajets/${id}/`)
      .then(res => res.json())
      .then(data => setTrajet(data));
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(`/api/trajets/${id}/reserve/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });
    const data = await res.json();
    alert(data.message || data.error);
  };

  return (
    <div>
      <h2>Réservation</h2>
      {trajet && (
        <p>Places disponibles : {trajet.places_disponibles}</p>
      )}
      <form onSubmit={handleSubmit}>
        <input name="nom" placeholder="Nom" onChange={handleChange} required />
        <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
        <input name="telephone" placeholder="Téléphone" onChange={handleChange} required />
        <input
          name="places_souhaitees"
          type="number"
          placeholder="Nombre de places"
          min="1"
          max={trajet ? trajet.places_disponibles : 1}
          onChange={handleChange}
          value={form.places_souhaitees}
          required
        />
        <button type="submit">Réserver</button>
      </form>
    </div>
  );
};

export default Reserve;
