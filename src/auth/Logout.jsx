import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Button from 'react-bootstrap/Button';
import '../styles/Auth.css';

function LogoutButton() {
  const { isAuthenticated, logout } = useAuth0();

  function handleLogout() {
    logout({ returnTo: window.location.origin });
  }

  return (
    isAuthenticated && (
      <Button onClick={handleLogout} id='logout-style-button'>
        Log out
      </Button>
    )
  );
}

export default LogoutButton;
