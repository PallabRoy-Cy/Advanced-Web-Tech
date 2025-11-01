import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "./cartcontext";
import { Badge } from "antd";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./AllProducts.css"; // Import your CSS file
// import Swal from 'sweetalert2';
import Search from "./search";
import SearchResults from "./SearchResults";
import { demoProducts, searchDemoProducts } from "../assets/assets/demo/demoProducts";

function AllProducts() {
  const [cart, setCart] = useCart();
  const [productData, setProductData] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [isUsingDemo, setIsUsingDemo] = useState(false);




  // const redirectToLogin = () => {
  //   Swal.fire({
  //     icon: 'info',
  //     title: 'You need to log in',
  //     text: 'Redirecting to login page...',
  //   }).then(() => {
  //     window.location.href = '/login';
  //   });
  // };
  const fetchProductData = () => {
    fetch("http://127.0.0.1:8000/api/allproducts")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to load products");
        }
        return response.json();
      })
      .then((data) => {
        setProductData(data);
        setIsUsingDemo(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        console.warn("API unavailable, showing demo products.");
        setProductData(demoProducts);
        setIsUsingDemo(true);
      });
  };

  useEffect(() => {
    fetchProductData();
  }, []);

  const handleSearchResults = (results) => {
    setSearchResults(results);
    setIsSearching(results.length > 0);
  };

  const handleDemoSearch = (searchTerm) => {
    const results = searchDemoProducts(searchTerm);
    setSearchResults(results);
    setIsSearching(results.length > 0);
  };

  return (
    <div className="all-products">
      <div className="all-products-header">

        <div className="cart-button">
          <Badge count={cart?.length} showZero>
            <Link to="/cart">
              <button className="actual-button">
                <i className="fa-solid fa-cart-shopping"></i>
              </button>
            </Link>
          </Badge>
        </div>

        <div className="search-bar">
          <Search 
            onSearchResults={handleSearchResults} 
            onDemoSearch={handleDemoSearch}
            isUsingDemo={isUsingDemo}
          />
        </div>

      </div>
      
      {/* Demo Mode Notification */}
      {isUsingDemo && (
        <div className="demo-notification">
          <i className="fa-solid fa-info-circle"></i>
          <span>API unavailable, showing demo products.</span>
        </div>
      )}
      
      {/* Search Results */}
      {isSearching && <SearchResults searchResult={searchResults} />}
      
      {/* Regular Products */}
      {!isSearching && productData.length > 0 && (
        <div className="product-body">
          {productData.map((item) => (
            <div className="product-list" key={item.id}>
              <div className="product-image">
                <img
                  src={isUsingDemo ? item.pdimg : "http://127.0.0.1:8000/" + item.pdimg}
                  className="product-image"
                  alt="Product"
                />
              </div>
              <div className="product-card">
                <h2>{item.product}</h2>
                <div className="product-details">
                  <div className="left-details">
                    <p>Manufacturer: {item.manufacturer}</p>
                    <p>Price: {item.price}</p>
                    <p>Quantity: {item.quantity}</p>
                  </div>
                  <div className="right-details">
                    <p>Tags: {item.tags}</p>
                    <p>Description: {item.description}</p>
                  </div>
                </div>
              </div>
              <div className="product-button">
                <button
                  onClick={() => {
                    setCart([...cart, item]);
                    localStorage.setItem(
                      "cart_info",
                      JSON.stringify([...cart, item])
                    );
                    toast.success("Product added to cart");
                  }}
                >
                  <i className="fa-solid fa-cart-plus"></i> Add to cart
                </button>
              </div>
            </div>
          ))}
          <ToastContainer
            position="top-center"
            autoClose={2000}
            hideProgressBar={true}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </div>
      )}
    </div>
  );
}

export default AllProducts;

