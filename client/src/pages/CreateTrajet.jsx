import React, { useState } from 'react';

// Assurez-vous que le contexte Auth est correctement configuré
const CreateTrajet = () => {
  const [form, setForm] = useState({
    lieu_depart: '',
    lieu_arrivee: '',
    date: '',
    heure: '',
    places_disponibles: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/trajets/create/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });
    const data = await res.json();
    alert(data.message || 'Trajet créé');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="lieu_depart" placeholder="Départ" onChange={handleChange} />
      <input name="lieu_arrivee" placeholder="Arrivée" onChange={handleChange} />
      <input name="date" type="date" onChange={handleChange} />
      <input name="heure" type="time" onChange={handleChange} />
      <input name="places_disponibles" type="number" placeholder="Places" onChange={handleChange} />
      <button type="submit">Créer</button>
    </form>
  );
};

export default CreateTrajet;
