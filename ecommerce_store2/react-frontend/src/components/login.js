import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import './Auth.css';
import { isBackendReachable } from '../utils/backendCheck';

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
      const reachable = await isBackendReachable();
      if (reachable) {
        await axios.get('http://localhost:8000/sanctum/csrf-cookie');
        const res = await axios.post('http://localhost:8000/api/login', data, {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          }
        });
        if (res.data.status === 200) {
          localStorage.setItem('auth_token', res.data.token);
          localStorage.setItem('auth_name', res.data.username);
          localStorage.setItem('user', JSON.stringify(res.data.user));
          localStorage.setItem('demo_mode', 'false');
          document.cookie = `XSRF-TOKEN=${res.data.token}; samesite=None; secure`;
          Swal.fire('Success', res.data.message, 'success');
          navigate('/dashboard');
        } else if (res.data.status === 401) {
          setErrorList([res.data.message]);
        } else if (res.data.status === 422) {
          setErrorList(res.data.validation_errors);
        }
      } else {
        // Demo mode: validate against local demo users
        const demoUsers = JSON.parse(localStorage.getItem('demo_users') || '[]');
        const found = demoUsers.find(u => u.email === data.email && u.password === data.password);
        if (found) {
          // create a fake token and set user
          localStorage.setItem('auth_token', 'demo-token');
          localStorage.setItem('auth_name', found.name);
          localStorage.setItem('user', JSON.stringify({ name: found.name, email: found.email }));
          localStorage.setItem('demo_mode', 'true');
          Swal.fire('Demo Mode', 'Logged in using demo mode', 'info');
          navigate('/dashboard');
        } else {
          setErrorList(['Invalid credentials for demo mode. Please register first.']);
        }
      }
    } catch (error) {
      setErrorList(['An error occurred during login. Please try again.']);
      console.error('Error during login request', error);
    } finally {
      setLoading(false);
    }
  };

  const isAuthenticated = localStorage.getItem("user");
  if (!isAuthenticated) {
    return (
      <div className="auth-bg">
        <div className="auth-card">
          <h2 className="auth-title">Login</h2>
          <form onSubmit={submitLogin} method="POST" autoComplete="off">
            <div className="auth-form-group">
              <label htmlFor="login-email" className="auth-label">Email Address</label>
              <input
                id="login-email"
                type="email"
                name="email"
                autoComplete="username"
                onChange={handleInput}
                value={loginInput.email}
                className={`auth-input${loginInput.email?(errorList.email? ' input-error':' input-valid'):''}`}
              />
              <div className="auth-error-msg">{errorList.email||''}</div>
            </div>
            <div className="auth-form-group">
              <label htmlFor="login-password" className="auth-label">Password</label>
              <input
                id="login-password"
                type="password"
                name="password"
                autoComplete="current-password"
                onChange={handleInput}
                value={loginInput.password}
                className={`auth-input${loginInput.password?(errorList.password? ' input-error':' input-valid'):''}`}
              />
              <div className="auth-error-msg">{errorList.password||''}</div>
            </div>
            {errorList && errorList.length > 0 && typeof errorList === 'object' && !errorList.email && !errorList.password && (
              <div className="auth-error-msg" style={{textAlign:'center',marginBottom:12}}>
                {Array.isArray(errorList) ? errorList.map((error, idx) => <p key={idx}>{error}</p>) : <p>{errorList}</p>}
              </div>
            )}
            <button type="submit" className="auth-btn" disabled={loading}>
              {loading ? 'Logging in...' : 'Login'}
            </button>
            <div className="auth-link-row">
              <button
                type="button"
                className="auth-link auth-btn-link"
                onClick={() => navigate('/forgot-password')}
              >
                Forgot Password?
              </button>
               <span className="auth-link">Don't have an account? <a href="/register" className="auth-link">Register</a></span>
            </div>
          </form>
        </div>
      </div>
    );
  } else { 
    window.location.href = "/dashboard";
  }
}
