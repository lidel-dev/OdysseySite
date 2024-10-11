import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const StorePage = () => {
  const [items, setItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const categories = ['All', 'Shirts', 'Pants', 'Dresses', 'Shoes', 'Accessories'];

  useEffect(() => {
    loadItems();
  }, []);

  const loadItems = () => {
    const storedItems = JSON.parse(localStorage.getItem('apparelItems') || '[]');
    setItems(storedItems);
  };

  const addToCart = (item) => {
    const currentCart = JSON.parse(localStorage.getItem('cart') || '[]');
    const isItemInCart = currentCart.some(cartItem => cartItem.id === item.id);
    
    if (!isItemInCart) {
      const updatedCart = [...currentCart, item];
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      alert('Item added to cart!');
    } else {
      alert('This item is already in your cart');
    }
  };

  const clearStorage = () => {
    localStorage.clear();
    loadItems();
    alert('Local storage has been cleared');
  };

  const filteredItems = selectedCategory === 'All' 
    ? items 
    : items.filter(item => item.category === selectedCategory);

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold">Apparel For Sale</h1>
        <button 
          onClick={clearStorage}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          DevTool: Clear Local Storage
        </button>
        <Link to="/cart" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Go to Cart</Link>
      </div>
      
      <div className="mb-4">
        <label className="mr-2">Filter by Category:</label>
        <select 
          value={selectedCategory} 
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="p-2 border rounded"
        >
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>

      {filteredItems.length === 0 ? (
        <p className="text-gray-500">No items found.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredItems.map((item) => (
            <div key={item.id} className="border rounded-lg p-4 shadow-md">
              <Link to={`/item/${item.id}`} className="block">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-48 object-cover mb-2 rounded"
                />
                <p className="text-xl font-bold text-center mb-2">${item.price}</p>
              </Link>
              <button 
                onClick={() => addToCart(item)}
                className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default StorePage;