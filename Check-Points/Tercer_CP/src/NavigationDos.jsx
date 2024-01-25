import React, { useState } from "react";
import Login from "./Login4b";
import AboutUs from "./AboutUs";

export function NavigationDos() {
  const [currentPage, setCurrentPage] = useState("home");

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderPageContent = () => {
    switch (currentPage) {
      case "home":
        return <p>Contenido de la página Home</p>;
      case "about":
        return <AboutUs/>
        // return <p>Contenido de la página About Us</p>;
      case "contact":
        return <p>Contenido de la página Contact Us</p>;
      case "login":
        return <Login />;
      default:
        return null;
    }
  };

  return (
    <div>
      <h2>Navigation Component 2 - Switch statement</h2>
      <button onClick={() => handlePageChange("home")}>Home</button>
      <button onClick={() => handlePageChange("about")}>About Us</button>
      <button onClick={() => handlePageChange("contact")}>Contact Us</button>
      <button onClick={() => handlePageChange("login")} >
        Login
      </button>

      <p>Estás en la página: {currentPage}</p>

      {renderPageContent()}
    </div>
  );
}
