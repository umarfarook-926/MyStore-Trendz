import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  return (
    <motion.div
      layout
      whileHover={{ scale: 1.05 }}
      className="border p-4 rounded shadow hover:shadow-lg cursor-pointer"
      onClick={() => navigate(`/product/${product.id}`)}
    >
      <img src={product.image} alt={product.title} className="h-40 mx-auto mb-4 object-contain" />
      <h3 className="font-semibold text-lg mb-1">{product.title}</h3>
      <p className="text-blue-600 font-bold">${product.price}</p>
    </motion.div>
  );
};

export default ProductCard;