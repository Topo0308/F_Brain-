import React, { useState, useEffect } from 'react';

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}

const CreateTrajet = () => {
  const [form, setForm] = useState({
    lieu_depart: '',
    lieu_arrivee: '',
    date: '',
    heure: '',
    places_disponibles: ''
  });

  // On récupère le cookie CSRF dès que le composant est chargé
  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/users/csrf/', {
      method: 'GET',
      credentials: 'include',
    });
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const csrfToken = getCookie('csrftoken');

    if (!csrfToken) {
      alert("Erreur : token CSRF introuvable. Recharge la page.");
      return;
    }

    const res = await fetch('http://127.0.0.1:8000/api/trajets/create/', {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'X-CSRFToken': csrfToken,
      },
      credentials: 'include',
      body: JSON.stringify(form)
    });

    const data = await res.json();
    alert(data.message || data.error || 'Réponse inconnue');
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
