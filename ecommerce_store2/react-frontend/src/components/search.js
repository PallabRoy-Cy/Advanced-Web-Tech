import React, { useState, useEffect } from "react";
import { useCart } from "./cartcontext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Search() {
  const [cart, setCart] = useCart();
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const handleSearch = () => {
    fetch(`http://127.0.0.1:8000/api/search/${searchValue}`)
      .then((response) => response.json())
      .then((data) => {
        setSearchResult(data);
      })
      .catch((error) => {
        console.error("Error fetching search results:", error);
      });
  };

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    handleSearch();
  };

  useEffect(() => {
    // Optionally, you can automatically perform the search on component mount
    // handleSearch();
  }, [searchValue]);

  return (
    <div className="search-container">
      <form onSubmit={handleSearchSubmit} className="search-form">
        <input
          type="text"
          value={searchValue}
          onChange={handleInputChange}
          placeholder="Search products..."
        />
        <button type="submit">Search</button>
      </form>
      <div className="search-results">
        {searchResult.length > 0 && (
          <div className="product-list">
            {searchResult.map((item) => (
              <div className="product-item" key={item.id}>
              <div className="product-image">
                <img
                  src={`http://127.0.0.1:8000/${item.pdimg}`}
                  className="product-image"
                  alt={`Product: ${item.product}`}
                />
              </div>
              <div className="product-details">
                <h2>{item.product}</h2>
                <div className="product-description">
                  <p>Manufacturer: {item.manufacturer}</p>
                  <p>Price: {item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                  <p>Tags: {item.tags}</p>
                  <p>Description: {item.description}</p>
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
                  <i className="fa-solid fa-cart-plus"></i>Add to cart
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
    </div>
  );
}