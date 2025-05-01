// src/App.jsx
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails.jsx";
import Cart from "./pages/Cart";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode) setDarkMode(JSON.parse(savedMode));
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <CartProvider>
      <Router>
        <div
          className={
            darkMode ? "dark bg-gray-900 text-white" : "bg-white text-black"
          }
        >
          <Header setDarkMode={setDarkMode} />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />

              <Route path="/products" element={<Products />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;
