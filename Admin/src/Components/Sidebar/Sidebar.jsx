import React from "react";
import "../Sidebar/Sidebar.css";
import { MdAddShoppingCart } from "react-icons/md";
import { MdFormatListBulletedAdd } from "react-icons/md";
import { MdDeliveryDining } from "react-icons/md";
import { assets } from "../../assets/assets";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-options">
        <NavLink to={"/add"} className="sidebar-option">
          {/* <img src={assets.add_icon} alt="" /> */}
          <MdAddShoppingCart className="icons" />
          <p>Add Items</p>
        </NavLink>
        <NavLink to={"/list"} className="sidebar-option">
          {/* <img src={assets.order_icon} alt="" /> */}
          <MdFormatListBulletedAdd className="icons" />
          <p>List Items</p>
        </NavLink>
        <NavLink to={"/orders"} className="sidebar-option">
          {/* <img src={assets.order_icon} alt="" /> */}
          <MdDeliveryDining className="icons" />
          <p>Orders</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
