import React, { useState } from "react";
import "../SearchBar/SearchBar.css";
import { menu_list } from "../../assets/assets";
const SearchBar = ({ category, setcategory }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
  };
  return (
    <div className="search-bar-container">
      <input
        type="text"
        className="search-input"
        placeholder="Search for restaurant and food"
        value={searchTerm}
        onChange={handleSearch}
      />
      <h2>Popular cuisines</h2>
      <div className="search-results">
        {menu_list.map((item, index) => {
          return (
            <div
              onClick={() => {
                setcategory((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name
                );
              }}
              key={index}
              className="search-result-items"
            >
              <img
                className={category === item.menu_name ? "active" : ""}
                src={item.menu_image}
                alt=""
              />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SearchBar;
