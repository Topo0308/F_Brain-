import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/auth';  

const Login = () => {
  const { login } = useContext(AuthContext); 
  const [form, setForm] = useState({ username: '', password: '' });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    try {
      const res = await fetch('http://127.0.0.1:8000/api/users/login/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) {
        login(data.username);  
        setMessage('Connexion réussie');
        setTimeout(() => {
          navigate('/dashboard');
        }, 1000);
      } else {
        setMessage(data.error || 'Erreur inconnue');
      }
    } catch (err) {
      setMessage('Erreur réseau');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="username"
        placeholder="Nom d'utilisateur"
        value={form.username}
        onChange={handleChange}
      />
      <input
        name="password"
        type="password"
        placeholder="Mot de passe"
        value={form.password}
        onChange={handleChange}
      />
      <button type="submit">Se connecter</button>
      {message && <p>{message}</p>}
    </form>
  );
};

export default Login;
