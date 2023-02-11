import React from "react";
import "./NavBar.css"

function MobileNavbar() {
  return (
    <div
        className="fade-in"
      style={{
        color: "black",
        backgroundColor: "white",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <ul style={{ listStyle: "none", textAlign: "center" }}>
        <li>HOME</li>
        <li>VEGETABLES</li>
        <li>FRUITS</li>
        <li>FISH</li>
        <li>MEAT</li>
        <li>DRINKS</li>
      </ul>
    </div>
  );
}

export default MobileNavbar;
