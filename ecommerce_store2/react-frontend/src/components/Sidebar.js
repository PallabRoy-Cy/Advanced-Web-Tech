//@ts-check
import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
const Sidebar = () => {
  // Check if the user is authenticated by checking the presence of an authentication token
  const isAuthenticated = localStorage.getItem('auth_token');

  if (!isAuthenticated) {
    // If not authenticated, don't render the Sidebar
    return null;
  }

  return (
    <nav className="sidebar-modern">
  <div className="sidebar-menu">
    <div className="sidebar-heading">Core</div>
    <Link className="sidebar-link" to="/dashboard">
      <span className="sb-nav-link-icon"><i className="fas fa-tachometer-alt" /></span>
      Dashboard
    </Link>
    <Link className="sidebar-link" to="/addproduct">
      <span className="sb-nav-link-icon"><i className="fas fa-plus-square" /></span>
      Add Product
    </Link>
    <Link className="sidebar-link" to="/">
      <span className="sb-nav-link-icon"><i className="fas fa-th-list" /></span>
      View Products
    </Link>
    <div className="sidebar-heading">Extras</div>
    <Link className="sidebar-link" to="/charts">
      <span className="sb-nav-link-icon"><i className="fas fa-chart-area" /></span>
      Charts
    </Link>
    <Link className="sidebar-link" to="/tables">
      <span className="sb-nav-link-icon"><i className="fas fa-table" /></span>
      Tables
    </Link>
  </div>
  <div className="sidebar-footer">
    <div style={{opacity:.7}}>Logged in as:</div>
    <div>{localStorage.getItem('auth_name') || 'Admin'}</div>
  </div>
</nav>
  );
};

export default Sidebar;