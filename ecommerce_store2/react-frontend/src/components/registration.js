import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { useState } from "react";
import "./Auth.css";
import { isBackendReachable } from '../utils/backendCheck';

function Registration() {
  const navigate = useNavigate();

  const [registerInput, setRegisterInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [errorList, setErrorList] = useState([]);

  const handleInput = (e) => {
    setRegisterInput({ ...registerInput, [e.target.name]: e.target.value });
  };

  const submitRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const reachable = await isBackendReachable();
      if (reachable) {
        await axios.get("http://localhost:8000/sanctum/csrf-cookie");
        const response = await axios.post(
          "http://localhost:8000/api/register",
          registerInput,
          {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          }
        );
        if (response.data.status === 200) {
          localStorage.setItem("auth_token", response.data.token);
          localStorage.setItem("auth_name", response.data.username);
          localStorage.setItem("user", JSON.stringify(response.data.user));
          localStorage.setItem('demo_mode', 'false');
          Swal.fire("Success", response.data.message, "success");
          navigate("/dashboard");
        } else if (response.data.status === 422) {
          setErrorList(response.data.validation_errors);
        }
      } else {
        // Demo mode: save user to localStorage demo_users
        const demoUsers = JSON.parse(localStorage.getItem('demo_users') || '[]');
        // Check for existing email
        if (demoUsers.find(u => u.email === registerInput.email)) {
          setErrorList(['Email already registered in demo mode.']);
        } else {
          demoUsers.push({ name: registerInput.name, email: registerInput.email, password: registerInput.password });
          localStorage.setItem('demo_users', JSON.stringify(demoUsers));
          localStorage.setItem('auth_token', 'demo-token');
          localStorage.setItem('auth_name', registerInput.name);
          localStorage.setItem('user', JSON.stringify({ name: registerInput.name, email: registerInput.email }));
          localStorage.setItem('demo_mode', 'true');
          Swal.fire('Demo Mode', 'Registered locally in demo mode', 'info');
          navigate('/dashboard');
        }
      }
    } catch (error) {
      setErrorList(["An error occurred during registration. Please try again."]);
      console.error("Registration failed:", error);
    } finally {
      setLoading(false);
    }
  };

  const isAuthenticated = localStorage.getItem("user");
  if (!isAuthenticated) {
    return (
      <div className="auth-bg">
        <div className="auth-card">
          <h2 className="auth-title">Register</h2>
          <form onSubmit={submitRegister} method="POST" autoComplete="off">
            <div className="auth-form-group">
              <label htmlFor="register-name" className="auth-label">
                Full Name
              </label>
              <input
                id="register-name"
                type="text"
                name="name"
                autoComplete="name"
                onChange={handleInput}
                value={registerInput.name}
                className={`auth-input${registerInput.name ? (errorList.name ? " input-error" : " input-valid") : ""}`}
              />
              <div className="auth-error-msg">{errorList.name || ""}</div>
            </div>
            <div className="auth-form-group">
              <label htmlFor="register-email" className="auth-label">
                Email Address
              </label>
              <input
                id="register-email"
                type="email"
                name="email"
                autoComplete="email"
                onChange={handleInput}
                value={registerInput.email}
                className={`auth-input${registerInput.email ? (errorList.email ? " input-error" : " input-valid") : ""}`}
              />
              <div className="auth-error-msg">{errorList.email || ""}</div>
            </div>
            <div className="auth-form-group">
              <label htmlFor="register-password" className="auth-label">
                Password
              </label>
              <input
                id="register-password"
                type="password"
                name="password"
                autoComplete="new-password"
                onChange={handleInput}
                value={registerInput.password}
                className={`auth-input${registerInput.password ? (errorList.password ? " input-error" : " input-valid") : ""}`}
              />
              <div className="auth-error-msg">{errorList.password || ""}</div>
            </div>
            {errorList &&
              errorList.length > 0 &&
              typeof errorList === "object" &&
              !errorList.email &&
              !errorList.password &&
              !errorList.name && (
                <div className="auth-error-msg" style={{ textAlign: "center", marginBottom: 12 }}>
                  {Array.isArray(errorList)
                    ? errorList.map((error, idx) => <p key={idx}>{error}</p>)
                    : <p>{errorList}</p>}
                </div>
              )}
            <button type="submit" className="auth-btn" disabled={loading}>
              {loading ? "Registering..." : "Register"}
            </button>
            <div className="auth-link-row">
              <span className="auth-link">
                Already have an account? <a href="/login" className="auth-link">Login</a>
              </span>
            </div>
          </form>
        </div>
      </div>
    );
  } else {
    window.location.href = "/dashboard";
  }
}

export default Registration;