import React from 'react';
import {Link} from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';

const Navbar = () => {
  const history = useHistory();
  const logoutSubmit = (e) => {
      e.preventDefault();
      axios.post('/api/logout').then(res => {
          if (res.status === 200) {
              localStorage.removeItem('auth_token');
              localStorage.removeItem('auth_name');
              Swal.fire("Succes",res.data.message,"success");
              history.push('/login');
          }

      });
      
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
        <Link className="nav-link" onClick={logoutSubmit}>Logout</Link>
      </li>
      </ul>
      );
    }

    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow stickt-top">
  <div className="container">
    <Link className="navbar-brand" href="#" to={''}>Electronics Store</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to={'/'}>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link disabled" to={'#'}>Collection</Link>
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
export default Navbar;