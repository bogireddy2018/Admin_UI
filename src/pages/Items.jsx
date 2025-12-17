import React, { useState } from "react";
import "./Items.css";

const Items = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Pasta",
      description: "Delicious Italian pasta",
      category: "Lunch",
      price: 150,
      image: "",
    },
  ]);

  const [newItem, setNewItem] = useState({
    name: "",
    description: "",
    category: "",
    price: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setNewItem({ ...newItem, image: files[0] });
    } else {
      setNewItem({ ...newItem, [name]: value });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Basic validation
    if (newItem.name.trim() === "" || newItem.category.trim() === "") return;
  
    // Generate new ID
    const nextId = items.length > 0 ? items[items.length - 1].id + 1 : 1;
  
    // Create new item object
    const itemToAdd = { id: nextId, ...newItem };
  
    // Add to items state
    setItems([...items, itemToAdd]);
  
    // Show JSON in console
    console.log("Submitted Item JSON:", JSON.stringify(itemToAdd, null, 2));  
    // Reset form
    setNewItem({
      name: "",
      description: "",
      category: "",
      price: "",
      image: null,
    });
  };
  

  return (
    <div className="items-page">
      <h2 className="page-title">Items</h2>
      <div className="items-container">
        {/* Left: Form */}
        <div className="items-form card">
          <h3>Add New Item</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Item Name"
              value={newItem.name}
              onChange={handleChange}
              className="input-field"
            />
            <textarea
              name="description"
              placeholder="Item Description"
              value={newItem.description}
              onChange={handleChange}
              className="input-field"
            />
            <input
              type="text"
              name="category"
              placeholder="Category"
              value={newItem.category}
              onChange={handleChange}
              className="input-field"
            />
            <input
              type="number"
              name="price"
              placeholder="Price"
              value={newItem.price}
              onChange={handleChange}
              className="input-field"
            />
            <input
              type="file"
              name="image"
              onChange={handleChange}
              className="input-field"
              accept="image/*"
            />
            <button type="submit" className="btn">
              Add
            </button>
          </form>
        </div>

        {/* Right: Table */}
        <div className="items-table card">
          <h3>Items List</h3>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Description</th>
                <th>Category</th>
                <th>Price</th>
                <th>Image</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.description}</td>
                  <td>{item.category}</td>
                  <td>{item.price}</td>
                  <td>
                    {item.image ? (
                      <img
                        src={URL.createObjectURL(item.image)}
                        alt={item.name}
                        style={{ width: "50px", height: "50px", objectFit: "cover" }}
                      />
                    ) : (
                      "No Image"
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Items;
