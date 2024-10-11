import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ListItems.css'; // Import your CSS

const ListItems = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    category: '',
    name: '',
    description: '',
    price: '',
    condition: '',
    contact: '',
    other: '',
    image: null,
    imagePreview: null
  });

  const categories = ['Shirts', 'Pants', 'Dresses', 'Shoes', 'Accessories'];
  const conditions = ['New', 'Like New', 'Good', 'Fair', 'Poor'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prevData => ({
          ...prevData,
          image: file,
          imagePreview: reader.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const existingItems = JSON.parse(localStorage.getItem('apparelItems') || '[]');
    
    const newItem = {
      ...formData,
      id: Date.now().toString(),
      image: formData.imagePreview 
    };
    
    const updatedItems = [...existingItems, newItem];
    
    localStorage.setItem('apparelItems', JSON.stringify(updatedItems));
  };

  return (
    <div className="container">
      <h1>List New Item</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="form-group">
          <label className="label">Category:</label>
          <select 
            name="category" 
            value={formData.category} 
            onChange={handleChange}
            className="select"
            required
          >
            <option value="">Select Category</option>
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label className="label">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="input"
            required
          />
        </div>

        <div className="form-group">
          <label className="label">Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="textarea"
            rows="3"
            required
          />
        </div>

        <div className="form-group">
          <label className="label">Price:</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="input"
            required
          />
        </div>

        <div className="form-group">
          <label className="label">Condition:</label>
          <select 
            name="condition" 
            value={formData.condition} 
            onChange={handleChange}
            className="select"
            required
          >
            <option value="">Select Condition</option>
            {conditions.map(condition => (
              <option key={condition} value={condition}>{condition}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label className="label">Contact Information:</label>
          <input
            type="text"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            className="input"
            required
          />
        </div>

        <div className="form-group">
          <label className="label">Other Details:</label>
          <textarea
            name="other"
            value={formData.other}
            onChange={handleChange}
            className="textarea"
            rows="2"
          />
        </div>

        <div className="form-group">
          <label className="label">Image:</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="input"
            required
          />
          {formData.imagePreview && (
            <img 
              src={formData.imagePreview} 
              alt="Preview" 
              className="img-preview"
            />
          )}
        </div>

        <button 
          type="submit"
          className="button"
        >
          List Item
        </button>
      </form>
    </div>
  );
};

export default ListItems;
