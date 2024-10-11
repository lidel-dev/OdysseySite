import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    loadCartItems();
  }, []);

  const loadCartItems = () => {
    const storedCart = JSON.parse(localStorage.getItem('cart') || '[]');
    setCartItems(storedCart);
  };

  const removeFromCart = (itemId) => {
    const updatedCart = cartItems.filter(item => item.id !== itemId);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const totalPrice = cartItems.reduce((sum, item) => sum + Number(item.price), 0);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      
      {cartItems.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-600 mb-4">Your cart is empty</p>
          <button 
            onClick={() => navigate('/store')}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Continue Shopping
          </button>
        </div>
      ) : (
        <>
          <div className="space-y-4 mb-8">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center border rounded-lg p-4 shadow-sm">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-24 h-24 object-cover rounded"
                />
                <div className="ml-4 flex-grow">
                  <h2 className="text-xl font-semibold">{item.name}</h2>
                  <p className="text-gray-600">{item.category}</p>
                  <p className="font-bold">${item.price}</p>
                </div>
                <button 
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          
          <div className="border-t pt-4">
            <div className="flex justify-between items-center mb-4">
              <span className="text-xl font-bold">Total:</span>
              <span className="text-xl font-bold">${totalPrice.toFixed(2)}</span>
            </div>
            
            <button 
              className="w-full bg-green-500 text-white py-3 rounded-lg text-lg font-semibold hover:bg-green-600"
            >
              Continue to Payment
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;