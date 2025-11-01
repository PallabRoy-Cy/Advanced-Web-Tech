import React from 'react';
import { Navigate } from 'react-router-dom';


const ProtectedRoute = ({ element: Element, ...rest }) => {
  // Consider the user authenticated if we have an auth token OR demo_mode flag is true
  const hasToken = !!localStorage.getItem('auth_token');
  const demoMode = localStorage.getItem('demo_mode') === 'true';

  if (hasToken || demoMode) {
    return <Element {...rest} />;
  }

  return <Navigate to="/login" replace />;
};

export default ProtectedRoute;
  