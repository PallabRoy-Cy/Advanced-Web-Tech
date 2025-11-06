import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { demoProducts } from '../assets/assets/demo/demoProducts';
import './Home.css';
import "./Auth.css";

export default function Home() {
  const navigate = useNavigate();
  const [featured, setFeatured] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [isUsingDemo, setIsUsingDemo] = useState(false);

  // Contact form state and handlers
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
    if (!formData.name) errors.name = "Name is required";
    if (!formData.email) errors.email = "Email is required";
    if (!formData.message) errors.message = "Message is required";
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Your message has been sent");
      console.log(formData);
    }
  };

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/featured?limit=8')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch featured products');
        return res.json();
      })
      .then((data) => {
        setFeatured(Array.isArray(data) ? data : []);
        setIsUsingDemo(false);
      })
      .catch((e) => {
        console.warn('API unavailable, showing demo featured products.');
        setFeatured(demoProducts.slice(0, 8));
        setIsUsingDemo(true);
        setError('');
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-overlay" />
        <div className="hero-content container">
          <h1 className="hero-title">Your Next Favorite Gadget Awaits</h1>
          <p className="hero-subtitle">Discover curated electronics at great prices. Fast shipping. Easy returns.</p>
          <div className="hero-actions">
            <button className="btn btn-primary hero-btn" onClick={() => navigate('/products')}>Shop Now</button>
            {/* <Link className="btn btn-outline-light hero-btn" to="/categories">View Categories</Link> */}
            
            <a className="btn btn-portfolio hero-btn" href="https://pallabroy.netlify.app/" target="_blank" rel="noopener noreferrer">Visit My Portfolio</a>

          </div>
        </div>
      </section>

      <section className="featured container">
        <div className="featured-header">
          <h2 className="section-title">Featured Products</h2>
          <Link to="/products" className="view-all">View all</Link>
        </div>
        
        {isUsingDemo && (
          <div className="demo-notification">
            <i className="fa-solid fa-info-circle"></i>
            <span>API unavailable, showing demo products.</span>
          </div>
        )}

        {loading && <div className="loading">Loading...</div>}
        {error && !loading && <div className="error">{error}</div>}

        {!loading && !error && (
          <div className="grid">
            {featured.map((item) => (
              <div className="card" key={item.id}>
                <div className="thumb">
                  <img src={isUsingDemo ? item.pdimg : `http://127.0.0.1:8000/${item.pdimg}`} alt={item.product} />
                </div>
                <div className="info">
                  <h3 title={item.product}>{item.product}</h3>
                  <p className="brand" title={item.manufacturer}>{item.manufacturer}</p>
                  <div className="meta">
                    <span className="price">${item.price}</span>
                    <Link to={`/products`} className="link">Details</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      <section className="contact-section">
        <div className="container">
          {/* The auth-card provides the white background and padding */}
          <div className="auth-card" style={{ maxWidth: '800px', margin: 'auto' }}>
            <h2 className="auth-title">Contact Us</h2>
            <p style={{ textAlign: 'center', marginBottom: '1.5rem', color: '#6c757d' }}>
              Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within a matter of hours to help you.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
              <div style={{ flex: '2 1 400px' }}>
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

                  <button type="submit" className="auth-btn">Send</button>
                </form>
              </div>
              <div style={{ flex: '1 1 200px', textAlign: 'center', borderLeft: '1px solid #dee2e6', paddingLeft: '2rem' }}>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li style={{ marginBottom: '1.5rem' }}><i className="fas fa-map-marker-alt fa-2x" style={{ color: '#0d6efd' }}></i><p>Dhaka, Bangladesh</p></li>
                  <li style={{ marginBottom: '1.5rem' }}><i className="fas fa-phone mt-4 fa-2x" style={{ color: '#0d6efd' }}></i><p>+880162****43</p></li>
                  <li><i className="fas fa-envelope mt-4 fa-2x" style={{ color: '#0d6efd' }}></i><p>pallabr8@gmail.com</p></li>
                </ul>
              </div>
            </div>
          </div> {/* End auth-card */}
        </div>
      </section>
    </div>
  );
}