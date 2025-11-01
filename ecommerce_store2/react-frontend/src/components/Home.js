import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Contact from './contact';
import { demoProducts } from '../assets/assets/demo/demoProducts';
import './Home.css';

export default function Home() {
  const navigate = useNavigate();
  const [featured, setFeatured] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [isUsingDemo, setIsUsingDemo] = useState(false);

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
            <Link className="btn btn-outline-light hero-btn" to="/categories">View Categories</Link>
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
          <div className="contact-card">
            <Contact />
          </div>
        </div>
      </section>
    </div>
  );
}


