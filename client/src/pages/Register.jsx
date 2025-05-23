import React, { useState } from 'react';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    hasDriverLicense: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Données envoyées :', formData);
    // Tu peux maintenant envoyer les données à ton backend ici
  };

  return (
    <div>
      <h2>Créer un compte</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nom d'utilisateur:</label>
          <input type="text" name="username" value={formData.username} onChange={handleChange} required />
        </div>

        <div>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>

        <div>
          <label>Mot de passe:</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </div>

        <div>
          <label>
            <input
              type="checkbox"
              name="hasDriverLicense"
              checked={formData.hasDriverLicense}
              onChange={handleChange}
            />
            J'ai un permis de conduire
          </label>
        </div>

        <button type="submit">S'inscrire</button>
      </form>
    </div>
  );
};

export default Register;
