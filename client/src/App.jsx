import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CreateTrajet from './pages/CreateTrajet';
import Login from './pages/Login';
import Register from './pages/Register';
import Reserve from './pages/Reserve';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create" element={<CreateTrajet />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reserve/:id" element={<Reserve />} />
      </Routes>
    </BrowserRouter>
  );
}