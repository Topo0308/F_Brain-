import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const Reserve = () => {
  const { id } = useParams();
  const [form, setForm] = useState({ nom: '', email: '', telephone: '' });

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
    <form onSubmit={handleSubmit}>
      <input name="nom" placeholder="Nom" onChange={handleChange} />
      <input name="email" type="email" placeholder="Email" onChange={handleChange} />
      <input name="telephone" placeholder="Téléphone" onChange={handleChange} />
      <button type="submit">Réserver</button>
    </form>
  );
};

export default Reserve;
