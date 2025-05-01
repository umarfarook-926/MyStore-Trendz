// src/pages/Products.jsx
import React, { useState } from 'react';
import ProductList from '../components/ProductList';

const Products = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">All Products</h2>
      
      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search products..."
        className="p-2 border rounded w-full mb-4"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      {/* Filter */}
      <select
        className="p-2 border rounded w-full mb-4"
        value={categoryFilter}
        onChange={(e) => setCategoryFilter(e.target.value)}
      >
        <option value="">All Categories</option>
        <option value="electronics">Electronics</option>
        <option value="jewelery">Jewelry</option>
        <option value="men's clothing">Men's Clothing</option>
        <option value="women's clothing">Women's Clothing</option>
      </select>

      <ProductList searchQuery={searchQuery} categoryFilter={categoryFilter} />
    </div>
  );
};

export default Products;
