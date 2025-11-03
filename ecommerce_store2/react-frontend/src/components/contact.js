import React, { useState } from "react";
import "./Auth.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name) {
      errors.name = "Name is required";
    }
    if (!formData.email) {
      errors.email = "Email is required";
    }
    if (!formData.message) {
      errors.message = "Message is required";
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Your message has been sent");
      console.log(formData);
    } else {
      // Handle invalid form
    }
  };

  return (
    <div className="auth-bg">
      <div className="auth-card" style={{ maxWidth: '800px' }}>
        <h2 className="auth-title">Contact Us</h2>
        <p style={{ textAlign: 'center', marginBottom: '1.5rem', color: '#6c757d' }}>
          Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within a matter of hours to help you.
        </p>
        <div style={{ display: 'flex', gap: '2rem' }}>
          <div style={{ flex: 2 }}>
            <form id="contact-form" name="contact-form" onSubmit={handleSubmit} autoComplete="off">
              <div className="auth-form-group">
                <label htmlFor="name" className="auth-label">Your name</label>
                <input type="text" id="name" name="name" className={`auth-input${formData.name ? (formErrors.name ? " input-error" : " input-valid") : ""}`} onChange={handleInputChange} value={formData.name} />
                <div className="auth-error-msg">{formErrors.name}</div>
              </div>

              <div className="auth-form-group">
                <label htmlFor="email" className="auth-label">Your email</label>
                <input type="text" id="email" name="email" className={`auth-input${formData.email ? (formErrors.email ? " input-error" : " input-valid") : ""}`} onChange={handleInputChange} value={formData.email} />
                <div className="auth-error-msg">{formErrors.email}</div>
              </div>

              <div className="auth-form-group">
                <label htmlFor="subject" className="auth-label">Subject</label>
                <input type="text" id="subject" name="subject" className="auth-input" />
              </div>

              <div className="auth-form-group">
                <label htmlFor="message" className="auth-label">Your message</label>
                <textarea id="message" name="message" rows="4" className={`auth-input${formData.message ? (formErrors.message ? " input-error" : " input-valid") : ""}`} onChange={handleInputChange} value={formData.message}></textarea>
                <div className="auth-error-msg">{formErrors.message}</div>
              </div>

              <button type="submit" className="auth-btn">
                Send
              </button>
            </form>
          </div>
          <div style={{ flex: 1, textAlign: 'center', borderLeft: '1px solid #dee2e6', paddingLeft: '2rem' }}>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '1.5rem' }}>
                <i className="fas fa-map-marker-alt fa-2x" style={{ color: '#0d6efd' }}></i>
                <p>Dhaka, Bangladesh</p>
              </li>
              <li style={{ marginBottom: '1.5rem' }}>
                <i className="fas fa-phone mt-4 fa-2x" style={{ color: '#0d6efd' }}></i>
                <p>+880162****43</p>
              </li>
              <li>
                <i className="fas fa-envelope mt-4 fa-2x" style={{ color: '#0d6efd' }}></i>
                <p>pallabr8@gmail.com</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
