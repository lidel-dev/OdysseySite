import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ItemPage = () => {
  const [item, setItem] = useState(null);
  const [debugInfo, setDebugInfo] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    try {
      // Get all items from localStorage
      const storedItems = JSON.parse(localStorage.getItem('apparelItems') || '[]');
      
      // Add debug information
      setDebugInfo(`Looking for ID: ${id}
        Number of items in storage: ${storedItems.length}
        Available IDs: ${storedItems.map(item => item.id).join(', ')}
      `);

      // Find the item with matching id
      const foundItem = storedItems.find(item => item.id.toString() === id);
      
      if (foundItem) {
        setItem(foundItem);
      } else {
        setDebugInfo(prev => `${prev}\nNo item found with ID ${id}`);
      }
    } catch (error) {
      setDebugInfo(`Error: ${error.message}`);
    }
  }, [id]);

  if (!item) {
    return (
      <div className="max-w-4xl mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Item Not Found</h1>
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          <p>Unable to find the requested item.</p>
        </div>
        <div className="bg-gray-100 p-4 rounded mb-4">
          <h2 className="font-bold mb-2">Debug Information:</h2>
          <pre className="whitespace-pre-wrap">{debugInfo}</pre>
        </div>
        <button 
          onClick={() => navigate('/apparel')}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Back to Apparel
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <img 
            src={item.image} 
            alt={item.name} 
            className="w-full rounded-lg shadow-lg"
          />
        </div>
        
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold mb-4">{item.name}</h1>
          <p className="text-2xl font-bold text-blue-600 mb-4">${item.price}</p>
          
          <div className="space-y-4">
            <div>
              <h2 className="text-xl font-semibold mb-2">Description</h2>
              <p className="text-gray-700">{item.description}</p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h2 className="font-semibold">Category</h2>
                <p>{item.category}</p>
              </div>
              
              <div>
                <h2 className="font-semibold">Condition</h2>
                <p>{item.condition}</p>
              </div>
            </div>
            
            <div>
              <h2 className="font-semibold">Contact Information</h2>
              <p>{item.contact}</p>
            </div>
            
            {item.other && (
              <div>
                <h2 className="font-semibold">Additional Details</h2>
                <p>{item.other}</p>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <button 
        onClick={() => navigate('/apparel')}
        className="mt-8 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Back to Apparel
      </button>
    </div>
  );
};

export default ItemPage;