import React from "react";
import "../Header/Header.css";

function Header() {
  return (
    <div className="header" id="header">
      <div className="header-content">
        <h2>Order your favourite food here</h2>
        <p>
          Choose from a diverse menu featuring a delectable array of dishes
          crafted with the finest ingrediants and culinary expertise. Our
          mission is to satisfy your craving and elevate your dining experience,
          one delicious meal at a time
        </p>
        <button>View Menu</button>
      </div>
    </div>
  );
}

export default Header;