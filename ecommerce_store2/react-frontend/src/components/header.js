import React from 'react';
import {Link} from 'react-router-dom';
import { useNavigate  } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';
import "../assets/css/styles.css";
import "../assets/js/scripts";


const Header = () => {
      const navigate = useNavigate();
      const logoutSubmit = async (e) => {
      e.preventDefault();
      await axios.get('http://localhost:8000/sanctum/csrf-cookie');
      const token = localStorage.getItem('auth_token');
      const config = {
        headers: { Authorization: `Bearer ${token}` }
    };

    axios.post('http://localhost:8000/api/logout',{},config).then(res=>{
      if(res.data.status === 200)
      {
        localStorage.clear();
        Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: 'Logout Successfully',
        });
        navigate('/login');
      }
    } 
       
    );
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
      <form className="d-flex">
      </form>
    </div>
  </div>
</nav>
        

    );
}
export default Header;