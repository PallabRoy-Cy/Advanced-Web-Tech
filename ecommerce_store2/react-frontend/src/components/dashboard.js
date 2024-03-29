import React from 'react';
import { Link } from "react-router-dom";



const Dashboard = () => {
if (localStorage.getItem("user")) {
  return (
    <div>
          <div className="container-fluid px-4">

            <h1 className="mt-4">Dashboard</h1>
            <div className="row">
              <div className="col-xl-3 col-md-6">
                <div className="card bg-primary text-white mb-4">
                  <div className="card-body">Primary Card</div>
                  <div className="card-footer d-flex align-items-center justify-content-between">
                    <Link className="small text-white stretched-link" to="#">
                      View Details
                    </Link>
                    <div className="small text-white">
                      <i className="fas fa-angle-right"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6">
                <div className="card bg-warning text-white mb-4">
                  <div className="card-body">Warning Card</div>
                  <div className="card-footer d-flex align-items-center justify-content-between">
                    <Link className="small text-white stretched-link" to="#">
                      View Details
                    </Link>
                    <div className="small text-white">
                      <i className="fas fa-angle-right"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6">
                <div className="card bg-success text-white mb-4">
                  <div className="card-body">Success Card</div>
                  <div className="card-footer d-flex align-items-center justify-content-between">
                    <Link className="small text-white stretched-link" to="#">
                      View Details
                    </Link>
                    <div className="small text-white">
                      <i className="fas fa-angle-right"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6">
                <div className="card bg-danger text-white mb-4">
                  <div className="card-body">Danger Card</div>
                  <div className="card-footer d-flex align-items-center justify-content-between">
                    <Link className="small text-white stretched-link" to="#">
                      View Details
                    </Link>
                    <div className="small text-white">
                      <i className="fas fa-angle-right"></i>
                    </div>
                  </div>
                </div>
              </div>
          

    </div>

    </div>
    </div>
    
  );
} else {
  window.location.href = "/login";
}
};

export default Dashboard;
