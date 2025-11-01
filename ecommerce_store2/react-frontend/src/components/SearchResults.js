import React from "react";
import { useCart } from "./cartcontext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SearchResults({ searchResult }) {
  const [cart, setCart] = useCart();

  if (!searchResult || searchResult.length === 0) {
    return null;
  }

  return (
    <div className="search-results-container">
      <div className="search-results-header">
        <h3>Search Results ({searchResult.length})</h3>
      </div>
      <div className="search-results-grid">
        {searchResult.map((item) => (
          <div className="search-result-item" key={item.id}>
            <div className="product-image">
              <img
                src={item.pdimg.startsWith('http') ? item.pdimg : `http://127.0.0.1:8000/${item.pdimg}`}
                className="product-image"
                alt={`Product: ${item.product}`}
              />
            </div>
            <div className="product-details">
              <h4>{item.product}</h4>
              <p className="manufacturer">Manufacturer: {item.manufacturer}</p>
              <p className="price">Price: ${item.price}</p>
              <p className="quantity">Quantity: {item.quantity}</p>
              <p className="tags">Tags: {item.tags}</p>
              <p className="description">Description: {item.description}</p>
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
      </div>
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
  );
}
