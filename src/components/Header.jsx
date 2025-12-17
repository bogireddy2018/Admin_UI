import React from "react";

const Header = ({ toggleMenu, goToProfile, logout }) => {
  return (
    <header className="header">
      <div className="left">
        <button onClick={toggleMenu}>☰</button>
      </div>
      <div className="right">
        <button onClick={goToProfile}>👤</button>
        <button onClick={logout}>🚪</button>
      </div>
    </header>
  );
};

export default Header;
