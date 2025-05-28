import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'  // import

export default function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()  // hook pour redirection

  const handleLogin = async () => {
    try {
      const res = await axios.post('http://localhost:8000/api/token/', {
        username,
        password,
      });
      localStorage.setItem('access', res.data.access);
      localStorage.setItem('refresh', res.data.refresh);
      alert('Connexion réussie');
      navigate('/dashboard')  // redirection vers dashboard
    } catch (err) {
      console.error('Erreur de connexion :', err.response?.data || err.message);
      alert('Échec de connexion');
    }
  };

  return (
    <div>
      <input onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
      <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
