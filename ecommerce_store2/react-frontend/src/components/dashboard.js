import React from 'react';
import { Link } from "react-router-dom";
import './Dashboard.css';


const Dashboard = () => {
  return (
    <div className="dashboard-bg">
      <div className="dashboard-title">Dashboard</div>
      <div className="dashboard-grid">
        <div className="dashboard-card" data-type="primary">
          <span className="icon"><i className="fas fa-cubes"></i></span>
          <div className="card-label">Primary Card</div>
          <div className="card-footer">
            <Link className="view-link" to="#">View Details</Link>
            <span><i className="fas fa-angle-right"></i></span>
          </div>
        </div>
        <div className="dashboard-card" data-type="warning">
          <span className="icon"><i className="fas fa-exclamation-triangle"></i></span>
          <div className="card-label">Warning Card</div>
          <div className="card-footer">
            <Link className="view-link" to="#">View Details</Link>
            <span><i className="fas fa-angle-right"></i></span>
          </div>
        </div>
        <div className="dashboard-card" data-type="success">
          <span className="icon"><i className="fas fa-check-circle"></i></span>
          <div className="card-label">Success Card</div>
          <div className="card-footer">
            <Link className="view-link" to="#">View Details</Link>
            <span><i className="fas fa-angle-right"></i></span>
          </div>
        </div>
        <div className="dashboard-card" data-type="danger">
          <span className="icon"><i className="fas fa-bolt"></i></span>
          <div className="card-label">Danger Card</div>
          <div className="card-footer">
            <Link className="view-link" to="#">View Details</Link>
            <span><i className="fas fa-angle-right"></i></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
