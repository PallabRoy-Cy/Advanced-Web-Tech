import React from 'react';
import { Route, Navigate } from 'react-router-dom';


const ProtectedRoute = ({ element: Element, ...rest }) => {
    const isAuthenticated  = !!localStorage.getItem('user'); // Check if the user is logged in
  
    return (
      <Route
        {...rest}
        element={isAuthenticated ? <Navigate to="/dashboard" /> : <Element />}
      />
     
    );
  };

export default ProtectedRoute;
  