import React from "react";

const SideMenu = ({ selectMenu }) => {
  return (
    <nav className="side-menu">
      <ul>
        {/* <li onClick={() => selectMenu("Home")}>Home</li>
        <li onClick={() => selectMenu("Settings")}>Settings</li>
        <li onClick={() => selectMenu("About")}>About</li> */}
        <li onClick={() => selectMenu("Category")}>Category</li>
        <li onClick={() => selectMenu("Items")}>Items</li>
        <li onClick={() => selectMenu("HotelTable")}>HotelTable</li>
        <li onClick={() => selectMenu("Waiter")}>Waiter</li>
      </ul>
    </nav>
  );
};

export default SideMenu;

