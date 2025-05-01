// src/pages/Cart.jsx
import React from 'react';
import { useCart } from '../context/CartContext';
import CartItem from '../components/CartItem';

const Cart = () => {
  const { cartItems } = useCart();

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);

  return (
    <div className="p-4 min-h-screen ">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map(item => (
            <CartItem key={item.id} item={item} />
          ))}
          <div className="text-right font-bold text-xl mt-4">
            Total: ${totalPrice}
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
