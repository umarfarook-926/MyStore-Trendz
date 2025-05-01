// src/components/Header.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Header = ({ setDarkMode }) => {
  const { cartItems } = useCart();
  return (
    <header className="flex justify-between items-center p-4 bg-blue-500 dark:bg-gray-800 text-white">
      <Link to="/" className="text-xl font-bold">
        MyStore
      </Link>
      <nav className="flex space-x-4">
        <Link to="/" className="hover:text-gray-300">
          Home
        </Link>
        <Link to="/products" className="hover:text-gray-300">
          Products
        </Link>
        <Link to="/cart" className="relative">
          Cart
          <span className="ml-1 bg-red-500 text-white rounded-full px-2 py-0.5 text-sm font-bold">
            {cartItems.reduce((total, item) => total + item.quantity, 0)}
          </span>
        </Link>
      </nav>
      <button
        onClick={() => setDarkMode((prevMode) => !prevMode)}
        className="bg-gray-700 text-white p-2 rounded-full cursor-pointer"
      >
        Toggle Dark Mode
      </button>
    </header>
  );
};

export default Header;
