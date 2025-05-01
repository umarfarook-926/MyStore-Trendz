import React from 'react';
import { useCart } from '../context/CartContext';

const CartItem = ({ item }) => {
  const { increaseQuantity, decreaseQuantity, removeFromCart } = useCart();

  return (
    <div className="flex items-center justify-between border-b py-4 ">
      <img src={item.image} alt={item.title} className="h-16 w-16 object-contain w-40" />
      <div className="flex-1 ml-4 w-40">
        <h4 className="font-semibold">{item.title}</h4>
        <p>${item.price}</p>
        <div className="flex items-center mt-2">
          <button
            onClick={() => decreaseQuantity(item.id)}
            className="px-2 py-1 bg-gray-200 rounded cursor-pointer"
          >
            -
          </button>
          <span className="mx-2">{item.quantity}</span>
          <button
            onClick={() => increaseQuantity(item.id)}
            className="px-2 py-1 bg-gray-200 rounded cursor-pointer"
          >
            +
          </button>
        </div>
      </div>
      <button
        onClick={() => removeFromCart(item.id)}
        className="text-red-500 hover:text-red-700 cursor-pointer"
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;
