import React, { useState, useEffect } from "react";
import { useCart } from "./cartcontext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Search({ onSearchResults, onDemoSearch, isUsingDemo }) {
  const [cart, setCart] = useCart();
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const handleSearch = () => {
    if (isUsingDemo) {
      // Use demo search when API is unavailable
      if (onDemoSearch) {
        onDemoSearch(searchValue);
      }
      return;
    }

    fetch(`http://127.0.0.1:8000/api/search/${searchValue}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch search results");
        }
        return response.json();
      })
      .then((data) => {
        setSearchResult(data);
        if (onSearchResults) {
          onSearchResults(data);
        }
      })
      .catch((error) => {
        console.error("Error fetching search results:", error);
        console.warn("API unavailable, using demo search.");
        setSearchResult([]);
        if (onDemoSearch) {
          onDemoSearch(searchValue);
        }
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
    </div>
  );
}