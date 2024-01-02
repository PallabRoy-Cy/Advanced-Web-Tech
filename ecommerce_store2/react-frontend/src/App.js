import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Sidebar from './components/Sidebar';
import Dashboard from './components/dashboard';
import Login from './components/login';
import AddProduct from './components/addproduct';
import Update from './components/update';
import MyProducts from './components/myproducts';
import Cart from './components/cart';
import Register from './components/registration';
import axios from 'axios';
import AllProducts from './components/allproducts';
import Contact from './components/contact';

axios.defaults.withCredentials = true;

function App() {
  const location = useLocation();

  const shouldRenderSidebar = () => {
    const excludedPaths = ['/', '/login', '/register'];
    return !excludedPaths.includes(location.pathname);
  };

  return (
    <div>
      <Header />
      <div id="layoutSidenav">
        {shouldRenderSidebar() && (
          <div id="layoutSidenav_nav">
            <Sidebar />
          </div>
        )}
        <div id="layoutSidenav_content">
          <main>
            <Routes>
              <Route path="/" element={<AllProducts />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/addproduct" element={<AddProduct />} />
              <Route path="/myproducts" element={<MyProducts />} />
              <Route path="/myproducts/update/:id" element={<Update />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/contact" element={<Contact/>} />
            </Routes>
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
