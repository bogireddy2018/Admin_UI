import React, { useState } from "react";
import "./HotelTable.css";

const HotelTable = () => {
  // Example restaurants
  const restaurants = ["Tiffin House", "Food Corner", "City Diner"];

  const [tables, setTables] = useState([
    { id: 1, tableId: "T1", restaurant: "Tiffin House", waiter: "John" },
  ]);

  const [newTable, setNewTable] = useState({
    tableId: "",
    restaurant: restaurants[0],
    waiter: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewTable({ ...newTable, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Basic validation
    if (newTable.tableId.trim() === "" || newTable.waiter.trim() === "") return;
  
    // Generate next ID
    const nextId = tables.length > 0 ? tables[tables.length - 1].id + 1 : 1;
  
    // Create table object
    const tableToAdd = { id: nextId, ...newTable };
  
    // Add to state
    setTables([...tables, tableToAdd]);
  
    // Show JSON in console
    console.log("Submitted Table JSON:", JSON.stringify(tableToAdd, null, 2));
    // Reset form
    setNewTable({ tableId: "", restaurant: restaurants[0], waiter: "" });
  };
  

  return (
    <div className="hotel-table-page">
      <h2 className="page-title">Hotel Tables</h2>
      <div className="hotel-table-container">
        {/* Left: Form */}
        <div className="hotel-table-form card">
          <h3>Add New Table</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="tableId"
              placeholder="Table ID"
              value={newTable.tableId}
              onChange={handleChange}
              className="input-field"
            />
            <select
              name="restaurant"
              value={newTable.restaurant}
              onChange={handleChange}
              className="input-field"
            >
              {restaurants.map((rest, idx) => (
                <option key={idx} value={rest}>
                  {rest}
                </option>
              ))}
            </select>
            <input
              type="text"
              name="waiter"
              placeholder="Waiter Name"
              value={newTable.waiter}
              onChange={handleChange}
              className="input-field"
            />
            <button type="submit" className="btn">
              Add
            </button>
          </form>
        </div>

        {/* Right: Table */}
        <div className="hotel-table-list card">
          <h3>Table List</h3>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Table ID</th>
                <th>Restaurant</th>
                <th>Waiter</th>
              </tr>
            </thead>
            <tbody>
              {tables.map((table) => (
                <tr key={table.id}>
                  <td>{table.id}</td>
                  <td>{table.tableId}</td>
                  <td>{table.restaurant}</td>
                  <td>{table.waiter}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default HotelTable;
