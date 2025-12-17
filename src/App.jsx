import React, { useState } from "react";
import Header from "./components/Header";
import SideMenu from "./components/SideMenu";

import HomePage from "./pages/HomePage";
import SettingsPage from "./pages/SettingsPage";
import AboutPage from "./pages/AboutPage";
import Category from "./pages/Category";
import Items from "./pages/Items";
import HotelTable from "./pages/HotelTable";
import Waiter from "./pages/Waiter";

const App = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [selectedPage, setSelectedPage] = useState("Home");

  const toggleMenu = () => setMenuOpen(!isMenuOpen);
  const selectMenu = (page) => {
    setSelectedPage(page);
    setMenuOpen(false);
  };
  const goToProfile = () => alert("Profile clicked");
  const logout = () => alert("Logout clicked");

  return (
    <div className="app">
      <Header toggleMenu={toggleMenu} goToProfile={goToProfile} logout={logout} />
      {isMenuOpen && <SideMenu selectMenu={selectMenu} />}

      <main className="content">
        {selectedPage === "Home" && <HomePage />}
        {selectedPage === "Settings" && <SettingsPage />}
        {selectedPage === "About" && <AboutPage />}
        {selectedPage === "Category" && <Category />}
        {selectedPage === "Items" && <Items />}
        {selectedPage === "HotelTable" && <HotelTable />}
        {selectedPage === "Waiter" && <Waiter />}
      </main>
    </div>
  );
};

export default App;
