import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [form, setForm] = useState({ username: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/users/register/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      const data = await res.json();
      if (res.ok) {
        alert('Inscription réussie');
        navigate('/login'); 
      } else {
        alert(data.error || 'Une erreur est survenue');
      }
    } catch (error) {
      alert("Erreur réseau");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="username" placeholder="Nom d'utilisateur" onChange={handleChange} />
      <input name="email" type="email" placeholder="Email" onChange={handleChange} />
      <input name="password" type="password" placeholder="Mot de passe" onChange={handleChange} />
      <button type="submit">S'inscrire</button>
    </form>
  );
};

export default Register;
