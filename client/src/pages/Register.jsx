import { useState } from 'react';
import './RegisterForm.css';
export default function RegisterForm() {
  const [form, setForm] = useState({
    username: '',
    email: '',
    tel: '',
    has_permis: false,
    password: '',
    password2: '',
  });

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if(form.password !== form.password2){
      alert("Les mots de passe ne correspondent pas.");
      return;
    }

    const res = await fetch('http://localhost:8000/api/register/', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(form),
    });
    const data = await res.json();

    if(res.ok){
      alert('Inscription réussie!');
      // redirige ou connecte l'utilisateur
    } else {
      alert('Erreur: ' + JSON.stringify(data));
    }
  };

  return (
    <form className="register-form" nSubmit={handleSubmit}>
      <input name="username" value={form.username} onChange={handleChange} placeholder="Nom" required />
      <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email" required />
      <input name="tel" value={form.tel} onChange={handleChange} placeholder="Téléphone" />
      <label>
        <input name="has_permis" type="checkbox" checked={form.has_permis} onChange={handleChange} />
        Avez-vous un permis ?
      </label>
      <input name="password" type="password" value={form.password} onChange={handleChange} placeholder="Mot de passe" required />
      <input name="password2" type="password" value={form.password2} onChange={handleChange} placeholder="Confirmer mot de passe" required />
      <button type="submit">S'inscrire</button>
    </form>
  );
}
