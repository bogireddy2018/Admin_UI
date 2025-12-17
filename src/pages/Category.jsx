import React, { useState } from "react";
import "./Category.css";

const Category = () => {
  const [categories, setCategories] = useState([
    {
      id: 1,
      name: "Breakfast",
      description: "Morning meals",
      restaurant: "Tiffin House",
      type: "Veg",
    },
    {
      id: 2,
      name: "Lunch",
      description: "Afternoon meals",
      restaurant: "Tiffin House",
      type: "Non-Veg",
    },
  ]);

  const [newCategory, setNewCategory] = useState({
    name: "",
    description: "",
    restaurant: "",
    type: "Veg",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewCategory({ ...newCategory, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Simple validation
    if (newCategory.name.trim() === "" || newCategory.restaurant.trim() === "") return;
  
    // Prepare new category object with id
    const nextId = categories.length > 0 ? categories[categories.length - 1].id + 1 : 1;
    const categoryToAdd = { id: nextId, ...newCategory };
  
    // Add to the table
    setCategories([...categories, categoryToAdd]);
  
    // Show JSON in console
    console.log("Submitted JSON:", JSON.stringify(categoryToAdd, null, 2));
  
  
    // Reset form
    setNewCategory({
      name: "",
      description: "",
      restaurant: "",
      type: "Veg",
    });
  };

  return (
    <div className="category-page">
      <h2 className="page-title">Category</h2>
      <div className="category-container">
        {/* Left: Form */}
        <div className="category-form card">
          <h3>Add New Category</h3>
          <form onSubmit={handleSubmit} >
            <input
              type="text"
              name="name"
              placeholder="Category Name"
              value={newCategory.name}
              onChange={handleChange}
              className="input-field"
            />
            <input
              type="text"
              name="description"
              placeholder="Category Description"
              value={newCategory.description}
              onChange={handleChange}
              className="input-field"
            />
            <input
              type="text"
              name="restaurant"
              placeholder="Restaurant Name"
              value={newCategory.restaurant}
              onChange={handleChange}
              className="input-field"
            />
            <select
              name="type"
              value={newCategory.type}
              onChange={handleChange}
              className="input-field"
            >
              <option value="Veg">Veg</option>
              <option value="Non-Veg">Non-Veg</option>
            </select>
            <button type="submit" className="btn" >
              Add
            </button>
          </form>
        </div>

        {/* Right: Table */}
        <div className="category-table card">
          <h3>Category List</h3>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Description</th>
                <th>Restaurant</th>
                <th>Type</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((cat) => (
                <tr key={cat.id}>
                  <td>{cat.id}</td>
                  <td>{cat.name}</td>
                  <td>{cat.description}</td>
                  <td>{cat.restaurant}</td>
                  <td>{cat.type}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Category;
