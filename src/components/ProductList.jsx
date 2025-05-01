// src/components/ProductList.jsx
import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ searchQuery, categoryFilter }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const filteredProducts = products.filter((product) => {
    return (
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (categoryFilter ? product.category === categoryFilter : true)
    );
  });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {loading ? (
        <p>Loading...</p>
      ) : (
        filteredProducts.map((product) => <ProductCard key={product.id} product={product} />)
      )}
    </div>
  );
};

export default ProductList;
