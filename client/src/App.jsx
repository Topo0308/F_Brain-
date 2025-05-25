import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import CreateTrajet from "./pages/CreateTrajet";
import Reserve from "./pages/Reserve";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import { useState } from "react";
import { AuthProvider, useAuth } from "./context/auth"; // Assure-toi que ce contexte existe

// Composant pour protéger les routes accessibles seulement aux utilisateurs connectés
function ProtectedRoute({ element }) {
  const { user } = useAuth();
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return element;
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
        {/* Si aucune route ne matche, rediriger vers la page d'accueil */}
        <Route path="*" element={<Navigate to="/" replace />} />
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
