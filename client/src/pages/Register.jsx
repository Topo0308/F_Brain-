import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const [form, setForm] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('/api/auth/register/', form);
      navigate('/login');
    } catch (err) {
      alert('Inscription échouée');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Inscription</h2>
      <input placeholder="Nom d'utilisateur" onChange={e => setForm({ ...form, username: e.target.value })} />
      <input type="password" placeholder="Mot de passe" onChange={e => setForm({ ...form, password: e.target.value })} />
      <button type="submit">S'inscrire</button>
    </form>
  );
}
