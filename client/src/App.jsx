import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import CreateTrajet from "./pages/CreateTrajet";
import Reserve from "./pages/Reserve";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import { AuthProvider, useAuth } from "./context/auth";
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function ProtectedRoute({ element }) {
  const { user } = useAuth();
  return user ? element : <Navigate to="/login" />;
}

function AppRoutes() {
  const navigate = useNavigate();

  const handleLoginClick = () => navigate("/login");
  const handleSignupClick = () => navigate("/register");
  const handleCreateTripClick = () => navigate("/create");

  return (
    <>
      <Navbar
        onLoginClick={handleLoginClick}
        onSignupClick={handleSignupClick}
        onCreateTripClick={handleCreateTripClick}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<ProtectedRoute element={<CreateTrajet />} />} />
        <Route path="/reserve/:id" element={<Reserve />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppRoutes />
      </Router>
    </AuthProvider>
  );
}

export default App;
