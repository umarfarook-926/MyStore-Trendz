import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useCart } from '../context/CartContext';
const ProductDetails = () => {
    const { addToCart } = useCart();
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { dispatch } = useCart();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [id]);

  return (
    <div className="p-4">
      {product ? (
        <>
          <h2 className="text-2xl font-bold mb-2">{product.title}</h2>
          <img src={product.image} alt={product.title} className="w-full h-64 object-contain mb-4" />
          <p className="mb-2">{product.description}</p>
          <p className="font-semibold text-blue-600">Price: ${product.price}</p>
          <button
             onClick={() => addToCart(product)}
            className="mt-4 bg-green-500 text-white px-4 py-2 rounded rounded hover:bg-green-600 cursor-pointer"
          >
            Add to Cart
          </button>
        </>
      ) : <p>Loading...</p>}
    </div>
  );
};

export default ProductDetails;