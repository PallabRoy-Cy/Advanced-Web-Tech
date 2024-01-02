import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';


axios.defaults.withCredentials = true;

export default function Login() {
  const navigate = useNavigate();
  const [loginInput, setLogin] = useState({
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const [errorList, setErrorList] = useState([]);

  const handleInput = (e) => {
    setLogin({ ...loginInput, [e.target.name]: e.target.value });
  };

  const submitLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = {
      email: loginInput.email,
      password: loginInput.password,
    };

    try {
      // Attempt to get CSRF cookie
      await axios.get('http://localhost:8000/sanctum/csrf-cookie');

      // Proceed with the login request
      const res = await axios.post('http://localhost:8000/api/login', data, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        }
      });

      if (res.data.status === 200) {
        // Successful login
        localStorage.setItem('auth_token', res.data.token);
        localStorage.setItem('auth_name', res.data.username);
        localStorage.setItem('user', JSON.stringify(res.data.user));
        document.cookie = `XSRF-TOKEN=${res.data.token}; samesite=None; secure`;
        Swal.fire('Success', res.data.message, 'success');
        navigate('/dashboard'); // Redirect to the root path
      } else if (res.data.status === 401) {
        // Unauthorized status, handle accordingly
        setErrorList([res.data.message]);
      } else if (res.data.status === 422) {
        // Validation errors
        setErrorList(res.data.validation_errors);
      }
    } catch (error) {
      // Handle any errors that occurred during the requests
      setErrorList(['An error occurred during login. Please try again.']);
      console.error('Error during login request', error);
    } finally {
      setLoading(false);
    }
  };
  const isAuthenticated = localStorage.getItem("user");
  if (!isAuthenticated) {
  return (
    <div>
      <form onSubmit={submitLogin} method="POST">
        <div className="card-header">
          <h4>Login</h4>
        </div>
        <div className="card-body">
          <div className="form-group mb-3">
            <label>Email address</label>
            <input
              type="email"
              name="email"
              onChange={handleInput}
              value={loginInput.email}
              className="form-control"
            />
            {errorList && errorList.email && (
              <span className="text-danger">{errorList.email}</span>
            )}
          </div>
          <div className="form-group mb-3">
            <label>Password</label>
            <input
              type="password"
              name="password"
              onChange={handleInput}
              value={loginInput.password}
              className="form-control"
            />
            {errorList && errorList.password && (
              <span className="text-danger">{errorList.password}</span>
            )}
          </div>
          {errorList && errorList.length > 0 && (
            <div className="alert alert-danger">
              {Array.isArray(errorList) ? (
                errorList.map((error, index) => (
                  <p key={index}>{error}</p>
                ))
              ) : (
                <p>{errorList}</p>
              )}
            </div>
          )}
          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? 'Logging in...' : 'Submit'}
          </button>
          <br />
          <p className="forgot-password text-right">
            Don't have an account? <a href="/register">Register</a>
          </p>
        </div>
      </form>
    </div>
  );
} else { 
  window.location.href = "/dashboard";
  }
}
