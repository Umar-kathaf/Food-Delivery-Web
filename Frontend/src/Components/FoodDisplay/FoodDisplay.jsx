import React, { useContext } from "react";
import "../FoodDisplay/FoodDisplay.css";
import { StoreContext } from "../../Context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";
import { useState } from "react";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);
  const [visibleItems, setVisibleItems] = useState(8);
  const [isExpended, setIsExpended] = useState(false);

  const handleShowMore = () => {
    if (visibleItems < 32) {
      setVisibleItems((prev) => Math.min(prev + 8, 32));
    } else {
      setVisibleItems(8);
      setIsExpended(false);
    }
  };

  const handleShowLess = () => {
    setVisibleItems(8);
    setIsExpended(false);
  };
  const filteredList = food_list.filter(
    (item) => category === "All" || category === item.category
  );
  return (
    <div className="food-display" id="food-isplay">
      <h2>Top Dishes Near You</h2>
      <div className="food-display-list">
        {filteredList.slice(0, visibleItems).map((item, index) => (
          <FoodItem
            key={index}
            id={item._id}
            name={item.name}
            description={item.description}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
      <div className="button-container">
        {visibleItems < 32 && (
          <button onClick={handleShowMore} className="show-more">
            Show More
          </button>
        )}
        {visibleItems > 8 && (
          <button onClick={handleShowLess} className="show-less">
            Show Less
          </button>
        )}
      </div>
    </div>
  );
};

export default FoodDisplay;
