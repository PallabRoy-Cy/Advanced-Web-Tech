import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { useState } from "react";

function Register() {
  const navigate = useNavigate();

  const [registerInput, setRegisterInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errorList, setErrorList] = useState([]);

  const handleInput = (e) => {
    setRegisterInput({ ...registerInput, [e.target.name]: e.target.value });
  };

  const submitRegister = async (e) => {
    e.preventDefault();

    try {
      await axios.get("http://localhost:8000/sanctum/csrf-cookie");
      const response = await axios.post(
        "http://localhost:8000/api/register",
        registerInput
      );

      if (response.data.status === 200) {
        localStorage.setItem("auth_token", response.data.token);
        localStorage.setItem("auth_name", response.data.username);
        Swal.fire("Success", response.data.message, "success");
        navigate("/");
      } else if (response.data.status === 422) {
        setErrorList(response.data.validation_errors);
      }
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  return (
    <div className="registration">
      <div className="registrationback"></div>
      <div className="registrationcontent">
        <div className="regheader">
          <h2>Register</h2>
          <p className="belowregname">Create an account</p>
        </div>
        <form onSubmit={submitRegister} method="POST">
          <div className="card-body">
            <div className="form-group mb-3">
              <label>Full Name</label>
              <input
                type="text"
                name="name"
                onChange={handleInput}
                value={registerInput.name}
                className="form-control"
              />
              <span>{errorList.name}</span>
            </div>
            <div className="form-group mb-3">
              <label>Email address</label>
              <input
                type="email"
                name="email"
                onChange={handleInput}
                value={registerInput.email}
                className="form-control"
              />
              <span>{errorList.email}</span>
            </div>
            <div className="form-group mb-3">
              <label>Password</label>
              <input
                type="password"
                name="password"
                onChange={handleInput}
                value={registerInput.password}
                className="form-control"
              />
              <span>{errorList.password}</span>
            </div>
            <div className="mb-3 form-check">
              <input type="checkbox" className="form-check-input" />
              <label className="form-check-label">Check me out</label>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
