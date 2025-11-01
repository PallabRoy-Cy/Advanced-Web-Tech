import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Sidebar from './components/Sidebar';
import Dashboard from './components/dashboard';
import Login from './components/login';
import AddProduct from './components/addproduct';
import ProtectedRoute from './components/ProtectedRoute';
import Update from './components/update';
import MyProducts from './components/myproducts';
import Cart from './components/cart';
import Register from './components/registration';
import axios from 'axios';
import AllProducts from './components/allproducts';
import Contact from './components/contact';
import Home from './components/Home';
import './components/Layout.css';

axios.defaults.withCredentials = true;

function App() {
  const location = useLocation();

  // Only show sidebar for dashboard-related routes
  const isDashboardRoute = () => {
    const dashboardPaths = [
      '/dashboard',
      '/addproduct',
      '/myproducts',
      '/myproducts/update',
      '/cart',
      '/tables',
      '/charts'
    ];
    // Allow for dynamic params (e.g., /myproducts/update/:id)
    return dashboardPaths.some((path) => location.pathname.startsWith(path));
  };

  return (
    <div className="app-container">
      <Header />
      <div className="main-layout">
        {isDashboardRoute() ? (
          <div className="main-shell">
            <Sidebar />
            <div className="main-content-area">
              <Routes>
                <Route path="/dashboard" element={<ProtectedRoute element={Dashboard} />} />
                <Route path="/addproduct" element={<ProtectedRoute element={AddProduct} />} />
                <Route path="/myproducts" element={<MyProducts />} />
                <Route path="/myproducts/update/:id" element={<Update />} />
                <Route path="/cart" element={<Cart />} />
                {/* Add more dashboard-related routes here if needed */}
              </Routes>
            </div>
          </div>
        ) : (
          <div className="content-area full-width">
            <main className="main-content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<AllProducts />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </main>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;
