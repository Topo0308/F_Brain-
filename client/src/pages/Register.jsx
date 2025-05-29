import React, { useState } from 'react';

const Register = () => {
  const [form, setForm] = useState({ username: '', email: '', password: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/users/register/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });
    const data = await res.json();
    if (res.ok) alert('Inscription réussie');
    else alert(data.error);
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
