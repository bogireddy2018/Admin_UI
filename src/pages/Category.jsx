import React, { useEffect, useRef, useState } from "react";
import "./Category.css";
import api from "../api/api";

const Category = () => {
  const [categories, setCategories] = useState([]);
  const [errors, setErrors] = useState({});
  const hasFetched = useRef(false);

  const [newCategory, setNewCategory] = useState({
    name: "",
    description: "",
    restaurant: "",
    type: "",
  });

  /*GET ALL CATEGORIES*/
  const fetchCategories = async () => {
    try {
      const res = await api.get("/categories");
      setCategories(res.data);
    } catch (error) {
      console.error("Fetch failed:", error);
    }
  };

  useEffect(() => {
    if (hasFetched.current) return;
    hasFetched.current = true;
    fetchCategories();
  }, []);

  /* HANDLE CHANGE*/
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewCategory({ ...newCategory, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  /*VALIDATION*/
  const validate = () => {
    let tempErrors = {};

    if (!newCategory.name.trim())
      tempErrors.name = "Category name is required";

    if (!newCategory.description.trim())
      tempErrors.description = "Description is required";

    if (!newCategory.restaurant.trim())
      tempErrors.restaurant = "Restaurant is required";

    if (!newCategory.type)
      tempErrors.type = "Type is required";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  /* SAVE CATEGORY */
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      console.log("Submitted JSON:", newCategory);

      // SAVE API
      const res = await api.post("/categories", newCategory);

      console.log("Saved Category:", res.data);

      // UPDATE TABLE DIRECTLY (NO EXTRA GET)
      setCategories([...categories, res.data]);

      // RESET FORM
      setNewCategory({
        name: "",
        description: "",
        restaurant: "",
        type: "",
      });

      setErrors({});
    } catch (error) {
      console.error("Save failed:", error);
      alert("Failed to save category");
    }
  };

  return (
    <div className="category-page">
      <h2 className="page-title">Category</h2>

      <div className="category-container">
        {/* FORM */}
        <div className="category-form card">
          <h3>Add New Category</h3>

          <form onSubmit={handleSubmit}>

            {errors.name && <div className="error-text">{errors.name}</div>}
            <input
              type="text"
              name="name"
              placeholder="Category Name"
              value={newCategory.name}
              onChange={handleChange}
              className="input-field"
            />
            {errors.description && (
              <div className="error-text">{errors.description}</div>
            )}
            <input
              type="text"
              name="description"
              placeholder="Category Description"
              value={newCategory.description}
              onChange={handleChange}
              className="input-field"
            />

            {errors.restaurant && (
              <div className="error-text">{errors.restaurant}</div>
            )}
            <input
              type="text"
              name="restaurant"
              placeholder="Restaurant Name"
              value={newCategory.restaurant}
              onChange={handleChange}
              className="input-field"
            />

            {errors.type && <div className="error-text">{errors.type}</div>}
            <select
              name="type"
              value={newCategory.type}
              onChange={handleChange}
              className="input-field"
            >
              <option value="">Select Type</option>
              <option value="Veg">Veg</option>
              <option value="Non-Veg">Non-Veg</option>
            </select>

            <button type="submit" className="btn">
              Add
            </button>
          </form>
        </div>

        {/* TABLE */}
        <div className="category-table card">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
            <h3>Category List</h3>
            <span>Total Categories : {categories.length}</span>
          </div>

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
              {categories.length === 0 ? (
                <tr>
                  <td colSpan="5" style={{ textAlign: "center", padding: "10px" }}>
                    No categories found
                  </td>
                </tr>
              ) : (
                categories.map((cat) => (
                  <tr key={cat.id}>
                    <td>{cat.id}</td>
                    <td>{cat.name}</td>
                    <td>{cat.description}</td>
                    <td>{cat.restaurant}</td>
                    <td>{cat.type}</td>
                  </tr>
                ))
              )}
            </tbody>

          </table>
        </div>
      </div>
    </div>
  );
};

export default Category;
