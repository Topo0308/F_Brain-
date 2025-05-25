import React from 'react';
import styled from 'styled-components';
import { useAuth } from '../context/auth';

const Nav = styled.nav`
  background-color: #007bff;
  padding: 10px 20px;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Buttons = styled.div`
  display: flex;
  gap: 10px;
`;

const Button = styled.button`
  background: white;
  color: #007bff;
  border: none;
  padding: 8px 12px;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background: #e0e0e0;
  }
`;

const Title = styled.h1`
  margin: 0;
  font-size: 1.5rem;
`;

export default function Navbar({ onLoginClick, onSignupClick, onCreateTripClick }) {
  const { user, logout } = useAuth();

  return (
    <Nav>
      <Title>EASY-WAY</Title>
      <Buttons>
        {!user ? (
          <>
            <Button onClick={onLoginClick}>Se connecter</Button>
            <Button onClick={onSignupClick}>Créer un compte</Button>
          </>
        ) : (
          <>
            <Button onClick={onCreateTripClick}>Créer un trajet</Button>
            <Button onClick={logout}>Déconnexion</Button>
          </>
        )}
      </Buttons>
    </Nav>
  );
}
