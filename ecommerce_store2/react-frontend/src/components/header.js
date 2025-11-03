import React from 'react';
import {Link} from 'react-router-dom';
import { useNavigate  } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';
import { isBackendReachable } from '../utils/backendCheck';
import "../assets/css/styles.css";
import "../assets/js/scripts";


const Header = () => {
      const navigate = useNavigate();
      const clearAuth = (keepDemoUsers = true) => {
        localStorage.removeItem('auth_token');
        localStorage.removeItem('auth_name');
        localStorage.removeItem('user');
        localStorage.removeItem('demo_mode');
        if (!keepDemoUsers) {
          localStorage.removeItem('demo_users');
        }
      };

      const logoutSubmit = async (e) => {
      e.preventDefault();
      const demoMode = localStorage.getItem('demo_mode') === 'true';
      if (demoMode) {
        // Demo logout: clear auth keys but keep demo_users
        clearAuth(true);
        Swal.fire({ icon: 'info', title: 'Demo', text: 'Logged out of demo session' });
        navigate('/login');
        return;
      }

      try {
        const reachable = await isBackendReachable();
        if (!reachable) {
          // Backend not reachable: fallback to local clear
          clearAuth(true);
          Swal.fire({ icon: 'warning', title: 'Offline', text: 'Backend unreachable — cleared local session' });
          navigate('/login');
          return;
        }

        await axios.get('http://localhost:8000/sanctum/csrf-cookie');
        const token = localStorage.getItem('auth_token');
        const config = {
          headers: { Authorization: `Bearer ${token}` }
        };

        const res = await axios.post('http://localhost:8000/api/logout', {}, config);
        if (res.data && res.data.status === 200) {
          clearAuth(true);
          Swal.fire({ icon: 'success', title: 'Success', text: 'Logout Successfully' });
          navigate('/login');
        } else {
          // Unexpected response: still clear local auth
          clearAuth(true);
          Swal.fire({ icon: 'success', title: 'Logged out', text: 'Local session cleared' });
          navigate('/login');
        }
      } catch (err) {
        console.error('Logout failed, clearing local auth', err);
        clearAuth(true);
        Swal.fire({ icon: 'error', title: 'Error', text: 'Could not reach server — cleared local session' });
        navigate('/login');
      }
    }
    var AuthButtons = "";
    if(!localStorage.getItem('auth_token'))
    { AuthButtons =(
      <ul className="navbar-nav">
      <li className="nav-item">
      <Link className="nav-link" to={'/login'}>Login</Link>
    </li>
    
    <li className="nav-item">
      <Link className="nav-link" to={'/register'}>Registretion</Link>
    </li>
  </ul>

    );
        
    }
    else{
      AuthButtons =(
        <ul className="navbar-nav">

        <li className="nav-item">
          <Link className="nav-link active" to={'/dashboard'}>Dashboard</Link>
        </li>

        <li className="nav-item">
        <Link className="nav-link" onClick={logoutSubmit}>Logout</Link>
      </li>

      </ul>
      );
    }

    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow stickt-top">
  <div className="container">
    <Link className="navbar-brand" href="#" to={'/'}>Electronics Store</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to={'/'}>Home</Link>
        </li>
        {AuthButtons}
      </ul>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to={'/contact'}>Contact</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
        

    );
}
export default Header;