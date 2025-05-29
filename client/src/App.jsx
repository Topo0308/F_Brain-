import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import CreateTrajet from './pages/CreateTrajet';
import Reserve from './pages/Reserve';
import { AuthProvider } from './context/auth';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/create" element={<CreateTrajet />} />
            <Route path="/reserve/:id" element={<Reserve />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
