import React from "react";
import "../List/List.css";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useEffect } from "react";

const List = ({ url }) => {
  const [list, setList] = useState([]);
  const [visibleItems, setVisibleItems] = useState(6);

  const fetchList = async () => {
    try {
      const response = await axios.get(`${url}/api/food/list`);
      if (response.data.success) {
        setList(response.data.data);
      } else {
        toast.error("Error fetching food items");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occured while fetching food items");
    }
  };

  const removeFood = async (fooId) => {
    try {
      const response = await axios.post(`${url}/api/food/remove`, {
        id: fooId,
      });
      await fetchList();
      if (response.data.success) {
        toast.success(response.data.message);
        fetchList(page);
      } else {
        toast.error("Error");
      }
    } catch (error) {
      console.error("Error", error);
      toast.error("An error removing while fetching food items");
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  const handleShowMorw = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 6);
  };

  const handleShowLess = () => {
    setVisibleItems((prevVisibleItems) => Math.max(6, prevVisibleItems - 6));
  };

  return (
    <>
      <div className="list flex-col">
        <p>All Foods List</p>
        <div className="list-table">
          <div className="list-table-format title">
            <b>Image</b>
            <b>Name</b>
            <b>Category</b>
            <b>Price</b>
            <b>Action</b>
          </div>
          {list.slice(0, visibleItems).map((item, index) => {
            return (
              <div key={index} className="list-table-format">
                <img src={`${url}/images/` + item.image} alt="" />
                <p>{item.name}</p>
                <p>{item.category}</p>
                <p>{item.price}</p>
                <p className="cursor" onClick={() => removeFood(item._id)}>
                  X
                </p>
              </div>
            );
          })}
        </div>
        <div className="show-container">
          {visibleItems < list.length && (
            <button onClick={handleShowMorw} className="show-more">
              show More
            </button>
          )}
          {visibleItems > 6 && (
            <button onClick={handleShowLess} className="show-less">
              Show Less
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default List;
