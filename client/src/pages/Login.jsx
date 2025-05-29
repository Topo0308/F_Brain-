import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [form, setForm] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('/api/auth/login/', form);
      navigate('/');
    } catch (err) {
      alert('Connexion échouée');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Connexion</h2>
      <input placeholder="Nom d'utilisateur" onChange={e => setForm({ ...form, username: e.target.value })} />
      <input type="password" placeholder="Mot de passe" onChange={e => setForm({ ...form, password: e.target.value })} />
      <button type="submit">Se connecter</button>
    </form>
  );
}
