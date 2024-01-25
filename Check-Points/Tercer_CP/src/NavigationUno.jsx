import React, { useState } from "react";

export function Navigation() {
  const [currentPage, setCurrentPage] = useState("home");

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <h2>Navigation Component</h2>
      <button onClick={() => handlePageChange("home")}>Home</button>
      <button onClick={() => handlePageChange("about")}>About Us</button>
      <button onClick={() => handlePageChange("contact")}>Contact Us</button>

      <p>Estás en la página: {currentPage}</p>

      {currentPage === "home" && <p>Contenido de la página Home</p>}
      {currentPage === "about" && <p>Contenido de la página About Us</p>}
      {currentPage === "contact" && <p>Contenido de la página Contact Us</p>}
    </div>
  );
}
